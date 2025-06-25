import HomePage from "@/app/_components/HomePage";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import { redirect } from "next/navigation";
import React from "react";
import prisma from "@/lib/db";

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
  return <HomePage db_user={db_user} leave_balances={leave_balances} />;
};

export default page;
