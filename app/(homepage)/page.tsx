"use server";
import React from "react";
import { get_current_user } from "../actions/auth/get_current_user";
import { redirect } from "next/navigation";
import prisma from "../../lib/db";
import Card from "../_components/Card";

const Page = async () => {
  const user = await get_current_user();

  if (!user || typeof user !== "object" || !("email" in user)) {
    redirect("/");
    return null;
  }

  const db_user = await prisma.user.findUnique({
    where: { email: (user as { email: string }).email },
  });

  return (
    <div className="flex justify-between flex-col gap-8">
      <h2>Basic Information</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-around">
        <Card title={"ID"} value={db_user?.cus_id} />
        <Card title={"Mail"} value={db_user?.email} />
      </div>
      <h2>Company Information</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-around">
        <Card
          title={"Role"}
          value={
            db_user?.role_id === 1
              ? "Admin"
              : db_user?.role_id === 2
              ? "Manager"
              : db_user?.role_id === 3
              ? "HR"
              : db_user?.role_id === 4
              ? "Admin"
              : "Unknown"
          }
        />
        <Card title={"Manager"} value={db_user?.manager_id || "Not Assigned"} />
      </div>
      <h2>Leave information</h2>
    </div>
  );
};

export default Page;
