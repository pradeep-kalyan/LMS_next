import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Sidebar from "@/app/_components/SideBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let role = "";

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      role = (decoded as any).role;
    } catch {
      role = "";
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <main className="w-4/5 min-h-screen overflow-y-auto p-10 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-inner text-white">
        {children}
      </main>
    </div>
  );
}
