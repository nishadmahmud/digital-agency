import { BrandLogo } from "@/components/BrandLogo";
import { Reveal } from "@/components/motion/Reveal";
import { nav } from "@/content/landing";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg-deep/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-deep/65">
      <Reveal
        as="div"
        variant="fade-in"
        immediate
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <BrandLogo
          href="#home"
          label={nav.brand}
          idPrefix="header"
          className="min-w-0"
        />
        <nav
          aria-label="Primary"
          className="-mx-2 flex max-w-[55%] flex-1 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap px-2 text-xs sm:max-w-none sm:gap-6 sm:text-sm md:gap-8"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 font-medium text-text-muted transition-colors hover:text-text focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="interactive-lift rounded-xl bg-accent-green px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-accent-green/20 hover:shadow-accent-green/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green sm:px-4 sm:py-2.5 sm:text-sm"
          >
            {nav.cta}
          </a>
        </div>
      </Reveal>
    </header>
  );
}
