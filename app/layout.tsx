import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weirdroomstuff.vercel.app";

const TITLE = "Viral Inflatable Buddy India";
const DESCRIPTION =
  "Join the waitlist for India's first drop of the viral mini-figure-style inflatable punch doll tumbler — perfect for stress relief and quirky desk decor.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "inflatable buddy",
    "punching bag toy",
    "inflatable tumbler",
    "punch doll",
    "viral toy India",
    "mini figure toy",
    "stress relief toy",
    "desk decor toy",
    "waitlist",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
