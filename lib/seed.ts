//seed script run at start of application to create required data
import prisma from "./db";

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data (optional - remove if you want to preserve data)
  await prisma.leave_request_history.deleteMany();
  await prisma.leave_request.deleteMany();
  await prisma.leave_balance.deleteMany();
  await prisma.leave_policy.deleteMany();
  await prisma.holiday.deleteMany();
  await prisma.user.deleteMany();
  await prisma.departments.deleteMany();
  await prisma.leave_status.deleteMany();
  await prisma.leave_types.deleteMany();
  await prisma.roles.deleteMany();

  // 1. Seed Roles
  console.log("📝 Seeding roles...");
  const roles = await Promise.all([
    prisma.roles.create({
      data: {
        name: "ADMIN",
        description: "System administrator with full access",
        is_Active: true,
        id: 1,
      },
    }),
    prisma.roles.create({
      data: {
        name: "HR",
        description: "Human Resources personnel",
        is_Active: true,
        id: 2,
      },
    }),
    prisma.roles.create({
      data: {
        name: "MANAGER",
        description: "Team manager with approval rights",
        is_Active: true,
        id: 3,
      },
    }),
    prisma.roles.create({
      data: {
        name: "EMPLOYEE",
        description: "Regular employee",
        is_Active: true,
        id: 4,
      },
    }),
  ]);

  // 2. Seed Leave Types
  console.log("🏖️ Seeding leave types...");
  const leaveTypes = await Promise.all([
    prisma.leave_types.create({
      data: {
        name: "CASUAL",
        description: "Casual leave for personal reasons",
        max_days_per_request: "5",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "SICK",
        description: "Medical leave for illness",
        max_days_per_request: "10",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "ANNUAL",
        description: "Annual vacation leave",
        max_days_per_request: "15",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "MATERNITY",
        description: "Maternity leave",
        max_days_per_request: "90",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "PATERNITY",
        description: "Paternity leave",
        max_days_per_request: "15",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "BEREAVEMENT",
        description: "Bereavement leave",
        max_days_per_request: "7",
        is_Active: true,
      },
    }),
    prisma.leave_types.create({
      data: {
        name: "LWP",
        description: "Leave without pay",
        max_days_per_request: "30",
        is_Active: true,
      },
    }),
  ]);

  // 3. Seed Leave Status
  console.log("✅ Seeding leave status...");
  const leaveStatuses = await Promise.all([
    prisma.leave_status.create({
      data: {
        name: "PENDING",
        description: "Leave request is pending approval",
        is_Active: true,
        id: 6,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "APPROVED_BY_MANAGER",
        description: "Leave request approved by manager",
        is_Active: true,
        id: 4,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "APPROVED_BY_HR",
        description: "Leave request approved by HR",
        is_Active: true,
        id: 3,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "APPROVED",
        description: "Leave request fully approved",
        is_Active: true,
        id: 1,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "REJECTED",
        description: "Leave request rejected",
        is_Active: true,
        id: 0,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "AUTO_APPROVED",
        description: "Leave request automatically approved",
        is_Active: true,
        id: 2,
      },
    }),
    prisma.leave_status.create({
      data: {
        name: "CANCELLED",
        description: "Leave request Canceled by user",
        is_Active: true,
        id: 7,
      },
    }),
  ]);

  // 4. Seed Departments
  console.log("🏢 Seeding departments...");
  const departments = await Promise.all([
    prisma.departments.create({
      data: {
        cus_id: "DEPT-001",
        name: "Information Technology",
        description: "IT Department handling all technical operations",
        is_Active: true,
      },
    }),
    prisma.departments.create({
      data: {
        cus_id: "DEPT-002",
        name: "Human Resources",
        description: "HR Department managing employee relations",
        is_Active: true,
      },
    }),
    prisma.departments.create({
      data: {
        cus_id: "DEPT-003",
        name: "Finance",
        description: "Finance Department handling financial operations",
        is_Active: true,
      },
    }),
    prisma.departments.create({
      data: {
        cus_id: "DEPT-004",
        name: "Marketing",
        description: "Marketing Department for promotional activities",
        is_Active: true,
      },
    }),
    prisma.departments.create({
      data: {
        cus_id: "DEPT-005",
        name: "Operations",
        description: "Operations Department for day-to-day activities",
        is_Active: true,
      },
    }),
  ]);

  // 5. Seed Users (Admin, HR, Managers, Employees)
  console.log("👥 Seeding users...");

  // Admin User
  const adminUser = await prisma.user.create({
    data: {
      cus_id: "USR-001",
      first_name: "System",
      last_name: "Administrator",
      email: "admin@company.com",
      password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq", // In real app, hash this properly
      joined_date: new Date("2020-01-01"),
      is_Active: true,
      role_id: roles.find((r) => r.name === "ADMIN")?.id || 1,
      department_name: "DEPT-002", // HR Department
    },
  });

  // HR Users
  const hrUsers = await Promise.all([
    prisma.user.create({
      data: {
        cus_id: "USR-002",
        first_name: "Sarah",
        last_name: "Johnson",
        email: "sarah.johnson@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2021-03-15"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "HR")?.id || 2,
        department_name: "DEPT-002",
      },
    }),
  ]);

  // Manager Users
  const managers = await Promise.all([
    prisma.user.create({
      data: {
        cus_id: "USR-003",
        first_name: "Michael",
        last_name: "Chen",
        email: "michael.chen@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2020-06-01"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "MANAGER")?.id || 3,
        department_name: "DEPT-001", // IT
      },
    }),
    prisma.user.create({
      data: {
        cus_id: "USR-004",
        first_name: "Lisa",
        last_name: "Rodriguez",
        email: "lisa.rodriguez@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2021-01-10"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "MANAGER")?.id || 3,
        department_name: "DEPT-003", // Finance
      },
    }),
    prisma.user.create({
      data: {
        cus_id: "USR-005",
        first_name: "David",
        last_name: "Wilson",
        email: "david.wilson@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2020-09-20"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "MANAGER")?.id || 3,
        department_name: "DEPT-004", // Marketing
      },
    }),
  ]);

  // Employee Users
  const employees = await Promise.all([
    // IT Employees
    prisma.user.create({
      data: {
        cus_id: "USR-006",
        first_name: "John",
        last_name: "Smith",
        email: "john.smith@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2022-02-15"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "EMPLOYEE")?.id || 4,
        department_name: "DEPT-001",
        manager_id: "USR-003", // Michael Chen
      },
    }),
    prisma.user.create({
      data: {
        cus_id: "USR-007",
        first_name: "Emily",
        last_name: "Davis",
        email: "emily.davis@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2022-04-10"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "EMPLOYEE")?.id || 4,
        department_name: "DEPT-001",
        manager_id: "USR-003",
      },
    }),
    // Finance Employees
    prisma.user.create({
      data: {
        cus_id: "USR-008",
        first_name: "Robert",
        last_name: "Brown",
        email: "robert.brown@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2021-11-05"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "EMPLOYEE")?.id || 4,
        department_name: "DEPT-003",
        manager_id: "USR-004", // Lisa Rodriguez
      },
    }),
    // Marketing Employees
    prisma.user.create({
      data: {
        cus_id: "USR-009",
        first_name: "Jessica",
        last_name: "Taylor",
        email: "jessica.taylor@company.com",
        password:
          "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
        joined_date: new Date("2023-01-20"),
        is_Active: true,
        role_id: roles.find((r) => r.name === "EMPLOYEE")?.id || 4,
        department_name: "DEPT-004",
        manager_id: "USR-005", // David Wilson
      },
    }),
  ]);

  // 6. Seed Leave Policies
  console.log("📋 Seeding leave policies...");
  const leavePolicies = await Promise.all([
    // General policies for all departments
    prisma.leave_policy.create({
      data: {
        leave_type_id: "CASUAL",
        max_days_per_year: 12,
        max_days_per_request: 5,
        carry_over_limit: 3,
        carry_over_expiry: 90,
        is_Active: true,
        effective_from: new Date("2024-01-01"),
        effective_to: new Date("2024-12-31"),
      },
    }),
    prisma.leave_policy.create({
      data: {
        leave_type_id: "SICK",
        max_days_per_year: 10,
        max_days_per_request: 10,
        carry_over_limit: 5,
        carry_over_expiry: 365,
        is_Active: true,
        effective_from: new Date("2024-01-01"),
        effective_to: new Date("2024-12-31"),
      },
    }),
    prisma.leave_policy.create({
      data: {
        leave_type_id: "ANNUAL",
        max_days_per_year: 21,
        max_days_per_request: 15,
        carry_over_limit: 5,
        carry_over_expiry: 120,
        is_Active: true,
        effective_from: new Date("2024-01-01"),
        effective_to: new Date("2024-12-31"),
      },
    }),
  ]);

  // 7. Seed Holidays
  console.log("🎉 Seeding holidays...");
  const holidays = await Promise.all([
    prisma.holiday.create({
      data: {
        name: "New Year Day",
        date: new Date("2024-01-01"),
        is_Recurring: true,
        is_Active: true,
      },
    }),
    prisma.holiday.create({
      data: {
        name: "Independence Day",
        date: new Date("2024-07-04"),
        is_Recurring: true,
        is_Active: true,
      },
    }),
    prisma.holiday.create({
      data: {
        name: "Christmas Day",
        date: new Date("2024-12-25"),
        is_Recurring: true,
        is_Active: true,
      },
    }),
    prisma.holiday.create({
      data: {
        name: "Thanksgiving",
        date: new Date("2024-11-28"),
        is_Recurring: true,
        is_Active: true,
      },
    }),
  ]);

  // 8. Seed Leave Balances for all users
  console.log("⚖️ Seeding leave balances...");
  const allUsers = [adminUser, ...hrUsers, ...managers, ...employees];
  const currentYear = new Date().getFullYear();

  for (const user of allUsers) {
    // Create leave balances for each leave type
    await Promise.all([
      prisma.leave_balance.create({
        data: {
          user_id: user.cus_id,
          leave_type_id: "CASUAL",
          yearly: 12,
          totalEntitlement: 12,
          year: currentYear,
          used: Math.floor(Math.random() * 5), // Random used days (0-4)
          pending: Math.floor(Math.random() * 3), // Random pending days (0-2)
          carried_over: Math.floor(Math.random() * 3), // Random carried over (0-2)
          balance: 12 - Math.floor(Math.random() * 5), // Remaining balance
        },
      }),
      prisma.leave_balance.create({
        data: {
          user_id: user.cus_id,
          leave_type_id: "SICK",
          yearly: 10,
          totalEntitlement: 10,
          year: currentYear,
          used: Math.floor(Math.random() * 3),
          pending: 0,
          carried_over: Math.floor(Math.random() * 2),
          balance: 10 - Math.floor(Math.random() * 3),
        },
      }),
      prisma.leave_balance.create({
        data: {
          user_id: user.cus_id,
          leave_type_id: "ANNUAL",
          yearly: 21,
          totalEntitlement: 21,
          year: currentYear,
          used: Math.floor(Math.random() * 10),
          pending: Math.floor(Math.random() * 5),
          carried_over: Math.floor(Math.random() * 5),
          balance: 21 - Math.floor(Math.random() * 10),
        },
      }),
    ]);
  }

  // 9. Seed Leave Requests
  console.log("📝 Seeding leave requests...");
  const sampleRequests = [
    {
      user_id: "USR-006", // John Smith
      leave_type_id: "CASUAL" as const,
      start_date: new Date("2024-03-15"),
      end_date: new Date("2024-03-17"),
      no_of_days: 3,
      reason: "Personal work",
      status_id: leaveStatuses.find((s) => s.name === "APPROVED")?.id || 4,
    },
    {
      user_id: "USR-007", // Emily Davis
      leave_type_id: "SICK" as const,
      start_date: new Date("2024-02-20"),
      end_date: new Date("2024-02-22"),
      no_of_days: 3,
      reason: "Flu symptoms",
      status_id: leaveStatuses.find((s) => s.name === "APPROVED")?.id || 4,
    },
    {
      user_id: "USR-008", // Robert Brown
      leave_type_id: "ANNUAL" as const,
      start_date: new Date("2024-06-10"),
      end_date: new Date("2024-06-20"),
      no_of_days: 11,
      reason: "Family vacation",
      status_id: leaveStatuses.find((s) => s.name === "PENDING")?.id || 1,
    },
  ];

  let requestCounter = 1;
  for (const request of sampleRequests) {
    const createdRequest = await prisma.leave_request.create({
      data: {
        cus_id: `REQ-${String(requestCounter).padStart(3, "0")}`,
        user_id: request.user_id,
        leave_type_id: request.leave_type_id,
        start_date: request.start_date,
        end_date: request.end_date,
        no_of_days: request.no_of_days,
        reason: request.reason,
        status_id: request.status_id,
      },
    });

    // Create initial history entry for each request
    await prisma.leave_request_history.create({
      data: {
        leave_request_id: createdRequest.cus_id,
        status_id: request.status_id,
        updated_by: adminUser.id, // Use admin user ID for initial entries
        comments: "Initial request submission",
      },
    });

    requestCounter++;
  }

  console.log("✅ Database seeding completed successfully!");
  console.log("\n📊 Summary:");
  console.log(`- Roles: ${roles.length}`);
  console.log(`- Leave Types: ${leaveTypes.length}`);
  console.log(`- Leave Statuses: ${leaveStatuses.length}`);
  console.log(`- Departments: ${departments.length}`);
  console.log(`- Users: ${allUsers.length}`);
  console.log(`- Leave Policies: ${leavePolicies.length}`);
  console.log(`- Holidays: ${holidays.length}`);
  console.log(`- Leave Balances: ${allUsers.length * 3}`);
  console.log(`- Leave Requests: ${sampleRequests.length}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
