import { Reveal } from "@/components/motion/Reveal";
import { cta } from "@/content/landing";

function ArrowRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cta() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <Reveal variant="scale-in" className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d1629] via-bg-page to-[#0a1222] px-6 py-16 text-center shadow-2xl shadow-black/50 sm:px-12">
        <div
          className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]"
          aria-hidden
        />
        <Reveal variant="fade-up" delay={100}>
          <h2
            id="cta-heading"
            className="relative font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
          >
            {cta.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted">
            {cta.subtitle}
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@agency.com"
              className="group interactive-lift inline-flex items-center gap-2 rounded-2xl bg-accent-green px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-accent-green/25 hover:shadow-accent-green/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            >
              {cta.primary}
              <ArrowRightIcon className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+15551234567"
              className="interactive-lift inline-flex items-center rounded-2xl border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-text backdrop-blur-sm hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {cta.secondary}
            </a>
          </div>
        </Reveal>
        <div className="relative mx-auto mt-14 max-w-2xl border-t border-white/10 pt-10">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="flex items-start gap-4 text-left">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue ring-1 ring-accent-blue/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 6a2 2 0 0 1 2-2h2.5l1 2H18a2 2 0 0 1 2 2v1.5M4 6v12a2 2 0 0 0 2 2h12"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="m4 8 6.5 4.5a2 2 0 0 0 2.5 0L20 8"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                  {cta.emailLabel}
                </p>
                <a
                  href={`mailto:${cta.email}`}
                  className="mt-1 block font-display text-lg font-bold text-text hover:text-accent-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                >
                  {cta.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green ring-1 ring-accent-green/30">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                  {cta.phoneLabel}
                </p>
                <a
                  href="tel:+15551234567"
                  className="mt-1 block font-display text-lg font-bold text-text hover:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                >
                  {cta.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
