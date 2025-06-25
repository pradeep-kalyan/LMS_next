import HomePage from "@/app/_components/HomePage";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Card from "@/app/_components/Card";
import { leave_balance } from "@/generated/prisma";

const page = async () => {
  const user = await get_current_user();

  if (!user || typeof user !== "object" || !("email" in user)) {
    redirect("/");
    return null;
  }

  const leave_balances = await prisma.leave_balance.findMany({
    where: {
      user_id: user?.id as string,
    },
  });

  const db_user = await prisma.user.findUnique({
    where: { email: (user as { email: string }).email },
  });
  return (
    <>
      <HomePage db_user={db_user} leave_balances={leave_balances} />
      <div className="flex justify-between flex-col gap-8">
        <h2 className="p-2 mt-8">Leave Information</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-around gap-8">
          <Card
            title={"Total Leaves"}
            value={leave_balances
              .map((LB: leave_balance) => LB.totalEntitlement)
              .reduce((a, b) => a + b, 0)}
          />
          <Card
            title={"Total Balance"}
            value={leave_balances
              .map((LB: leave_balance) => LB.balance)
              .reduce((a, b) => a + b, 0)}
          />
          <Card
            title={"Leaves Taken"}
            value={leave_balances
              .map((LB: leave_balance) => LB.used)
              .reduce((a, b) => a + b, 0)}
          />
          <Card
            title={"Leave pending"}
            value={leave_balances
              .map((LB: leave_balance) => LB.pending)
              .reduce((a, b) => a + b, 0)}
          />
        </div>
      </div>
    </>
  );
};

export default page;
