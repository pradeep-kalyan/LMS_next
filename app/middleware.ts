import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protected_routes = ["/homepage"];

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const isProtected = protected_routes.some((route) =>
    pathname.startsWith(route)
  );

  // If route is not protected, allow access
  if (!isProtected) return NextResponse.next();

  // If no token exists, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
    };

    // Token is valid, allow access
    return NextResponse.next();
  } catch (err) {
    // Token is invalid or expired, redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }
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
