import { TrendingUp } from "lucide-react";
import { REFERRAL_BOOST_PER_INVITE, type WaitlistStatus } from "@/lib/waitlist";

interface WaitlistRankProps {
  status: WaitlistStatus;
}

/** Shows a user's live waitlist position and how referrals can boost it. */
export function WaitlistRank({ status }: WaitlistRankProps) {
  const { position, referralCount, totalSignups } = status;

  return (
    <div className="glass-card mx-auto w-full max-w-md rounded-3xl p-6 text-center shadow-2xl shadow-black/60 sm:p-8">
      <p className="text-sm font-medium text-foreground/80">Your spot on the waitlist</p>
      <p className="font-heading mt-1 text-5xl font-extrabold text-primary">#{position}</p>
      <p className="mt-1 text-xs text-muted">out of {totalSignups} people</p>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
        <TrendingUp className="h-4 w-4 shrink-0" />
        {referralCount > 0 ? (
          <span>
            {referralCount} {referralCount === 1 ? "friend has" : "friends have"} joined with
            your link — that&apos;s {referralCount * REFERRAL_BOOST_PER_INVITE} spots up!
          </span>
        ) : (
          <span>Each friend who joins with your link moves you up {REFERRAL_BOOST_PER_INVITE} spots.</span>
        )}
      </div>
    </div>
  );
}
