import prisma from "@/lib/db";
import { updateLeaveStatus } from "@/app/actions/leaves/handleLeave";
import ViewAll from "@/app/_components/ViewAll";
import { get_current_user } from "@/app/actions/auth/get_current_user";

const Page = async () => {
  // Fix: Add parentheses to actually call the function
  const user = await get_current_user();

  // Get leaves for users managed by current user
  const leaves = await prisma.leave_request.findMany({
    where: {
      no_of_days: { gt: 5 },
      status_id: { in: [5, 8] }, // Filter for leaves with status_id 5 or 8
    },
    include: {
      status: true,
      user: {
        include: {
          role: true,
          department: true,
        },
      },
      leave_type: true, // Include leave type details
    },
    orderBy: {
      applied_date: "desc",
    },
  });

  return <ViewAll leaves={leaves} role={user?.role} />;
};

export default Page;
