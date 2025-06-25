// actions/leaveActions.ts
"use server";

import prisma from "@/lib/db";

export const updateLeaveStatus = async (cus_id: string, status_id: number) => {
  await prisma.leave_request.update({
    where: { cus_id },
    data: { status_id },
  });
};
