"use client";

import { motion } from "framer-motion";

/**
 * Decorative animated gradient blobs used as a full-screen background layer.
 * Purely presentational — sits behind content with `pointer-events-none`.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />

      <motion.div
        className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/40 blur-[120px] sm:h-[28rem] sm:w-[28rem]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-secondary/40 blur-[120px] sm:h-[32rem] sm:w-[32rem]"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -10, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/30 blur-[120px] sm:h-[28rem] sm:w-[28rem]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neon grid overlay, fading toward the bottom */}
      <div
        className="absolute inset-0 opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Vignette to keep edges dark and focus on content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}
