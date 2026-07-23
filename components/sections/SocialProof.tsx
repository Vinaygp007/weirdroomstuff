import { Flame, Hash, MessageCircleHeart } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";

const REEL_URLS = [
  "https://www.instagram.com/reel/DVPZ1Eqic5T/",
  "https://www.instagram.com/reel/DX1sIw3OjXb/",
  "https://www.instagram.com/reel/DZPz1WSOWaN/",
] as const;

const TAGS = [
  { icon: Flame, label: "#StressRelief" },
  { icon: Hash, label: "#DeskToy" },
  { icon: MessageCircleHeart, label: "#FYP" },
] as const;

/** Grid of embedded Instagram Reels showcasing the product going viral. */
export function SocialProof() {
  return (
    <Section id="social-proof">
      <SectionHeading
        eyebrow="Social Proof"
        title="Already Going Viral Worldwide"
        description="The 'punch it, watch it wobble back up' genre has taken over short-form video — India hasn't even gotten its hands on one yet."
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {TAGS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-muted"
          >
            <Icon className="h-3.5 w-3.5 text-secondary" />
            {label}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-3">
        {REEL_URLS.map((url, index) => (
          <FadeIn key={url} delay={index * 0.1} className="mx-auto w-full max-w-xs">
            <InstagramEmbed url={url} className="aspect-[9/16] w-full" />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
