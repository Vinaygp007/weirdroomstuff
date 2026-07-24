/**
 * Central place for real-world business details used in the footer, the
 * Contact section, and the legal pages. Replace the TODO placeholders with
 * your actual registered business info before accepting payments — Indian
 * payment gateways (Razorpay/Cashfree) and consumer-protection rules both
 * require a verifiable business identity, not just an email address.
 */
export const BUSINESS = {
  legalName: "[YOUR REGISTERED BUSINESS NAME — e.g. sole proprietorship name, or 'Vinay G P trading as Weird Room Stuff' if not yet incorporated]",
  email: "hello@inflatablebuddy.in",
  phone: "[YOUR 10-DIGIT BUSINESS PHONE, e.g. +91 XXXXXXXXXX]",
  address: "[YOUR REGISTERED ADDRESS — city, state, PIN code]",
  social: {
    instagram: "[YOUR FULL INSTAGRAM URL, e.g. https://instagram.com/yourhandle, or leave as empty string if account doesn't exist yet]",
    twitter: "[YOUR FULL TWITTER/X URL, or leave empty]",
    youtube: "[YOUR FULL YOUTUBE URL, or leave empty]",
  },
} as const;
