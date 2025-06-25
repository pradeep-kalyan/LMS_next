"use server";
import React from "react";
import prisma from "@/lib/db"; // adjust this if path differs

const Page = async () => {
  const leaves = await prisma.leave_types.findMany();

  return (
    <div className="flex flex-col items-start justify-around p-4">
      <h2 className="text-xl font-bold mb-4">All Roles</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-4 py-2">Leave Type</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Max Leaves per Request</th>
            <th className="border px-4 py-2">Is Active</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td className="border px-4 py-2">{leave.name}</td>
              <td className="border px-4 py-2">{leave.description}</td>
              <td className="border px-4 py-2">{leave.max_days_per_request}</td>
              <td className="border px-4 py-2">
                {leave.is_Active ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
