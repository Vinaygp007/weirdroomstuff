"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const FAQS = [
  {
    question: "Is it available in India?",
    answer:
      "Yes! We're launching the first official drop exclusively for India. Waitlist members get priority access before it's available to the general public.",
  },
  {
    question: "When will shipping start?",
    answer:
      "Shipping for the first batch begins shortly after launch. Exact dates will be shared with waitlist members via email and WhatsApp first.",
  },
  {
    question: "How does preorder work?",
    answer:
      "Once you're on the waitlist, you'll receive an early-access link to secure your preorder before public sales open — guaranteeing you a unit from the first batch.",
  },
  {
    question: "What is the expected price range?",
    answer:
      "We're aiming to keep it affordable and accessible. Waitlist members will also get an exclusive launch discount, announced closer to the drop date.",
  },
] as const;

/** Accordion-style frequently asked questions section. */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-surface/30">
      <SectionHeading eyebrow="FAQ" title="Got Questions? We've Got Answers" />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <FadeIn key={faq.question} delay={index * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface/60">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground sm:text-lg"
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-primary"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-muted sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
