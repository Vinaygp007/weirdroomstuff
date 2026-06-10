import type { Metadata } from "next";
import { LogOut } from "lucide-react";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { logoutAction } from "./login/actions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Waitlist Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted">Live signups and referral activity.</p>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </form>
      </div>

      <AdminDashboard />
    </main>
  );
}
