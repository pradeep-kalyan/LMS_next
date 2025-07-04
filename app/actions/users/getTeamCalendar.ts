// actions/get_team_calendar.ts
"use server";
import prisma from "@/lib/db";
import { get_current_user } from "@/app/actions/auth/get_current_user";

export const getTeamCalendar = async () => {
  const user = await get_current_user();
  if (!user) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  try {
    // Get current user's full details
    const currentUser = await prisma.user.findUnique({
      where: { cus_id: user.id },
      include: {
        role: true,
        department: true,
      },
    });

    if (!currentUser) return null;

    let teamMembers = [];
    let subordinates = [];

    // If user is a manager, get their subordinates and broader team
    if (currentUser.role_id === 3) {
      // MANAGER role
      // Get direct subordinates (people reporting to this manager)
      subordinates = await prisma.user.findMany({
        where: {
          manager_id: currentUser.cus_id,
          is_Active: true,
        },
        include: {
          role: true,
          department: true,
          leave_requests: {
            where: {
              start_date: { lte: today },
              end_date: { gte: today },
              status: {
                name: {
                  in: ["APPROVED", "AUTO_APPROVED"],
                },
              },
            },
            include: {
              leave_type: true,
              status: true,
            },
          },
        },
      });

      // Get all managers for broader team view
      teamMembers = await prisma.user.findMany({
        where: {
          role_id: 3,
          is_Active: true,
        },
        include: {
          role: true,
          department: true,
          leave_requests: {
            where: {
              start_date: { lte: today },
              end_date: { gte: today },
              status: {
                name: {
                  in: ["APPROVED", "AUTO_APPROVED"],
                },
              },
            },
            include: {
              leave_type: true,
              status: true,
            },
          },
        },
      });
    } else {
      // If user is not a manager, get team members under the same manager
      teamMembers = await prisma.user.findMany({
        where: {
          manager_id: currentUser.manager_id,
          is_Active: true,
        },
        include: {
          role: true,
          department: true,
          leave_requests: {
            where: {
              start_date: { lte: today },
              end_date: { gte: today },
              status: {
                name: {
                  in: ["APPROVED", "AUTO_APPROVED"],
                },
              },
            },
            include: {
              leave_type: true,
              status: true,
            },
          },
        },
      });

      // Non-managers don't have subordinates
      subordinates = [];
    }

    // Get upcoming leaves for the next 7 days
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    // Get all relevant user IDs for upcoming leaves
    const allRelevantUserIds = [
      ...teamMembers.map((member) => member.cus_id),
      ...subordinates.map((sub) => sub.cus_id),
    ];

    const upcomingLeaves = await prisma.leave_request.findMany({
      where: {
        user_id: {
          in: allRelevantUserIds,
        },
        start_date: {
          gte: tomorrow,
          lte: nextWeek,
        },
        status: {
          name: {
            in: ["APPROVED", "AUTO_APPROVED"],
          },
        },
      },
      include: {
        user: {
          include: {
            role: true,
            department: true,
          },
        },
        leave_type: true,
        status: true,
      },
      orderBy: {
        start_date: "asc",
      },
    });

    // Get extended leave data for calendar views (next 30 days)
    const nextMonth = new Date(today);
    nextMonth.setDate(nextMonth.getDate() + 30);

    const extendedLeaves = await prisma.leave_request.findMany({
      where: {
        user_id: {
          in: allRelevantUserIds,
        },
        start_date: {
          gte: today,
          lte: nextMonth,
        },
        status: {
          name: {
            in: ["APPROVED", "AUTO_APPROVED"],
          },
        },
      },
      include: {
        user: {
          include: {
            role: true,
            department: true,
          },
        },
        leave_type: true,
        status: true,
      },
    });

    // Add extended leave data to team members for calendar views
    const enhancedTeamMembers = teamMembers.map((member) => ({
      ...member,
      all_leaves: extendedLeaves.filter(
        (leave) => leave.user_id === member.cus_id
      ),
    }));

    const enhancedSubordinates = subordinates.map((sub) => ({
      ...sub,
      all_leaves: extendedLeaves.filter(
        (leave) => leave.user_id === sub.cus_id
      ),
    }));

    return {
      currentUser,
      teamMembers: enhancedTeamMembers,
      subordinates: enhancedSubordinates,
      upcomingLeaves,
      extendedLeaves,
      todayDate: today,
    };
  } catch (error) {
    console.error("Error fetching team calendar:", error);
    return null;
  }
};
