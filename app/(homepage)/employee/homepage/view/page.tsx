import React from "react";
import prisma from "@/lib/db";
import { get_current_user } from "@/app/actions/auth/get_current_user";
import { Leave_balance } from "@prisma/client";

const Page = async () => {
  const user = (await get_current_user()) as { id: string };

  const leave_balances = await prisma.leave_balance.findMany({
    where: {
      user_id: user.id,
    },
  });

  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
        <thead className="bg-gray-200 text-black">
          <tr>
            <th className="border px-4 py-2">Leave Type ID</th>
            <th className="border px-4 py-2">Total Entitlement</th>
            <th className="border px-4 py-2">Used</th>
            <th className="border px-4 py-2">Pending</th>
            <th className="border px-4 py-2">Carried Over</th>
            <th className="border px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {leave_balances.map((LB: Leave_balance) => (
            <tr key={LB.id}>
              <td className="border px-4 py-2">{LB.leave_type_id}</td>
              <td className="border px-4 py-2">{LB.totalEntitlement}</td>
              <td className="border px-4 py-2">{LB.used}</td>
              <td className="border px-4 py-2">{LB.pending}</td>
              <td className="border px-4 py-2">{LB.carried_over}</td>
              <td className="border px-4 py-2">{LB.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
