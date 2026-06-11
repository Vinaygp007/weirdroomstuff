import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductDetails } from "@/components/sections/ProductDetails";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { TrendingNow } from "@/components/sections/TrendingNow";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Features />
      <ProductDetails />
      <HowItWorks />
      <WaitlistSection />
      <SocialProof />
      <TrendingNow />
      <FAQ />
      <Footer />
    </main>
  );
}
