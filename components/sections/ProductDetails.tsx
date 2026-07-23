import Image from "next/image";
import { Layers, Weight, Wind, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import productImage from "@/public/product.jpeg";

const SPECS = [
  {
    icon: Layers,
    title: "Thick, tear-resistant PVC",
    description:
      "Built to survive daily punches and knockdowns without losing air or splitting at the seams.",
  },
  {
    icon: Wind,
    title: "Inflates in under 3 minutes",
    description:
      "Hand pump, electric pump, or lung power — no tools, no assembly, ready straight out of the box.",
  },
  {
    icon: Weight,
    title: "Self-righting weighted base",
    description:
      "Fill it with water or sand for a low center of gravity. Flatten it and it always wobbles back up.",
  },
  {
    icon: Sparkles,
    title: "Collectible-style face, bold colorway",
    description:
      "A round, minimal expression that looks just as good taking a hit as it does sitting on a shelf.",
  },
] as const;

/** Split product breakdown: visual on one side, specs list on the other. */
export function ProductDetails() {
  return (
    <Section id="product-details" className="bg-white/[0.02]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-4 rounded-full bg-primary" />
            What You&apos;re Getting
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Built For Daily Abuse
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            No gimmicks under the hood — just a well-made inflatable that
            takes a beating and keeps bouncing back.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-border">
            {SPECS.map(({ icon: Icon, title, description }, index) => (
              <FadeIn key={title} delay={index * 0.08} className="flex gap-4 py-5 first:pt-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-secondary/15 blur-[100px]" />
            <div className="glass-card flex h-full w-full items-center justify-center rounded-[2.5rem] p-10">
              <div className="relative h-full w-full">
                <Image
                  src={productImage}
                  alt="Inflatable Buddy product detail"
                  fill
                  sizes="(min-width: 1024px) 400px, 320px"
                  className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div className="glass-card absolute -left-4 top-8 hidden items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold text-foreground shadow-lg sm:flex">
              <Weight className="h-4 w-4 text-primary" />
              Self-righting base
            </div>
            <div className="glass-card absolute -right-4 bottom-10 hidden items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold text-foreground shadow-lg sm:flex">
              <Layers className="h-4 w-4 text-secondary" />
              Tear-resistant PVC
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
