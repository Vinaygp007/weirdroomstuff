"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, PartyPopper } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { waitlistSchema, type WaitlistSchema } from "@/lib/validation";
import { generateReferralCode } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

/**
 * Waitlist signup form. Validates input, writes a new entry to the
 * `waitlist` Firestore collection, and redirects to /thank-you on success.
 */
export function WaitlistForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const referredBy = searchParams.get("ref");

  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistSchema>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistSchema) => {
    setSubmitError(null);

    try {
      const referralCode = generateReferralCode(data.name);

      await addDoc(collection(db, "waitlist"), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        referralCode,
        referredBy: referredBy || null,
        createdAt: serverTimestamp(),
      });

      router.push(
        `/thank-you?code=${encodeURIComponent(referralCode)}&name=${encodeURIComponent(
          data.name
        )}`
      );
    } catch (error) {
      console.error("Failed to join waitlist:", error);
      setSubmitError("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-3xl border border-border bg-surface/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8"
    >
      {referredBy ? (
        <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
          <PartyPopper className="h-4 w-4 shrink-0" />
          You were invited with code{" "}
          <span className="font-bold">{referredBy}</span>
        </div>
      ) : null}

      <Input
        label="Full Name"
        placeholder="Aryan Sharma"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        label="WhatsApp Number"
        type="tel"
        placeholder="98765 43210"
        autoComplete="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      {submitError ? (
        <p className="text-sm text-red-600">{submitError}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-center text-xs text-muted">
        No spam, ever. We&apos;ll only message you about launch updates.
      </p>
    </motion.form>
  );
}
