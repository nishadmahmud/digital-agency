"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion-prefs";

function parseValue(value) {
  const match = String(value).match(/^([^0-9]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: String(value), decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix,
    number: parseFloat(numStr),
    suffix,
    decimals,
  };
}

function formatNumber(n, decimals) {
  return decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
}

export function CountUp({
  value,
  duration = 1200,
  className = "",
  as: Tag = "span",
}) {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const { prefix, number: target, suffix, decimals } = parsed;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          setDisplay(
            `${prefix}${formatNumber(current, decimals)}${suffix}`
          );
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, prefersReducedMotion, parsed]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
