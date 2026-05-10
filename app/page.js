import { Cta } from "@/components/landing/Cta";
import { Hero } from "@/components/landing/Hero";
import { KpiStrip } from "@/components/landing/KpiStrip";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { PortfolioGrid } from "@/components/landing/PortfolioGrid";
import { Pricing } from "@/components/landing/Pricing";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <KpiStrip />
        <ServicesSection />
        <PortfolioGrid />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
