import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/landing";

function QuoteIcon({ className }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 18c0-4 2-8 6-10l2 3c-2 1.5-3 4-3 6h4v11H8V18h4Zm18 0c0-4 2-8 6-10l2 3c-2 1.5-3 4-3 6h4v11H26V18h4Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="text-accent-green"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M9 1.2 11 6.4l5.7.8-4.2 4 1 5.6L9 14.7 4.5 16.8l1-5.6-4.2-4 5.7-.8L9 1.2Z"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up" className="mx-auto max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {testimonials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-section-light-muted sm:text-lg">
            {testimonials.subtitle}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} as="article" variant="fade-up" delay={i * 60}>
              <div className="interactive-lift flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/[0.04] hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <Stars />
                  <QuoteIcon className="shrink-0 text-sky-300" />
                </div>
                <p className="mt-6 flex-1 text-sm leading-relaxed text-slate-600">
                  {t.quote}
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-sm font-bold text-white shadow-md"
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display font-bold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-sm text-section-light-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
