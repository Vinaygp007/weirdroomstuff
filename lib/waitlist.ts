import { collection, getCountFromServer, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { generateReferralCode } from "@/lib/utils";

/** Each successful referral moves a user up this many spots on the waitlist. */
export const REFERRAL_BOOST_PER_INVITE = 5;

export interface WaitlistStatus {
  position: number;
  referralCount: number;
  totalSignups: number;
}

/**
 * Computes a user's live waitlist position (boosted by their referral count)
 * and how many people have joined using their code so far.
 * Returns null if no signup matches the given referral code.
 */
export async function getWaitlistStatus(referralCode: string): Promise<WaitlistStatus | null> {
  const waitlistRef = collection(db, "waitlist");

  const userQuery = query(waitlistRef, where("referralCode", "==", referralCode), limit(1));
  const userSnapshot = await getDocs(userQuery);

  if (userSnapshot.empty) return null;

  const createdAt = userSnapshot.docs[0]!.data().createdAt;
  if (!createdAt) return null;

  const [aheadSnapshot, referralSnapshot, totalSnapshot] = await Promise.all([
    getCountFromServer(query(waitlistRef, where("createdAt", "<=", createdAt))),
    getCountFromServer(query(waitlistRef, where("referredBy", "==", referralCode))),
    getCountFromServer(waitlistRef),
  ]);

  const basePosition = aheadSnapshot.data().count;
  const referralCount = referralSnapshot.data().count;
  const totalSignups = totalSnapshot.data().count;

  const position = Math.max(1, basePosition - referralCount * REFERRAL_BOOST_PER_INVITE);

  return { position, referralCount, totalSignups };
}

/** Checks whether a referral code matches an existing waitlist signup. */
export async function referralCodeExists(referralCode: string): Promise<boolean> {
  const waitlistRef = collection(db, "waitlist");
  const snapshot = await getDocs(query(waitlistRef, where("referralCode", "==", referralCode), limit(1)));
  return !snapshot.empty;
}

const MAX_CODE_ATTEMPTS = 5;

/**
 * Generates a referral code for `name`, retrying on collision so two
 * signups (e.g. people sharing a name) never end up with the same code.
 */
export async function generateUniqueReferralCode(name: string): Promise<string> {
  for (let attempt = 0; attempt < MAX_CODE_ATTEMPTS; attempt++) {
    const code = generateReferralCode(name);
    if (!(await referralCodeExists(code))) return code;
  }

  // Extremely unlikely fallback: pad with extra random characters for more entropy.
  return `${generateReferralCode(name)}${Math.random().toString(36).slice(2, 4).toUpperCase()}`;
}
