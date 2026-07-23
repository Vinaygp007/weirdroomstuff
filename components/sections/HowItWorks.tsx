import { ListChecks, KeyRound, ShoppingBag, PackageCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  {
    icon: ListChecks,
    title: "Join the waitlist",
    description: "Takes 30 seconds — just your name, email, and WhatsApp number.",
  },
  {
    icon: KeyRound,
    title: "Get first dibs",
    description: "Waitlist members get an early-access link before anyone else.",
  },
  {
    icon: ShoppingBag,
    title: "Lock in your unit",
    description: "Preorder at launch pricing before the first batch runs out.",
  },
  {
    icon: PackageCheck,
    title: "It shows up at your door",
    description: "Shipped straight to you — first batch, first in line.",
  },
] as const;

/** Step-by-step explanation of the waitlist-to-delivery journey. */
export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="How It Works"
        title="From Waitlist To Your Doorstep"
        description="Four steps between you and your new favorite way to blow off steam."
      />

      <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connector line for large screens */}
        <div className="pointer-events-none absolute top-7 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

        {STEPS.map(({ icon: Icon, title, description }, index) => (
          <FadeIn key={title} delay={index * 0.12} className="relative">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary shadow-[0_0_24px_-8px_var(--color-primary)]">
                <Icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading text-xs font-bold text-background">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
