import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Our refund and cancellation terms for preorders and purchases.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" updatedAt="24 July 2026">
      <p>
        This policy covers preorders and purchases made through this website.
        Joining the waitlist itself is free and involves no payment or
        commitment.
      </p>

      <h2>Preorder Cancellations</h2>
      <p>
        TODO: state your cancellation window, e.g. &quot;You can cancel a
        preorder and receive a full refund any time before your unit ships.
        Once a unit has shipped, it can no longer be cancelled.&quot;
      </p>

      <h2>Refunds</h2>
      <p>
        TODO: state your refund method and timeline, e.g. &quot;Approved
        refunds are issued to the original payment method within X business
        days.&quot;
      </p>

      <h2>Damaged or Defective Items</h2>
      <p>
        TODO: state your replacement/return process for items damaged in
        transit or defective on arrival, including any reporting window
        (e.g. &quot;within 48 hours of delivery, with photo/video proof&quot;).
      </p>

      <h2>Shipping Delays</h2>
      <p>
        Because the first batch ships from our supplier and clears customs
        before reaching you, delivery timelines are estimates, not
        guarantees. We&apos;ll communicate any significant delays to waitlist
        members directly.
      </p>

      <h2>Contact</h2>
      <p>
        For refund or cancellation requests, contact us at{" "}
        <a href={`mailto:${BUSINESS.email}`} className="text-primary underline underline-offset-2">
          {BUSINESS.email}
        </a>{" "}
        or {BUSINESS.phone}.
      </p>
    </LegalLayout>
  );
}
