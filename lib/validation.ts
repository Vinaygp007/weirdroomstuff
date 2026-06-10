import { z } from "zod";

/**
 * Validation schema for the waitlist form.
 * Phone numbers accept Indian mobile numbers, with or without a +91 prefix.
 */
export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(60, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[-\s]?)?[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian WhatsApp number"
    ),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;
