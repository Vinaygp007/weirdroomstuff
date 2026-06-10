"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "admin_session";

/** Validates the submitted password and creates an admin session cookie. */
export async function loginAction(_prevState: { error: string } | null, formData: FormData) {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;

  if (!adminPassword) {
    return { error: "Admin password is not configured on the server." };
  }

  if (typeof password !== "string" || password !== adminPassword) {
    return { error: "Incorrect password. Please try again." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });

  redirect("/admin");
}

/** Clears the admin session cookie and signs the user out. */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/admin/login");
}
