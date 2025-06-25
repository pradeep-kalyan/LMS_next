"use server";
import { leave_types } from "@/generated/prisma";
import { get_current_user } from "../auth/get_current_user";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

interface RequestLeaveParams {
  startDate: string;
  endDate: string;
  selectedLeave: string;
  numDays: number;
  reason: string;
  path: string;
}

export const requestLeave = async ({
  startDate,
  endDate,
  selectedLeave,
  numDays,
  reason,
  path,
}: RequestLeaveParams) => {
  try {
    const user = await get_current_user();
    if (
      !user ||
      typeof user !== "object" ||
      !("id" in user) ||
      !("role" in user)
    ) {
      throw new Error("User not authenticated or missing role");
    }

    let status = 5; // Default status for pending requests

    // Validate leave type exists
    const leaveType = await prisma.leave_types.findUnique({
      where: { name: selectedLeave },
    });

    if (!leaveType) {
      throw new Error("Invalid leave type");
    }

    if (selectedLeave === "SICK" || selectedLeave === "BEREAVEMENT") {
      status = 2;
    }

    if ((user?.role as string) === "MANAGER") {
      status = 8;
    }

    const lr_count = await prisma.leave_request.count();
    const cus_id = `LR${String(lr_count + 1).padStart(6, "0")}`;

    if (
      numDays >= 5 &&
      selectedLeave !== "SICK" &&
      selectedLeave !== "BEREAVEMENT"
    ) {
      status = 7; // Set status to "APPROVED" for more than 5 days
    }

    const req = await prisma.leave_request.create({
      data: {
        start_date: new Date(startDate),
        end_date: new Date(endDate),
        no_of_days: numDays,
        reason: reason,
        cus_id: cus_id,
        status_id: status,
        leave_type_id: leaveType.name,
        user_id: user?.id as string,
      },
      include: {
        leave_type: true,
        status: true,
      },
    });

    // Update leave balance
    if (status === 2 || status === 1) {
      // Auto-approved: decrement balance and increment used
      await prisma.leave_balance.updateMany({
        where: {
          user_id: user.id as string,
          leave_type_id: selectedLeave as leave_types["name"],
        },
        data: {
          balance: {
            decrement: numDays,
          },
          used: {
            increment: numDays,
          },
        },
      });
    } else {
      // Not auto-approved: increment pending
      await prisma.leave_balance.updateMany({
        where: {
          user_id: user.id as string,
          leave_type_id: selectedLeave as leave_types["name"],
        },
        data: {
          pending: {
            increment: numDays,
          },
        },
      });
    }

    // In server actions, you don't have access to window. Use a static or passed path.
    revalidatePath(path);

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
