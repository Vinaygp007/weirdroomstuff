import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-surface/60 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <h1 className="text-center text-2xl font-bold text-foreground">Admin Login</h1>
        <p className="mt-2 text-center text-sm text-muted">
          Enter the admin password to view the waitlist dashboard.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
