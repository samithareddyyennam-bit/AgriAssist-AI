import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/crop",
    "/crop/:path*",
    "/weather",
    "/weather/:path*",
    "/disease",
    "/disease/:path*",
    "/ai",
    "/ai/:path*",
    "/recommend",
    "/recommend/:path*",
    "/profile",
    "/profile/:path*",
  ],
};