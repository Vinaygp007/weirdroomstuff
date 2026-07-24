import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Inflatable Buddy India collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="24 July 2026">
      <p>
        This Privacy Policy explains how {BUSINESS.legalName} (&quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;) collects, uses, and protects
        information when you join our waitlist or use this website.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Full name, email address, and WhatsApp number when you join the waitlist.</li>
        <li>Basic usage data (pages visited, referral source) via standard web analytics.</li>
      </ul>

      <h2>How We Use It</h2>
      <ul>
        <li>To notify you about early access, launch pricing, and shipping updates.</li>
        <li>To calculate your waitlist position and referral rewards.</li>
        <li>To respond if you contact us directly.</li>
      </ul>

      <h2>What We Don&apos;t Do</h2>
      <p>
        We do not sell your personal information to third parties. We do not
        message you for anything other than launch-related updates.
      </p>

      <h2>Data Storage</h2>
      <p>
        Waitlist submissions are stored securely in our database provider
        (Firebase/Google Cloud). You can request deletion of your data at any
        time by emailing us.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can request access to, correction of, or deletion of your
        personal data by contacting us at{" "}
        <a href={`mailto:${BUSINESS.email}`} className="text-primary underline underline-offset-2">
          {BUSINESS.email}
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        {BUSINESS.legalName}
        <br />
        {BUSINESS.address}
        <br />
        {BUSINESS.phone} · {BUSINESS.email}
      </p>
    </LegalLayout>
  );
}
