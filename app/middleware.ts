import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protected_routes = ["/homepage"];

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const isProtected = protected_routes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
  //       id: string;
  //       role: string;
  //     };
  //   } catch (err) {
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }
};

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/homepage/:path*",
    "/admin/:path*",
    "/hr/:path*",
    "/manager/:path*",
  ],
};
