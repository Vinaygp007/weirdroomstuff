"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { Users, Share2, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { StatCard } from "@/components/admin/StatCard";
import { SignupsTable } from "@/components/admin/SignupsTable";
import { ReferralLeaderboard } from "@/components/admin/ReferralLeaderboard";
import type { RecentSignup, ReferralLeaderboardEntry } from "@/types";

interface RawWaitlistDoc {
  id: string;
  name: string;
  email: string;
  phone: string;
  referralCode: string;
  referredBy: string | null;
  createdAt: Date | null;
}

const RECENT_SIGNUPS_LIMIT = 20;

/** Live admin dashboard: subscribes to the `waitlist` collection and renders stats. */
export function AdminDashboard() {
  const [docs, setDocs] = useState<RawWaitlistDoc[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "waitlist"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const entries: RawWaitlistDoc[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : null;

          return {
            id: doc.id,
            name: data.name ?? "",
            email: data.email ?? "",
            phone: data.phone ?? "",
            referralCode: data.referralCode ?? "",
            referredBy: data.referredBy ?? null,
            createdAt,
          };
        });

        setDocs(entries);
      },
      (err) => {
        console.error("Failed to load waitlist data:", err);
        setError("Failed to load live data. Check your Firebase configuration.");
      }
    );

    return () => unsubscribe();
  }, []);

  const { totalSignups, totalReferrals, recentSignups, leaderboard } = useMemo(() => {
    const entries = docs ?? [];

    const totalSignups = entries.length;
    const totalReferrals = entries.filter((entry) => !!entry.referredBy).length;

    const recentSignups: RecentSignup[] = entries
      .slice(0, RECENT_SIGNUPS_LIMIT)
      .map((entry) => ({
        id: entry.id,
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        referralCode: entry.referralCode,
        referredBy: entry.referredBy,
        createdAt: entry.createdAt,
      }));

    // Map referral code -> name so we can label leaderboard rows.
    const nameByCode = new Map<string, string>();
    const referralCounts = new Map<string, number>();

    for (const entry of entries) {
      if (entry.referralCode) {
        nameByCode.set(entry.referralCode, entry.name);
      }
    }

    for (const entry of entries) {
      if (entry.referredBy) {
        referralCounts.set(entry.referredBy, (referralCounts.get(entry.referredBy) ?? 0) + 1);
      }
    }

    const leaderboard: ReferralLeaderboardEntry[] = Array.from(referralCounts.entries())
      .map(([referralCode, referralCount]) => ({
        referralCode,
        referralCount,
        name: nameByCode.get(referralCode) ?? "Unknown",
      }))
      .sort((a, b) => b.referralCount - a.referralCount)
      .slice(0, 10);

    return { totalSignups, totalReferrals, recentSignups, leaderboard };
  }, [docs]);

  if (error) {
    return <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-sm text-red-600">{error}</p>;
  }

  if (docs === null) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface/60 p-12 text-muted">
        <Loader2 className="h-5 w-5 animate-spin" />
        Loading live data...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatCard icon={Users} label="Total Signups" value={totalSignups} />
        <StatCard icon={Share2} label="Total Referrals" value={totalReferrals} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Latest Signups</h2>
        <SignupsTable signups={recentSignups} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Referral Leaderboard</h2>
        <ReferralLeaderboard entries={leaderboard} />
      </div>
    </div>
  );
}
