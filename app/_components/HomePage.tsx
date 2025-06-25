"use server";
import React from "react";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Card from "@/app/_components/Card";
import { leave_balance } from "@/generated/prisma";

const HomePage = async ({ db_user, leave_balances }) => {
  return (
    <div className="flex justify-between flex-col gap-8">
      <h2>Basic Information</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-around">
        <Card title={"ID"} value={db_user?.cus_id as string} />
        <Card title={"Mail"} value={db_user?.email as string} />
      </div>
      <h2>Company Information</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-around">
        <Card
          title={"Role"}
          value={
            db_user?.role_id === 1
              ? "Admin"
              : db_user?.role_id === 2
              ? "Hr"
              : db_user?.role_id === 3
              ? "Manager"
              : db_user?.role_id === 4
              ? "Employee"
              : "Unknown"
          }
        />
        <Card title={"Manager"} value={db_user?.manager_id || "Not Assigned"} />
      </div>
      <div>
        <h2>Leave Information</h2>
        <Card
          title={"Total Leaves"}
          value={leave_balances.map((LB: leave_balance) => LB.yearly)}
        />
      </div>
    </div>
  );
};

export default HomePage;
