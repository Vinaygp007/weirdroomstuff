import { Gift, Laugh, RotateCcw } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const SIDE_HIGHLIGHTS = [
  {
    icon: Laugh,
    title: "Stress relief, disguised as a toy",
    description:
      "Bad day at work? Sibling being annoying? Knock it flat as many times as you need. It never complains, never stays down.",
  },
  {
    icon: Gift,
    title: "The easiest gift you'll ever pick",
    description:
      "Weird enough to be memorable, cheap enough to not overthink it. Works for birthdays, secret santa, or \"just because.\"",
  },
] as const;

/** Bento-style highlight grid — hero benefit card plus supporting points. */
export function Highlights() {
  return (
    <Section id="highlights">
      <SectionHeading
        eyebrow="Why People Can't Stop"
        title="It's Not Just A Toy. It's A Whole Mood."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <div className="glass-card relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[90px]" />
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <RotateCcw className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                The Wobble Effect
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Push it, punch it, throw a full-on tantrum at it — the
                weighted base always rights it back up. That one motion is
                why nobody can put it down, and why it hasn&apos;t stopped
                trending online for months.
              </p>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary">
              Reason #1 it&apos;s all over your feed
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6">
          {SIDE_HIGHLIGHTS.map(({ icon: Icon, title, description }, index) => (
            <FadeIn key={title} delay={0.1 + index * 0.1}>
              <div className="glass-card neon-ring h-full rounded-3xl p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
