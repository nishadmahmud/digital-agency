import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/landing";

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

function PlayIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 4.5v9l7.5-4.5L6 4.5Z" />
    </svg>
  );
}

function HeroAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="hero-bg-drift absolute -left-40 top-0">
        <div className="h-[28rem] w-[28rem] rounded-full bg-accent-blue/15 blur-[100px]" />
      </div>
      <div className="hero-bg-drift-alt absolute right-0 top-32">
        <div className="h-72 w-72 rounded-full bg-accent-green/10 blur-[90px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />

      <span className="hero-float hero-float-delay-1 absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-accent-blue/60 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
      <span className="hero-float-alt hero-float-delay-2 absolute left-[18%] top-[58%] h-1.5 w-1.5 rounded-full bg-accent-green/70 shadow-[0_0_10px_rgba(34,197,94,0.45)]" />
      <span className="hero-float hero-float-delay-2 absolute right-[12%] top-[18%] h-2.5 w-2.5 rounded-full bg-sky-300/50" />
      <span className="hero-float-alt absolute right-[28%] bottom-[28%] hidden h-1.5 w-1.5 rounded-full bg-white/40 sm:block" />

      <span className="hero-float-alt hero-float-delay-1 absolute left-[42%] top-[12%] hidden h-px w-16 rotate-45 bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent sm:block" />
      <span className="hero-float hero-float-delay-2 absolute right-[38%] top-[42%] hidden h-px w-12 -rotate-12 bg-gradient-to-r from-transparent via-accent-green/35 to-transparent md:block" />

      <div className="hero-orbit-ring absolute left-1/2 top-1/2 h-[min(90vw,36rem)] w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/30" />
      </div>
    </div>
  );
}

function HeroDashboard() {
  const bars = [52, 78, 45, 92, 63];
  return (
    <div className="hero-float-alt relative mx-auto w-full max-w-md">
      <Reveal
        variant="fade-in"
        immediate
        delay={400}
        className="hero-float hero-float-delay-1 absolute -right-2 top-8 z-10 hidden w-20 sm:block"
      >
        <div
          className="rounded-2xl border border-accent-blue/30 bg-gradient-to-br from-accent-blue/25 to-accent-blue/5 p-2 shadow-2xl shadow-accent-blue/20 backdrop-blur-sm"
          aria-hidden
        >
          <div className="flex h-12 items-end justify-center gap-1 px-1">
            <span className="h-3 w-1.5 rounded-sm bg-accent-green" />
            <span className="h-5 w-1.5 rounded-sm bg-accent-blue" />
            <span className="h-2 w-1.5 rounded-sm bg-white/60" />
          </div>
        </div>
      </Reveal>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-5 shadow-2xl shadow-black/40 ring-1 ring-white/5">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <div className="mb-6 flex h-40 items-end justify-between gap-2 rounded-2xl border border-white/5 bg-black/30 px-4 pb-3 pt-6">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`reveal-bar-grow w-full max-w-[3rem] rounded-t-lg ${
                i % 2 === 0
                  ? "bg-gradient-to-t from-accent-blue/20 to-accent-blue"
                  : "bg-gradient-to-t from-accent-green/20 to-accent-green"
              }`}
              style={{
                height: `${h}%`,
                animationDelay: `${300 + i * 60}ms`,
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
            <p className="text-xs font-medium text-text-muted">Revenue</p>
            <p className="mt-1 font-display text-xl font-bold text-text">
              $124k
            </p>
            <p className="mt-1 text-xs font-semibold text-accent-green">
              +12.5%
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
            <p className="text-xs font-medium text-text-muted">Growth</p>
            <p className="mt-1 font-display text-xl font-bold text-text">
              +89%
            </p>
            <p className="mt-1 text-xs font-semibold text-accent-blue">
              +5.2%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8"
    >
      <HeroAmbient />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="relative">
          <span
            className="hero-float hero-float-delay-2 pointer-events-none absolute -left-4 top-8 hidden h-14 w-14 rounded-2xl border border-accent-green/25 bg-accent-green/10 lg:block"
            aria-hidden
          />
          <span
            className="hero-float-alt pointer-events-none absolute -right-2 bottom-16 hidden h-10 w-10 rounded-full border border-accent-blue/30 bg-accent-blue/10 md:block"
            aria-hidden
          />
          <Reveal variant="fade-up" immediate delay={0}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-[3.25rem]">
              {hero.titleBefore}{" "}
              <span className="bg-gradient-to-r from-accent-blue to-sky-300 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>
          </Reveal>
          <Reveal variant="fade-up" immediate delay={80}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal variant="fade-up" immediate delay={160}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group interactive-lift inline-flex items-center gap-2 rounded-2xl bg-accent-green px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-accent-green/25 hover:shadow-accent-green/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
              >
                {hero.primaryCta}
                <ArrowRightIcon className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="interactive-lift inline-flex items-center gap-2 rounded-2xl border border-accent-blue/50 bg-transparent px-6 py-3.5 text-base font-semibold text-accent-blue hover:border-accent-blue hover:bg-accent-blue/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
              >
                <PlayIcon className="opacity-90" />
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal variant="scale-in" immediate delay={200} className="relative">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
