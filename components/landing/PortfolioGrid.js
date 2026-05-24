import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { portfolioGrid } from "@/content/landing";

export function PortfolioGrid() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 border-y border-slate-200/80 bg-section-light px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up-fast" className="mx-auto max-w-3xl text-center">
          <h2
            id="portfolio-heading"
            className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {portfolioGrid.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-section-light-muted sm:text-lg">
            {portfolioGrid.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioGrid.items.map((item, i) => (
            <Reveal key={item.title} as="article" variant="fade-up-fast" delay={i * 60}>
              <div className="group interactive-lift flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/10 ring-1 ring-slate-900/[0.04] hover:shadow-xl">
                <div className="relative aspect-[5/4] bg-gradient-to-br from-slate-100 to-slate-200/80">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(34,197,94,0.08))]"
                      aria-hidden
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
