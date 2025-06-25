import prisma from "@/lib/db";
import { updateLeaveStatus } from "@/app/actions/leaves/handleLeave";
import ViewAll from "@/app/_components/ViewAll";

const Page = async () => {
  const leaves = await prisma.leave_request.findMany({
    include: { status: true },
  });
  return <ViewAll leaves={leaves} />;
};

export default Page;
