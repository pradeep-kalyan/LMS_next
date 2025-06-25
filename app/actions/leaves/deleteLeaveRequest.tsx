"use server";

import prisma from "@/lib/db";

export async function cancelLeaveRequest(LRid: string) {
  try {
    await prisma.leave_request.update({
      where: { cus_id: LRid },
      data: { status_id: 7 },
    });
  } catch (error) {
    console.error("Error cancelling leave:", error);
    throw error;
  }
}
