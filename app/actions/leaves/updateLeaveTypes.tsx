// actions.js (create this file in the same directory as your page)
"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateLeaveType(leaveId, data) {
  try {
    // Validate the data
    const { name, description, max_days_per_request, is_Active } = data;

    if (!description || !max_days_per_request) {
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    // Update the leave type in the database
    const updatedLeave = await prisma.leave_types.update({
      where: {
        id: leaveId, // Assuming cus_id is the unique identifier for leave types
      },
      data: {
        name: name, // Retain the name as it is not being updated
        description,
        max_days_per_request: String(max_days_per_request),
        is_Active: Boolean(is_Active),
      },
    });

    // Revalidate the page to reflect changes
    revalidatePath("/your-page-path"); // Update this with your actual page path

    return {
      success: true,
      data: updatedLeave,
    };
  } catch (error) {
    console.error("Error updating leave type:", error);
    return {
      success: false,
      error: "Failed to update leave type",
    };
  }
}
