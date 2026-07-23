import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

const REASONS = [
  "Early-access link before the public launch",
  "Exclusive launch-day pricing for waitlist members",
  "Your own referral link to skip the line even faster",
] as const;

/** Primary conversion section containing the waitlist signup form. */
export function WaitlistSection() {
  return (
    <Section id="waitlist">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-4 rounded-full bg-primary" />
            Limited First Drop
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Be First In Line
          </h2>
          <p className="mt-4 max-w-md text-base text-muted sm:text-lg">
            The first batch is limited — waitlist members get priority access
            before it&apos;s open to everyone else.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm text-foreground/90 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {reason}
              </li>
            ))}
          </ul>
        </FadeIn>

        <Suspense fallback={null}>
          <WaitlistForm />
        </Suspense>
      </div>
    </Section>
  );
}
