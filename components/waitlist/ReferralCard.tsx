"use client";

import { motion } from "framer-motion";
import { Check, Copy, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface ReferralCardProps {
  referralUrl: string;
}

/** Displays a referral link with copy-to-clipboard and WhatsApp share actions. */
export function ReferralCard({ referralUrl }: ReferralCardProps) {
  const { copied, copy } = useCopyToClipboard();

  const whatsappMessage = encodeURIComponent(
    `I just joined the waitlist for the viral inflatable buddy 🥊🎈 launching in India! Join with my link to get early access: ${referralUrl}`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card mx-auto w-full max-w-md rounded-3xl p-6 shadow-2xl shadow-black/60 sm:p-8"
    >
      <p className="mb-2 text-sm font-medium text-foreground/80">
        Your referral link
      </p>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-white/5 p-2 pl-4">
        <span className="flex-1 truncate text-left text-sm text-muted sm:text-base">
          {referralUrl}
        </span>
        <button
          type="button"
          onClick={() => copy(referralUrl)}
          aria-label="Copy referral link"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-foreground transition-colors hover:bg-white/20"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      <a
        href={`https://wa.me/?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block"
      >
        <Button
          variant="primary"
          size="lg"
          className="w-full from-[#25D366] via-[#25D366] to-[#25D366] text-white shadow-[0_0_30px_-6px_#25D366] hover:shadow-[0_0_45px_-6px_#25D366]"
        >
          <MessageCircle className="h-5 w-5" />
          Share on WhatsApp
        </Button>
      </a>
    </motion.div>
  );
}
