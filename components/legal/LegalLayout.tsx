import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

/** Shared page shell for legal/policy pages (Privacy, Refund & Cancellation). */
export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <main className="relative w-full overflow-hidden px-6 py-20 sm:py-28">
      <AnimatedBackground />

      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updatedAt}</p>

        <div className="glass-card mt-8 flex flex-col gap-6 rounded-3xl p-6 text-sm leading-relaxed text-muted sm:p-10 sm:text-base [&_h2]:mt-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:sm:text-xl [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
          {children}
        </div>
      </div>
    </main>
  );
}
