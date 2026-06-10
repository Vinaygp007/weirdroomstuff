import { formatDate } from "@/lib/utils";
import type { RecentSignup } from "@/types";

interface SignupsTableProps {
  signups: RecentSignup[];
}

/** Table of the most recent waitlist signups. */
export function SignupsTable({ signups }: SignupsTableProps) {
  if (signups.length === 0) {
    return (
      <p className="rounded-2xl border border-border bg-surface/60 p-6 text-center text-sm text-muted">
        No signups yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface/60">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">WhatsApp</th>
            <th className="px-4 py-3 font-medium">Referral Code</th>
            <th className="px-4 py-3 font-medium">Referred By</th>
            <th className="px-4 py-3 font-medium">Joined</th>
          </tr>
        </thead>
        <tbody>
          {signups.map((signup) => (
            <tr key={signup.id} className="border-b border-border/60 last:border-0">
              <td className="px-4 py-3 font-medium text-foreground">{signup.name}</td>
              <td className="px-4 py-3 text-muted">{signup.email}</td>
              <td className="px-4 py-3 text-muted">{signup.phone}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {signup.referralCode}
                </span>
              </td>
              <td className="px-4 py-3 text-muted">{signup.referredBy || "—"}</td>
              <td className="px-4 py-3 whitespace-nowrap text-muted">
                {formatDate(signup.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
