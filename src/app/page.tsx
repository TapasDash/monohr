import BrandLogosStrip from "@/components/sections/BrandLogosStrip";
import { FAQSection } from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JobListingsGrid } from "@/components/sections/JobListingsGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandLogosStrip />
      <JobListingsGrid />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
