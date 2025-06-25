import prisma from "@/lib/db";
import { updateLeaveStatus } from "@/app/actions/leaves/handleLeave";

const ViewAll = async ({ leaves, role }) => {
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

  // Filter leaves to only show pending ones
  const pendingLeaves = leaves.filter((leave) => {
    if (role === "HR") {
      return (
        leave.status?.name === "PENDING" ||
        leave.status?.name === "PENDING_BY_MANAGER" ||
        leave.status?.name === "APPROVED_BY_MANAGER" ||
        !leave.status?.name
      );
    }
    return (
      leave.status?.name === "PENDING" ||
      leave.status?.name === "PENDING_BY_MANAGER" ||
      !leave.status?.name
    );
  });

  // If no pending leaves, show empty state or return nothing
  if (pendingLeaves.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
        <div className="text-center py-8 text-gray-500">
          No pending leave requests found.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Request ID</th>
              <th className="px-4 py-2 border">Leave Type</th>
              <th className="px-4 py-2 border">Applied Date</th>
              <th className="px-4 py-2 border">From</th>
              <th className="px-4 py-2 border">To</th>
              <th className="px-4 py-2 border">Days</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Approve</th>
              <th className="px-4 py-2 border">Reject</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {pendingLeaves.map((leave) => (
              <tr
                key={leave.cus_id}
                className="hover:bg-gray-200 text-black bg-gray-100"
              >
                <td className="px-4 py-2 border">{leave.user_id}</td>
                <td className="px-4 py-2 border">{leave.cus_id}</td>
                <td className="px-4 py-2 border">{leave.leave_type_id}</td>
                <td className="px-4 py-2 border">
                  {leave.applied_date?.toDateString() || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {leave.start_date?.toDateString() || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {leave.end_date?.toDateString() || "N/A"}
                </td>
                <td className="px-4 py-2 border">{leave.no_of_days}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColors[leave.status?.name] || statusColors.PENDING
                    }`}
                  >
                    {leave.status?.name || "PENDING"}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  <form
                    action={async () => {
                      "use server";
                      let status = 1;
                      if (role === "MANAGER" && leave.no_of_days < 5) {
                        status = 1;
                      } else if (role === "MANAGER" && leave.no_of_days >= 5) {
                        status = 3;
                      } else if (role === "HR" || role === "ADMIN") {
                        status = 1;
                      }
                      await updateLeaveStatus(leave.cus_id, status);
                    }}
                  >
                    <button
                      type="submit"
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Approve
                    </button>
                  </form>
                </td>
                <td className="px-4 py-2 border">
                  <form
                    action={async () => {
                      "use server";
                      await updateLeaveStatus(leave.cus_id, 0);
                    }}
                  >
                    <button
                      type="submit"
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAll;
