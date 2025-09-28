import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ConfiguratorSection } from "@/components/sections/ConfiguratorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <FeatureHighlights />
        <ProductShowcase />
        <ExperienceSection />
        <ConfiguratorSection />
        <TestimonialsSection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
