import Users from "@/app/_components/users";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-start items-center flex-col w-full h-fit overflow-auto">
      <Users />
    </div>
  );
};

export default page;
