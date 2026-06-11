import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";

const REEL_URLS = [
  "https://www.instagram.com/reel/DVPZ1Eqic5T/",
  "https://www.instagram.com/reel/DX1sIw3OjXb/",
  "https://www.instagram.com/reel/DZPz1WSOWaN/",
] as const;

/** Grid of embedded Instagram Reels showcasing the product going viral. */
export function SocialProof() {
  return (
    <Section id="social-proof">
      <SectionHeading
        eyebrow="Social Proof"
        title="Already Going Viral Worldwide"
        description="Millions of views across Instagram and TikTok — and India hasn't even gotten its hands on one yet."
      />

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-3">
        {REEL_URLS.map((url, index) => (
          <FadeIn key={url} delay={index * 0.1} className="mx-auto w-full max-w-xs">
            <InstagramEmbed url={url} className="aspect-[9/16] w-full" />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
