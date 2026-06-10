"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import productImage from "@/public/product.jpeg";

/** Full-screen hero section with animated background and primary CTA. */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <AnimatedBackground />

      {/* Floating inflatable buddy product photo */}
      <motion.div
        className="relative mb-6 h-48 w-48 sm:h-60 sm:w-60"
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full"
          animate={{ y: [0, -18, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={productImage}
            alt="The Viral Inflatable Buddy"
            fill
            priority
            sizes="(min-width: 640px) 240px, 192px"
            className="rounded-3xl object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm sm:text-sm"
      >
        <Sparkles className="h-4 w-4" />
        Launching Soon in India
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        The Viral Inflatable Buddy{" "}
        <span className="text-gradient">Is Coming To India</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg md:text-xl"
      >
        Join the waitlist for early access before the first drop sells out.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10"
      >
        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 font-heading text-base font-semibold text-white shadow-lg shadow-primary/30 transition-shadow hover:shadow-primary/50 sm:text-lg"
        >
          Join Waitlist
        </motion.a>
      </motion.div>

      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll to learn more"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
