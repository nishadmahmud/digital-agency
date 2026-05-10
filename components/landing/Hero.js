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

function HeroDashboard() {
  const bars = [52, 78, 45, 92, 63];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -right-2 top-8 z-10 hidden w-20 rounded-2xl border border-accent-blue/30 bg-gradient-to-br from-accent-blue/25 to-accent-blue/5 p-2 shadow-2xl shadow-accent-blue/20 backdrop-blur-sm sm:block"
        aria-hidden
      >
        <div className="flex h-12 items-end justify-center gap-1 px-1">
          <span className="h-3 w-1.5 rounded-sm bg-accent-green" />
          <span className="h-5 w-1.5 rounded-sm bg-accent-blue" />
          <span className="h-2 w-1.5 rounded-sm bg-white/60" />
        </div>
      </div>
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
              className={`w-full max-w-[3rem] rounded-t-lg ${
                i % 2 === 0
                  ? "bg-gradient-to-t from-accent-blue/20 to-accent-blue"
                  : "bg-gradient-to-t from-accent-green/20 to-accent-green"
              }`}
              style={{ height: `${h}%` }}
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
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-blue/15 blur-[100px]" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-accent-green/10 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-[3.25rem]">
            {hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-accent-blue to-sky-300 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-accent-green px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-accent-green/25 transition hover:-translate-y-0.5 hover:shadow-accent-green/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            >
              {hero.primaryCta}
              <ArrowRightIcon className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl border border-accent-blue/50 bg-transparent px-6 py-3.5 text-base font-semibold text-accent-blue transition hover:border-accent-blue hover:bg-accent-blue/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
            >
              <PlayIcon className="opacity-90" />
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
