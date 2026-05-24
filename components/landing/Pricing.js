import { Reveal } from "@/components/motion/Reveal";
import { pricing as pricingContent } from "@/content/landing";

function CheckIcon({ variant }) {
  const circle =
    variant === "green"
      ? "bg-accent-green text-white ring-accent-green/40"
      : "bg-accent-blue text-white ring-accent-blue/40";
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ${circle}`}
      aria-hidden
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6 5 8.5 9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up" className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-heading"
            className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
          >
            {pricingContent.title}
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            {pricingContent.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingContent.plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              variant="scale-in"
              delay={plan.featured ? 0 : 60 + i * 60}
            >
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-xl shadow-black/30 ${
                  plan.featured
                    ? "border-accent-green ring-2 ring-accent-green/50 shadow-[0_24px_80px_-12px_rgba(34,197,94,0.25)]"
                    : "border-white/10"
                }`}
              >
                {plan.badge ? (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent-green px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-accent-green/30">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M6 0 7.6 4.2 12 4.9 8.8 8.1 9.5 12.5 6 10.3 2.5 12.5 3.2 8.1 0 4.9l4.4-.7L6 0Z"
                      />
                    </svg>
                    {plan.badge}
                  </div>
                ) : null}
                <h3 className="font-display text-xl font-bold text-text">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-text-muted">{plan.period}</span>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-text">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon variant={plan.checkColor} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`interactive-lift mt-10 inline-flex w-full items-center justify-center rounded-2xl py-3.5 text-center text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    plan.buttonVariant === "green"
                      ? "bg-accent-green shadow-lg shadow-accent-green/25 hover:shadow-accent-green/40 focus-visible:outline-accent-green"
                      : "bg-accent-blue-dim shadow-lg shadow-accent-blue/20 hover:bg-accent-blue focus-visible:outline-accent-blue"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={120} className="mt-14 text-center text-sm text-text-muted">
          <p>
            {pricingContent.footnote}{" "}
            <a
              href="#contact"
              className="font-semibold text-accent-blue underline-offset-4 transition hover:text-accent-blue-dim hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
            >
              {pricingContent.footnoteLink}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
