"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const get_current_user = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as {
      id: string;
      email: string;
      role: string;
      department: string;
    };
  } catch (err) {
    return err;
  }
};
