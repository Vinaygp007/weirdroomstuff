import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names, resolving conflicts in favor of the last one. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const REFERRAL_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/**
 * Generates a unique-ish referral code, e.g. "VINAY123" or "ABCD567".
 * Uses the first 4-5 letters of the user's name plus 3 random characters.
 */
export function generateReferralCode(name: string): string {
  const cleanName = name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();

  const namePart = (cleanName.slice(0, 5) || "BUDDY").padEnd(4, "X");

  let suffix = "";
  for (let i = 0; i < 3; i++) {
    suffix += REFERRAL_CHARS[Math.floor(Math.random() * REFERRAL_CHARS.length)];
  }

  return `${namePart}${suffix}`;
}

/** Builds a shareable referral URL for a given code. */
export function getReferralUrl(code: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://weirdroomstuff.vercel.app";
  return `${base}/?ref=${code}`;
}

/** Formats a Firestore Timestamp (or Date) into a readable date string. */
export function formatDate(value: Date | null): string {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}
