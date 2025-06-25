"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      role: true,
      department: true,
    },
  });

  if (!user || !user.is_Active)
    return { success: false, message: "Invalid mail or user inactive" };

  const password_match: boolean = await bcrypt.compare(password, user.password);

  if (!password_match) return { success: false, message: "invalid password" };

  const JWT_SECRET = process.env.JWT_SECRET as string;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || ("1h" as string);

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  const payload = {
    id: user.cus_id,
    email: user.email,
    role: user.role.name,
    department: user.department.name,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  } as SignOptions);

  const cookie = await cookies();
  // Set the cookie with the token, adjust options as needed
  cookie.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "lax",
  });

  switch (payload.role) {
    case "ADMIN":
      redirect("/admin/homepage");
    case "EMPLOYEE":
      redirect("/employee/homepage");
    case "HR":
      redirect("/hr/homepage/");
    case "MANAGER":
      redirect("/manager/homepage");
    default:
      redirect("/");
  }
};
