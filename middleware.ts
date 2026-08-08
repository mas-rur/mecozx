import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = "mecozx_admin_session";

// Middleware runs on the Edge runtime, which only has the Web Crypto API
// (no Node's "crypto" module), so the HMAC check uses crypto.subtle here.
async function getExpectedToken(secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode("mecozx-admin"));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminArea = pathname.startsWith("/secure/admin");
  const isLoginPage = pathname === "/secure/admin/login";

  if (!isAdminArea || isLoginPage) {
    return NextResponse.next();
  }

  const secret = process.env.ADMIN_SESSION_SECRET;
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

  if (!secret || !token || token !== (await getExpectedToken(secret))) {
    const loginUrl = new URL("/secure/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/secure/admin/:path*"],
};
