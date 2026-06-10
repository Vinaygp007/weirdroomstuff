import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ReferralCard } from "@/components/waitlist/ReferralCard";
import { getReferralUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "You're On The List",
  description: "You're officially on the waitlist for the viral inflatable buddy.",
};

interface ThankYouPageProps {
  searchParams: Promise<{ code?: string; name?: string }>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { code, name } = await searchParams;
  const referralUrl = getReferralUrl(code || "");

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <AnimatedBackground />

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
        {name ? `Thanks, ${name}! ` : ""}
        You&apos;re officially on the waitlist.
      </h1>

      <p className="mt-4 max-w-md text-base text-muted sm:text-lg">
        Invite friends and move up the waitlist.
      </p>

      <div className="mt-10 w-full">
        {code ? (
          <ReferralCard referralUrl={referralUrl} />
        ) : (
          <p className="text-sm text-muted">
            Your referral link will appear here once you join the waitlist.
          </p>
        )}
      </div>

      <Link
        href="/"
        className="mt-8 text-sm font-medium text-primary transition-colors hover:text-secondary"
      >
        ← Back to home
      </Link>
    </main>
  );
}
