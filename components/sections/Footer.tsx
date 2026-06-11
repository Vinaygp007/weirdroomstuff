import Link from "next/link";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
] as const;

const CONTACT_EMAIL = "hello@inflatablebuddy.in";

/** Site footer with brand mark, social links, and contact info. */
export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white/[0.02] px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="text-2xl">🥊🎈</span>
          <span className="text-gradient">Inflatable Buddy</span>
        </Link>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_-8px_var(--color-primary)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          {CONTACT_EMAIL}
        </a>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Inflatable Buddy India. All rights reserved.
      </p>
    </footer>
  );
}
