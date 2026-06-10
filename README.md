# Viral Inflatable Buddy India — Waitlist Landing Page

A premium, dark-themed Next.js 15 landing page built to collect waitlist
signups and build pre-launch hype for a viral Smiski-inspired inflatable
punching buddy launching in India.

## Tech Stack

- **Next.js 15** (App Router, TypeScript, Server Components)
- **Tailwind CSS v4** (dark theme, custom gradient palette)
- **Framer Motion** (hero/scroll animations)
- **Firebase Firestore** (waitlist storage + live admin dashboard)
- **react-hook-form + zod** (form validation)
- **lucide-react** (icons)

## Folder Structure

```
app/
  layout.tsx              Root layout, fonts, SEO metadata
  page.tsx                Landing page (composes all sections)
  globals.css             Dark theme + Tailwind v4 theme tokens
  opengraph-image.tsx      Dynamic OG image
  thank-you/page.tsx       Post-signup page (referral link, share)
  admin/page.tsx           Protected admin dashboard
  admin/login/             Password-gated login (server action)
components/
  sections/                Hero, Features, HowItWorks, SocialProof, FAQ, Footer, WaitlistSection
  waitlist/                WaitlistForm, ReferralCard
  admin/                   AdminDashboard, StatCard, SignupsTable, ReferralLeaderboard
  ui/                      Button, Input, Section, AnimatedBackground, FadeIn
hooks/
  useCopyToClipboard.ts
lib/
  firebase.ts              Firebase app + Firestore init
  utils.ts                 cn(), referral code generation, formatting
  validation.ts            zod schema for the waitlist form
types/
  index.ts                 Shared TypeScript types
middleware.ts              Protects /admin routes via session cookie
```

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase project
credentials (Firebase Console → Project Settings → General → Your apps → SDK
setup and configuration):

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_DASHBOARD_PASSWORD=changeme
```

- `NEXT_PUBLIC_SITE_URL` is used to build referral links (`/?ref=CODE`). Set
  this to your production domain when deploying.
- `ADMIN_DASHBOARD_PASSWORD` protects `/admin` via a simple password gate
  (server action + httpOnly session cookie, enforced in `middleware.ts`).

### 3. Firestore setup

In the Firebase Console:

1. Create a Firestore database (production or test mode).
2. Create a collection named **`waitlist`** (it will be created
   automatically on first signup, but you can pre-create it).
3. Each document stores:
   - `name: string`
   - `email: string`
   - `phone: string`
   - `referralCode: string` — unique code generated for this user
   - `referredBy: string | null` — referral code of whoever invited them
   - `createdAt: Timestamp` — server timestamp

#### Recommended Firestore security rules

These rules allow anyone to **create** a waitlist entry (public signup form)
but block public **reads** — the admin dashboard reads via the same client
SDK while authenticated behind the `/admin` password gate, so for stricter
production security consider moving admin reads to a server-side Admin SDK
route instead.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{docId} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'phone', 'referralCode'])
                     && request.resource.data.name is string
                     && request.resource.data.email is string
                     && request.resource.data.phone is string;
      allow read, update, delete: if false;
    }
  }
}
```

> Note: the `/admin` page currently reads `waitlist` directly with the
> client SDK. If you keep the rules above (`read: if false`), the admin
> dashboard won't be able to fetch data. For a quick start, you can allow
> reads (`allow read: if true`) since `/admin` is gated by the password
> middleware — but for production, prefer a server-side API route using the
> Firebase Admin SDK with a service account, which bypasses Firestore
> security rules entirely.

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm run start
```

## Key Features

### Referral System

- Every signup gets a unique referral code (e.g. `VINAY123`) generated from
  their name + random suffix (`lib/utils.ts`).
- Referral links look like `https://yourdomain.com/?ref=VINAY123`.
- If a user signs up via a referral link, the `ref` query param is captured
  and stored as `referredBy` on their waitlist document.
- The `/thank-you` page shows the new user's own referral link with copy and
  WhatsApp share buttons.

### Admin Dashboard (`/admin`)

- Protected by `ADMIN_DASHBOARD_PASSWORD` via `middleware.ts` + a server
  action login form at `/admin/login`.
- Subscribes live to the `waitlist` Firestore collection (`onSnapshot`) and
  shows:
  - Total signups
  - Total referrals
  - Latest signups table
  - Referral leaderboard (top referrers ranked by invite count)

### SEO

- `app/layout.tsx` sets the title, description, Open Graph, and Twitter card
  metadata.
- `app/opengraph-image.tsx` dynamically generates a branded OG/social
  preview image using `next/og`.

## Customization

- **Colors / theme**: edit the CSS variables in `app/globals.css`
  (`--color-primary`, `--color-secondary`, `--color-accent`, etc.).
- **Copy / sections**: all section content lives in
  `components/sections/*.tsx` — update text, FAQ entries, social links, and
  contact email there.
- **Social links & contact email**: `components/sections/Footer.tsx`.
