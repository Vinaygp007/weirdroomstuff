import { Flame, Hash, MessageCircleHeart } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const TRENDS = [
  {
    icon: Flame,
    tag: "#StressRelief",
    title: "The Internet's New Favorite Stress Outlet",
    description:
      "\"Punch it and watch it wobble back up\" videos have become a go-to genre across TikTok and Instagram — millions tune in just to watch these dolls take a hit and bounce right back.",
  },
  {
    icon: Hash,
    tag: "#DeskToy",
    title: "From Office Desks To Gaming Setups",
    description:
      "Smiski-style inflatable tumblers have become a staple of desk-tour and room-decor content — equal parts cute collectible and stress-relief tool, sitting right next to monitors everywhere.",
  },
  {
    icon: MessageCircleHeart,
    tag: "#FYP",
    title: "Why It Keeps Showing Up On Your Feed",
    description:
      "The oddly satisfying wobble-and-recover motion is a perfect loop for short-form video — creators keep posting \"how hard can I hit it\" clips, and the algorithm keeps rewarding them.",
  },
] as const;

/** Frames the broader social-media trend around Smiski-style inflatable punch dolls. */
export function TrendingNow() {
  return (
    <Section id="trending">
      <SectionHeading
        eyebrow="Trending Now"
        title="Why This Category Is Blowing Up"
        description="Inflatable punch doll tumblers are having a moment online — here's what's driving the obsession."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TRENDS.map(({ icon: Icon, tag, title, description }, index) => (
          <FadeIn key={title} delay={index * 0.1}>
            <div className="group glass-card neon-ring flex h-full flex-col gap-4 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary shadow-[0_0_20px_-8px_var(--color-primary)] transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-secondary">
                  {tag}
                </span>
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
