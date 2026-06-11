import { Trophy } from "lucide-react";
import type { ReferralLeaderboardEntry } from "@/types";

interface ReferralLeaderboardProps {
  entries: ReferralLeaderboardEntry[];
}

const MEDAL_COLORS = ["text-yellow-400", "text-gray-300", "text-amber-500"];

/** Ranked list of users by number of successful referrals. */
export function ReferralLeaderboard({ entries }: ReferralLeaderboardProps) {
  if (entries.length === 0) {
    return (
      <p className="rounded-2xl border border-border bg-surface/60 p-6 text-center text-sm text-muted">
        No referrals yet.
      </p>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-2">
      <ul className="divide-y divide-border/60">
        {entries.map((entry, index) => (
          <li
            key={entry.referralCode}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-sm font-bold ${
                  MEDAL_COLORS[index] ?? "text-muted"
                }`}
              >
                {index < 3 ? <Trophy className="h-4 w-4" /> : index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{entry.name}</p>
                <p className="text-xs text-muted">{entry.referralCode}</p>
              </div>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-heading text-sm font-bold text-primary">
              {entry.referralCount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
