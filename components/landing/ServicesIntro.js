import { Reveal } from "@/components/motion/Reveal";
import { servicesIntro } from "@/content/landing";

export function ServicesIntro() {
  return (
    <Reveal
      as="div"
      variant="fade-up"
      className="mx-auto max-w-3xl px-4 pb-10 pt-6 text-center sm:px-6 lg:px-8"
    >
      <h2
        id="services-heading"
        className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
      >
        {servicesIntro.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
        {servicesIntro.subtitle}
      </p>
    </Reveal>
  );
}
