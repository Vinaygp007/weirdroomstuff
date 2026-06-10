/** Shape of a single waitlist entry stored in the `waitlist` Firestore collection. */
export interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  referralCode: string;
  referredBy: string | null;
  createdAt: unknown; // Firestore server timestamp
}

/** Form values collected from the waitlist form before submission. */
export interface WaitlistFormValues {
  name: string;
  email: string;
  phone: string;
}

/** Aggregated stats displayed on the admin dashboard. */
export interface WaitlistStats {
  totalSignups: number;
  totalReferrals: number;
}

/** A single row in the referral leaderboard. */
export interface ReferralLeaderboardEntry {
  referralCode: string;
  name: string;
  referralCount: number;
}

/** A recent signup row shown on the admin dashboard. */
export interface RecentSignup {
  id: string;
  name: string;
  email: string;
  phone: string;
  referralCode: string;
  referredBy: string | null;
  createdAt: Date | null;
}
