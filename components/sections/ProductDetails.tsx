import { Layers, Wind, Weight, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const SPECS = [
  {
    icon: Layers,
    title: "Durable PVC Build",
    description:
      "Made from thick, tear-resistant vinyl that takes repeated punches, kicks, and knockdowns without losing air.",
  },
  {
    icon: Wind,
    title: "Quick Inflate, Anywhere",
    description:
      "Inflate by hand pump, electric pump, or by mouth — ready to go in minutes, no extra tools needed.",
  },
  {
    icon: Weight,
    title: "Self-Righting Weighted Base",
    description:
      "Fill the base with water or sand for a low center of gravity. Knock it flat and it always wobbles back upright.",
  },
  {
    icon: Sparkles,
    title: "Smiski-Style Cute Face",
    description:
      "A round, minimal happy face in a bold neon colorway — looks just as good on a shelf as it does taking a hit.",
  },
] as const;

/** Detailed product breakdown: materials, setup, and what makes it self-righting. */
export function ProductDetails() {
  return (
    <Section id="product-details">
      <SectionHeading
        eyebrow="Product Details"
        title="What You're Actually Getting"
        description="A weighted-base inflatable punch doll built for daily abuse — here's what's under the hood."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SPECS.map(({ icon: Icon, title, description }, index) => (
          <FadeIn key={title} delay={index * 0.1}>
            <div className="group glass-card neon-ring flex h-full items-start gap-4 rounded-2xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary shadow-[0_0_20px_-8px_var(--color-primary)] transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
