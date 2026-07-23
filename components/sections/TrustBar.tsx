import { FadeIn } from "@/components/ui/FadeIn";

const STATS = [
  { value: "150M+", label: "Views across Reels & TikTok" },
  { value: "12,400+", label: "Already on the waitlist" },
  { value: "4.8/5", label: "Rated by early testers" },
  { value: "#1", label: "Trending desk toy category" },
] as const;

/** Slim trust/stat strip bridging the hero and the rest of the page. */
export function TrustBar() {
  return (
    <div className="relative w-full border-y border-border bg-white/[0.02] px-6 py-8">
      <FadeIn className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-y-6 text-center sm:grid-cols-4 sm:divide-x sm:divide-border">
        {STATS.map(({ value, label }) => (
          <div key={label} className="px-4">
            <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              {value}
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
          </div>
        ))}
      </FadeIn>
    </div>
  );
}
