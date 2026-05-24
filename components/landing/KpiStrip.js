import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { kpis } from "@/content/landing";

function accentClass(accent) {
  if (accent === "green") return "text-accent-green";
  return "text-accent-blue";
}

export function KpiStrip() {
  return (
    <section
      className="border-b border-white/[0.06] px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="kpi-heading"
    >
      <h2 id="kpi-heading" className="sr-only">
        Key metrics
      </h2>
      <Reveal variant="fade-up" className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 shadow-inner backdrop-blur-md sm:px-12">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-[70px]"
          aria-hidden
        />
        <div className="relative grid gap-10 sm:grid-cols-3">
          {kpis.map((k) => (
            <div key={k.label} className="text-center sm:text-left">
              <CountUp
                value={k.value}
                className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${accentClass(k.accent)}`}
              />
              <p className="mt-2 text-sm font-medium text-text-muted">
                {k.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
