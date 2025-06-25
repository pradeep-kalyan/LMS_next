"use server";

import { get_current_user } from "../auth/get_current_user";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface RequestLeaveParams {
  startDate: string;
  endDate: string;
  selectedLeave: string;
  numDays: number;
  reason: string;
}

export const requestLeave = async ({
  startDate,
  endDate,
  selectedLeave,
  numDays,
  reason,
}: RequestLeaveParams) => {
  try {
    const user = await get_current_user();

    if (!user || typeof user !== "object" || !("id" in user)) {
      throw new Error("User not authenticated");
    }

    // Validate leave type exists
    const leaveType = await prisma.leave_types.findUnique({
      where: { id: selectedLeave },
    });

    if (!leaveType) {
      throw new Error("Invalid leave type");
    }

    const lr_count = await prisma.leave_request.count();
    const cus_id = `LR${String(lr_count + 1).padStart(6, "0")}`;

    const req = await prisma.leave_request.create({
      data: {
        start_date: new Date(startDate),
        end_date: new Date(endDate),
        no_of_days: numDays,
        reason: reason,
        cus_id: cus_id,
        status_id: 6, // Assuming 1 is "Pending" status
        leave_type_id: leaveType.name,
        user_id: user?.id as string,
      },
      include: {
        leave_type: true,
        status: true,
      },
    });
    revalidatePath("/employee/dashboard/request");
    return {
      success: true,
      message: "Leave request submitted successfully",
      data: req,
    };
  } catch (error) {
    console.error("Error submitting leave request:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};
