/** Distinctive mark: gradient tile + pixel grid / accent nodes — not a plain letter. */
export function BrandMark({
  className = "h-9 w-9",
  /** Unique per instance (header vs footer) to avoid duplicate SVG gradient ids. */
  idPrefix = "brand",
}) {
  const g1 = `${idPrefix}-logo-surface`;
  const g2 = `${idPrefix}-logo-shine`;

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={g1}
          x1="6"
          y1="4"
          x2="34"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0ea5e9" />
          <stop offset="0.45" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${g1})`} />
      <rect width="40" height="40" rx="11" fill={`url(#${g2})`} />
      {/* Pixel grid — digital / product feel */}
      <g opacity="0.92">
        <rect x="10" y="10" width="7.5" height="7.5" rx="2" fill="white" />
        <rect
          x="19.25"
          y="10"
          width="7.5"
          height="7.5"
          rx="2"
          fill="white"
          opacity="0.42"
        />
        <rect
          x="10"
          y="19.25"
          width="7.5"
          height="7.5"
          rx="2"
          fill="white"
          opacity="0.42"
        />
        <rect
          x="19.25"
          y="19.25"
          width="11.75"
          height="11.75"
          rx="2.5"
          fill="#ecfdf5"
        />
        <rect
          x="23.5"
          y="23.5"
          width="3.5"
          height="3.5"
          rx="1"
          fill="#22c55e"
        />
      </g>
      {/* Orbit accent */}
      <circle cx="31" cy="31" r="2.25" fill="#22c55e" opacity="0.95" />
      <path
        d="M28 11c5.5 1.2 9 5 9 9.5"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Wordmark: Syne (font-logo) — split “Digital” / “Agency” for clearer hierarchy.
 */
export function BrandLogo({
  href = "#home",
  label = "Digital Agency",
  idPrefix = "site",
  className = "",
  markClassName = "h-9 w-9 shrink-0 drop-shadow-[0_8px_24px_rgba(14,165,233,0.28)]",
}) {
  const parts = label.trim().split(/\s+/);
  const primary = parts[0] ?? label;
  const secondary = parts.slice(1).join(" ");

  const content = (
    <>
      <BrandMark idPrefix={idPrefix} className={markClassName} />
      <span className="flex min-w-0 flex-col leading-[1.05]">
        <span className="font-logo text-[0.9375rem] font-extrabold tracking-[-0.04em] text-text sm:text-base">
          {primary}
        </span>
        {secondary ? (
          <span className="font-logo mt-[0.2em] text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-400/95 sm:text-[0.68rem]">
            {secondary}
          </span>
        ) : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group flex items-center gap-2.5 rounded-lg outline-none transition hover:opacity-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={`flex items-center gap-2.5 ${className}`}
    >
      {content}
    </div>
  );
}
