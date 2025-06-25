"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookie = await cookies();
  cookie.set("token", "", {
    maxAge: 0,
    path: "/",
  });

  redirect("/");

  return { success: true, message: "Logged out" };
}
