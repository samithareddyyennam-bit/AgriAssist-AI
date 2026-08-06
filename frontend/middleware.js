import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    const loginUrl = new URL("/login", req.url);

    loginUrl.searchParams.set(
      "callbackUrl",
      req.nextUrl.pathname
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/crop/:path*",
    "/weather/:path*",
    "/disease/:path*",
    "/ai/:path*",
    "/recommend/:path*",
    "/profile/:path*",
  ],
};