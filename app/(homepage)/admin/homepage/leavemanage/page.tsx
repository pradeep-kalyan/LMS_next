import React from "react";
import prisma from "@/lib/db";
import LM from "@/app/_components/LeaveManage"; // Import the client component we created above

const LeaveTypesPage = async () => {
  const leaves = await prisma.leave_types.findMany();

  return <LM initialLeaves={leaves} />;
};

export default LeaveTypesPage;
