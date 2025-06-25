"use server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

const createUser = async (userData) => {
  const role = userData.role_id;

  const userCount = await prisma.user.count({
    where: { role_id: role },
  });

  let suffix = "";

  if (role === 1) {
    suffix = "Admin";
  } else if (role === 2) {
    suffix = "HR";
  } else if (role === 3) {
    suffix = "Mgr";
  } else {
    suffix = "Emp";
  }

  const newCusId = `${suffix}${String(userCount + 1).padStart(4, "0")}`;

  const hashPassword = bcrypt.hashSync(userData.password || "password123", 10);

  const res = await prisma.user.create({
    data: {
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
      role_id: userData?.role_id,
      department_name: userData?.department_name || null, // Ensure department_name is included
      manager_id: userData?.manager_id || null, // Ensure manager_id is included
      password: hashPassword, // Ensure password is included
      cus_id: newCusId,
      is_Active: true, // Default to active
    },
  });
  await Promise.all([
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "CASUAL",
        yearly: 12,
        totalEntitlement: 12,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 12, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "BEREAVEMENT",
        yearly: 8,
        totalEntitlement: 8,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 8, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "LWP",
        yearly: 30,
        totalEntitlement: 30,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 30, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "PAID",
        yearly: 10,
        totalEntitlement: 10,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 10, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "PERSONAL",
        yearly: 10,
        totalEntitlement: 10,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 10, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "SICK",
        yearly: 10,
        totalEntitlement: 10,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 10, // Remaining balance
      },
    }),
    prisma.leave_balance.create({
      data: {
        user_id: newCusId,
        leave_type_id: "PATERNITY",
        yearly: 15,
        totalEntitlement: 15,
        year: new Date().getFullYear(),
        used: 0, // Random used days (0-4)
        pending: 0, // Random pending days (0-2)
        carried_over: 0, // Random carried over (0-2)
        balance: 15, // Remaining balance
      },
    }),
  ]);
  revalidatePath("/admin/homepage/users");
  return res;
};

export default createUser;
