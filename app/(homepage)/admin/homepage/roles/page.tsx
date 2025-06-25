"use server";
import React from "react";
import prisma from "@/lib/db"; // adjust this if path differs

const Page = async () => {
  const roles = await prisma.roles.findMany();

  return (
    <div className="flex flex-col items-start justify-around p-4">
      <h2 className="text-xl font-bold mb-4">All Roles</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-4 py-2">Role ID</th>
            <th className="border px-4 py-2">Role Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Is Active</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border px-4 py-2">{role.id}</td>
              <td className="border px-4 py-2">{role.name}</td>
              <td className="border px-4 py-2">{role.description}</td>
              <td className="border px-4 py-2">
                {role.is_Active ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
