import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Highlights } from "@/components/sections/Highlights";
import { ProductDetails } from "@/components/sections/ProductDetails";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustBar />
      <Highlights />
      <ProductDetails />
      <HowItWorks />
      <WaitlistSection />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
