"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Flame, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import productImage from "@/public/product.jpeg";

/** Full-screen hero section with animated background and primary CTA. */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <AnimatedBackground />

      {/* Floating inflatable buddy product photo with neon glow halo */}
      <motion.div
        className="relative mb-8 h-52 w-52 sm:h-72 sm:w-72"
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Glow halo */}
        <div className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-[60px]" />
        <motion.div
          className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-secondary/30 blur-[80px]"
        />

        {/* Sparkle accents */}
        <motion.div
          className="absolute -top-4 -right-4 text-primary"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8], rotate: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-7 w-7 drop-shadow-[0_0_12px_var(--color-primary)]" />
        </motion.div>
        <motion.div
          className="absolute -bottom-2 -left-6 text-secondary"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.7, 1, 0.7], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="h-5 w-5 drop-shadow-[0_0_10px_var(--color-secondary)]" />
        </motion.div>

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
            sizes="(min-width: 640px) 288px, 208px"
            className="rounded-3xl object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-[0_0_24px_-8px_var(--color-primary)] backdrop-blur-sm sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Launching Soon in India
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
      >
        The Viral{" "}
        <span className="glow-text text-gradient">Inflatable Buddy</span>{" "}
        Is Coming To India
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg md:text-xl"
      >
        A Smiski-style inflatable punch doll tumbler — punch it, knock it
        down, and watch it wobble right back up. Join the waitlist for early
        access before the first drop sells out.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-primary to-secondary bg-[length:200%_auto] bg-left px-8 py-4 font-heading text-base font-bold text-background shadow-[0_0_30px_-6px_var(--color-primary)] transition-[background-position,box-shadow] duration-300 hover:bg-right hover:shadow-[0_0_45px_-6px_var(--color-primary)] sm:text-lg"
        >
          <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] mix-blend-overlay" />
          <span className="relative">Join Waitlist</span>
        </motion.a>

        <a
          href="#social-proof"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-6 py-4 font-heading text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-secondary/50 hover:bg-white/10 sm:text-base"
        >
          <Flame className="h-4 w-4 text-secondary" />
          See It Go Viral
        </a>
      </motion.div>

      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
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
