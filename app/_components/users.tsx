"use client";
import React, { useState } from "react";
import InputBox from "./inputBox";
import { User } from "lucide-react";
import { departments, user } from "@/generated/prisma";
import createUser from "../actions/users/createUser";

const Users = ({ managers, departments }) => {
  const [create, setCreate] = useState<Boolean>(false);
  const [role, setRole] = useState<string>("");

  const handlecreateUser = async (formData: FormData) => {
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const mail = formData.get("mail") as string;
    const password = formData.get("password") as string;
    const department = formData.get("department") as string;
    const manager = formData.get("manager") as string;
    await createUser({
      role_id: Number(role),
      first_name: firstname,
      last_name: lastname,
      email: mail,
      password: password,
      department_name: department,
      manager_id: manager,
    });
  };

  return (
    <div className="w-full h-auto overflow-auto">
      <div className="flex justify-between w-full">
        <h2>User Management</h2>
        <button
          className="bg-blue-400 px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-500 "
          onClick={() => {
            setCreate(!create);
          }}
        >
          Create User
        </button>
      </div>
      {create && (
        <div className="flex flex-col gap-3 items-center w-auto h-auto p-8 rounded-xl backdrop-blur-2xl shadow-2xl bg-[white]/40 m-5 border-white border-2  ">
          <h3>Create User</h3>
          <form
            action={handlecreateUser}
            className="grid md:grid-cols-2  gap-5"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="role"
                className="text-white font-medium tracking-wide"
              >
                Role
              </label>
              <select
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                className="bg-white/40 backdrop-blur-2xl border-white border-2 rounded-xl px-4 py-2 text-black"
              >
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">HR</option>
                <option value="3">Manager</option>
                <option value="4">Employee</option>
              </select>
            </div>
            <InputBox
              label={"First Name"}
              placeholder="John"
              name={"firstname"}
              icon={User}
            />
            <InputBox
              label={"Last Name"}
              placeholder="Doe"
              name={"lastname"}
              icon={User}
            />
            <InputBox
              label={"Mail id"}
              placeholder="xyz@example.com"
              name={"mail"}
              icon={User}
            />
            <InputBox
              label={"Password"}
              placeholder="leave blank for 'password123'"
              name={"password"}
              icon={User}
            />
            <select
              name="department"
              className="bg-white/40 backdrop-blur-2xl border-white border-2 rounded-xl px-4 py-2 text-black"
            >
              <option value="">Select Department</option>
              {departments.map((department: departments) => (
                <option key={department.cus_id} value={department.cus_id}>
                  {department.name} - {department.cus_id}
                </option>
              ))}
            </select>
            <select
              name="manager"
              id=""
              className="bg-white/40 backdrop-blur-2xl border-white border-2 rounded-xl px-4 py-2 text-black"
            >
              <option value="">Select Manager</option>
              {managers.map((manager: user) => (
                <option key={manager.id} value={manager.cus_id}>
                  {manager.first_name} {manager.last_name} - {manager.cus_id}
                </option>
              ))}
            </select>
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                className="bg-blue-400 px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;
