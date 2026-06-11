import { Heart, Laugh, TrendingUp, Gift } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  {
    icon: Heart,
    title: "Punch Away Stress",
    description:
      "Hit it, knock it flat, push it over — its weighted tumbler base always rights it back up. The wobble is oddly addictive.",
  },
  {
    icon: Laugh,
    title: "Cute Desk & Room Decor",
    description:
      "With its round Smiski-style face and bold neon colors, it doubles as quirky decor for your desk, shelf, or gaming setup.",
  },
  {
    icon: TrendingUp,
    title: "Viral Social Media Product",
    description:
      "The internet can't stop sharing these wobble-and-bounce videos. Be one of the first to own one in India.",
  },
  {
    icon: Gift,
    title: "Perfect Gift Idea",
    description:
      "Quirky, fun, and affordable — the ultimate gift for friends, siblings, or coworkers who need to blow off steam.",
  },
] as const;

/** Highlights the core selling points of the product. */
export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Why You'll Love It"
        title="More Than Just A Toy"
        description="It's a punching bag, a desk decoration, and a viral conversation starter — all in one self-righting inflatable package."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }, index) => (
          <FadeIn key={title} delay={index * 0.1}>
            <div className="group glass-card neon-ring h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary shadow-[0_0_20px_-8px_var(--color-primary)] transition-transform duration-200 group-hover:scale-110">
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
