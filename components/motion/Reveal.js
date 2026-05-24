"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion-prefs";

const VARIANT_CLASSES = {
  "fade-up": {
    pending: "reveal-fade-up",
    animate: "reveal-animate-fade-up",
  },
  "fade-in": {
    pending: "",
    animate: "reveal-animate-fade-in",
  },
  "scale-in": {
    pending: "reveal-scale-in",
    animate: "reveal-animate-scale-in",
  },
  "fade-up-fast": {
    pending: "reveal-fade-up",
    animate: "reveal-animate-fade-up-fast",
  },
};

export function Reveal({
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  immediate = false,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const visible = immediate || prefersReducedMotion || inView;

  useEffect(() => {
    if (immediate || prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, prefersReducedMotion]);

  const variantConfig = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES["fade-up"];
  const animationDelay = delay > 0 ? `${delay}ms` : undefined;

  const classes = [
    visible ? "reveal-visible" : "reveal-pending",
    immediate || prefersReducedMotion ? "reveal-immediate" : "",
    variantConfig.pending,
    visible ? variantConfig.animate : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ ...style, animationDelay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
