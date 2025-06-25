"use client";
import React, { useState } from "react";
import InputBox from "./inputBox";
import { User } from "lucide-react";

const Users = () => {
  const [create, setCreate] = useState<Boolean>(false);
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
        <div className="flex flex-col gap-3 justify-center items-center w-auto h-auto p-8 rounded-xl backdrop-blur-2xl shadow-2xl bg-[white]/40 m-5 border-white border-2  ">
          <h3>Create User</h3>
          <form action="" className="grid md:grid-cols-2 grid- gap-3 justify-between items-center">
            <InputBox
              label={"Custom id"}
              placeholder="EMP001 or MNG001 or HR001"
              name={"Custom ID"}
              icon={User}
            />
            <InputBox
              label={"First Name"}
              placeholder="John"
              name={"First Name"}
              icon={User}
            />
            <InputBox
              label={"Last Name"}
              placeholder="Doe"
              name={"Last Name"}
              icon={User}
            />
            <InputBox
              label={"Mail id"}
              placeholder="xyz@example.com"
              name={"Mail id"}
              icon={User}
            />
            <InputBox
              label={"Custom id"}
              placeholder="EMP001 or MNG001 or HR001"
              name={"Custom ID"}
              icon={User}
            />
            <InputBox
              label={"Custom id"}
              placeholder="EMP001 or MNG001 or HR001"
              name={"Custom ID"}
              icon={User}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;
