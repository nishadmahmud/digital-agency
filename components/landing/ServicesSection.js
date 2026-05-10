import { ServicesGrid } from "./ServicesGrid";
import { ServicesIntro } from "./ServicesIntro";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 border-b border-white/[0.06] pt-10"
    >
      <ServicesIntro />
      <ServicesGrid />
    </section>
  );
}
