import { Heart, Laugh, TrendingUp, Gift } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  {
    icon: Heart,
    title: "Stress Relief",
    description:
      "Squeeze, punch, and bounce your stress away. The satisfying wobble is oddly addictive.",
  },
  {
    icon: Laugh,
    title: "Funny Room Companion",
    description:
      "A goofy little buddy that sits on your desk, shelf, or bed and never judges you.",
  },
  {
    icon: TrendingUp,
    title: "Viral Social Media Product",
    description:
      "The internet can't stop sharing these. Be one of the first to own one in India.",
  },
  {
    icon: Gift,
    title: "Perfect Gift Idea",
    description:
      "Quirky, fun, and affordable — the ultimate gift for friends, siblings, or coworkers.",
  },
] as const;

/** Highlights the core selling points of the product. */
export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Why You'll Love It"
        title="More Than Just A Toy"
        description="It's a stress reliever, a comedian, and a viral conversation starter — all in one squishy package."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }, index) => (
          <FadeIn key={title} delay={index * 0.1}>
            <div className="group h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-200 hover:border-primary/40 hover:bg-surface">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-6 w-6" />
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
