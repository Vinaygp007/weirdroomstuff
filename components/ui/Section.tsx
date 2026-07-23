import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Consistent full-width section wrapper with responsive horizontal padding. */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full px-6 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

/** Centered eyebrow + title + description heading used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-4 rounded-full bg-primary" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
