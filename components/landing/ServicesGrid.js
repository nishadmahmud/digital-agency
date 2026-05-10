import { highlightStats, services } from "@/content/landing";

function ServiceIcon({ type, variant }) {
  const box =
    variant === "green"
      ? "bg-gradient-to-br from-accent-green/30 to-accent-green/10 text-accent-green ring-accent-green/25"
      : "bg-gradient-to-br from-accent-blue/30 to-accent-blue/10 text-accent-blue ring-accent-blue/25";
  const paths = {
    chart: (
      <path
        d="M6 14v-4m4 6V8m4 4v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    video: (
      <>
        <rect
          x="4"
          y="7"
          width="12"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M15 10 18 8v8l-3-2" fill="currentColor" />
      </>
    ),
    palette: (
      <>
        <ellipse cx="10" cy="9" rx="5" ry="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
        <circle cx="12" cy="11" r="1.2" fill="currentColor" />
      </>
    ),
    code: (
      <path
        d="M7 7 4 10l3 3m6-6 3 3-3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ${box}`}
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        {paths[type]}
      </svg>
    </span>
  );
}

function statAccent(c) {
  if (c === "green") return "text-accent-green";
  return "text-accent-blue";
}

export function ServicesGrid() {
  return (
    <div className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-accent-blue/30 hover:shadow-xl"
            >
              <ServiceIcon type={s.icon} variant={s.iconVariant} />
              <h3 className="mt-5 font-display text-lg font-bold text-text">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {s.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center text-sm font-semibold text-accent-blue transition group-hover:gap-1.5"
              >
                {s.link}{" "}
                <span aria-hidden className="inline transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlightStats.map((h) => (
            <div
              key={h.subhead}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition hover:border-white/15"
            >
              <p
                className={`font-display text-4xl font-extrabold tracking-tight ${statAccent(h.accent)}`}
              >
                {h.headline}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-text">
                {h.subhead}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
