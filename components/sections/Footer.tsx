import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund & Cancellation Policy", href: "/refund-policy" },
] as const;

/** Site footer with brand mark, contact info, and legal links. */
export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white/[0.02] px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="text-2xl">🥊🎈</span>
          <span className="text-gradient">Inflatable Buddy</span>
        </Link>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {BUSINESS.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-muted">
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" />
            {BUSINESS.address}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h3 className="text-sm font-semibold text-foreground">Legal</h3>
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
      </p>
    </footer>
  );
}
