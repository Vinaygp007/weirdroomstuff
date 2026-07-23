"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, PlayCircle, Star, Tag } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import productImage from "@/public/product.jpeg";

/** Full-screen hero section with product visual, headline, and primary CTA. */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm sm:text-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        First official drop, landing in India
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
      >
        Hit it as hard
        <br />
        as you want.{" "}
        <span className="glow-text text-gradient">It gets back up.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg md:text-xl"
      >
        The self-righting inflatable punch doll that&apos;s taken over
        Instagram is finally coming to India. Weighted base, oddly satisfying
        wobble, zero chill required.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
      >
        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-primary to-secondary bg-[length:200%_auto] bg-left px-8 py-4 font-heading text-base font-bold text-background shadow-[0_0_30px_-6px_var(--color-primary)] transition-[background-position] duration-300 hover:bg-right sm:text-lg"
        >
          <span className="relative">Join the Waitlist</span>
        </motion.a>

        <a
          href="#social-proof"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-6 py-4 font-heading text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-secondary/50 hover:bg-white/10 sm:text-base"
        >
          <PlayCircle className="h-4 w-4 text-secondary" />
          Watch It Get Punched
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-foreground sm:text-sm"
      >
        <Tag className="h-3.5 w-3.5 text-primary" />
        Expected launch price:{" "}
        <span className="text-primary">₹499–₹799</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-4 flex items-center gap-1.5 text-xs text-muted sm:text-sm"
      >
        <div className="flex items-center gap-0.5 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <span>Loved by early testers across Delhi, Mumbai &amp; Bangalore</span>
      </motion.div>

      {/* Floating inflatable buddy product photo */}
      <motion.div
        className="relative mt-12 h-52 w-52 sm:h-64 sm:w-64"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-[70px]" />

        <motion.div
          className="h-full w-full"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={productImage}
            alt="The Viral Inflatable Buddy"
            fill
            priority
            sizes="(min-width: 640px) 256px, 208px"
            className="rounded-3xl object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </motion.div>

      <motion.a
        href="#highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
        aria-label="Scroll to learn more"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
