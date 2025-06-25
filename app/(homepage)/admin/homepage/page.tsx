"use server";
import React from "react";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Card from "@/app/_components/Card";
import HomePage from "@/app/_components/HomePage";

const Page = async () => {
  const user = await get_current_user();

  if (!user || typeof user !== "object" || !("email" in user)) {
    redirect("/");
    return null;
  }

  const db_user = await prisma.user.findUnique({
    where: { email: (user as { email: string }).email },
  });

  const users = await prisma.user.count();

  const hr_users = await prisma.user.count({
    where: { role_id: 2 },
  });

  const man_users = await prisma.user.count({
    where: { role_id: 3 },
  });

  const emp_users = await prisma.user.count({
    where: { role_id: 4 },
  });

  return (
    <>
      <HomePage db_user={db_user} />
      <div className="mt-10 space-y-10">
        <h2>Users Information</h2>
        <div className="grid md:grid-cols-4 justify-between">
          <Card
            title={"Total Users"}
            value={users}
            w="w-[200px]"
            h="h-[150px]"
          />
          <Card
            title={"Total HRs"}
            value={hr_users}
            w="w-[200px]"
            h="h-[150px]"
          />
          <Card
            title={"total Managers"}
            value={man_users}
            w="w-[200px]"
            h="h-[150px]"
          />
          <Card
            title={"Total Employees"}
            value={emp_users}
            w="w-[200px]"
            h="h-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
