import prisma from "@/lib/db";
import { updateLeaveStatus } from "@/app/actions/leaves/handleLeave";
import ViewAll from "@/app/_components/ViewAll";

const Page = async () => {
  const leaves = await prisma.leave_request.findMany({
    include: { status: true },
  });
  return (
    <div>
      <h2>Leave Request History</h2>
      <p className="text-gray-500">
        View all leave requests made by employees.
      </p>
      <div className="mt-6">
        <ViewAll leaves={leaves} role={"ADMIN"} />
        {/* Add pagination and filtering options here */}
      </div>
    </div>
  );
};

export default Page;
