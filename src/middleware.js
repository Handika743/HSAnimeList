import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Debugging (opsional)
  console.log("Token di middleware:", token);

  // Kalau tidak ada token, redirect ke signin
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  // Kalau ada token (user sudah login), lanjut ke halaman
  return NextResponse.next();
}

export const config = {
  matcher: "/users/:path*", // Middleware aktif hanya di /users/*
};
