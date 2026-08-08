"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, checkAdminPassword, getAdminSessionToken } from "@/lib/admin-auth";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!password || !checkAdminPassword(password)) {
    redirect("/secure/admin/login?error=1");
  }

  cookies().set(ADMIN_COOKIE_NAME, getAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  redirect("/secure/admin");
}

export async function logoutAction() {
  cookies().delete(ADMIN_COOKIE_NAME);
  redirect("/secure/admin/login");
}
