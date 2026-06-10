import { Suspense } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

/** Primary conversion section containing the waitlist signup form. */
export function WaitlistSection() {
  return (
    <Section id="waitlist">
      <SectionHeading
        eyebrow="Limited First Drop"
        title="Be First In Line"
        description="Spots in the first batch are limited. Join now to lock in early access and exclusive launch pricing."
      />

      <div className="mt-12">
        <Suspense fallback={null}>
          <WaitlistForm />
        </Suspense>
      </div>
    </Section>
  );
}
