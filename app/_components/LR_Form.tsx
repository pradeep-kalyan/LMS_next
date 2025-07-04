import React from "react";
import prisma from "@/lib/db";
import Request from "@/app/_components/Request";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import { updateLeaveStatus } from "@/app/actions/leaves/handleLeave";
import { revalidatePath } from "next/cache";

const LR_Form = async () => {
  const leave_types = await prisma.leave_types.findMany();
  const user = await get_current_user();

  const leave_requests = await prisma.leave_request.findMany({
    orderBy: { applied_date: "desc" },
    include: { status: true },
    where: { user_id: user?.id as string },
  });

  const leave_balance = await prisma.leave_balance.findMany({
    where: { user_id: user?.id as string },
  });

  const statusColors = {
    APPROVED_BY_MANAGER: "bg-green-100 text-green-800",
    APPROVED: "bg-green-100 text-green-800",
    APPROVED_BY_HR: "bg-green-100 text-green-800",
    APPROVED_BY_ADMIN: "bg-green-100 text-green-800",
    AUTO_APPROVED: "bg-green-100 text-green-800",
    REJECTED: "bg-red-100 text-red-800",
    CANCELLED: "bg-red-100 text-red-800",
    PENDING: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-start items-start flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Leave Request
          </h2>
          <Request leave_type={leave_types} leave_balance={leave_balance} />

          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              View Leave Requests
            </h2>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Request ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Leave Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      End Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Days
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Reason
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leave_requests.map((leave) => (
                    <tr key={leave.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {leave.cus_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {leave.leave_type_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(leave.start_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(leave.end_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {leave.no_of_days}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {leave.reason}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColors[leave.status?.name] ||
                            "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {leave.status?.name || "PENDING"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <form
                          action={async () => {
                            "use server";

                            await updateLeaveStatus(leave.cus_id, 6);
                            revalidatePath("/employee/homepage/request");
                          }}
                        >
    <button
      type="submit"
      className="text-red-500 text-sm font-semibold text-center hover:scale-105 cursor-pointer"
      disabled={!(leave.status_id === 5 || leave.status_id === 7 || leave.status_id === 8)}
    >
      {leave.status_id === 5 || leave.status_id === 7 || leave.status_id === 8
        ? "Cancel Request"
        : "Can't Cancel"}
    </button>
  </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LR_Form;
