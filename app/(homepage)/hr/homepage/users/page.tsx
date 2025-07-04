import Users from "@/app/_components/users";
import React from "react";
import prisma from "@/lib/db";

const page = async () => {
  const managers = await prisma.user.findMany({ where: { role_id: 3 } });
  const users = await prisma.user.findMany();
  const departments = await prisma.departments.findMany();

  return (
    <div className="flex flex-col gap-8 w-full px-6 py-8">
      {/* Top Component */}
      <Users managers={managers} departments={departments} />

      {/* User Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3 text-left">User ID</th>
              <th className="px-4 py-3 text-left">First Name</th>
              <th className="px-4 py-3 text-left">Last Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Manager</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2">{user.cus_id}</td>
                <td className="px-4 py-2">{user.first_name}</td>
                <td className="px-4 py-2">{user.last_name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role_id}</td>
                <td className="px-4 py-2">{user.department_name || "-"}</td>
                <td className="px-4 py-2">{user.manager_id || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
