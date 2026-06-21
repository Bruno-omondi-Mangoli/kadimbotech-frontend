import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
