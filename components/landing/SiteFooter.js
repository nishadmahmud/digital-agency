import { BrandLogo } from "@/components/BrandLogo";
import { Reveal } from "@/components/motion/Reveal";
import { footer } from "@/content/landing";

function SocialIcon({ name }) {
  const paths = {
    Facebook: (
      <path
        fill="currentColor"
        d="M13.5 22v-8.2h2.7l.5-3.2H13.5V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H6.5v3.2h3.3V22h3.7Z"
      />
    ),
    Twitter: (
      <path
        fill="currentColor"
        d="M18.22 4h3.2l-7 8.2L22.3 20h-6l-4.7-6.1L6.7 20H3.5l7.5-8.7L3 4h6.2l4.2 5.5L18.22 4Z"
      />
    ),
    Instagram: (
      <>
        <path
          fill="currentColor"
          d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.12 3.12 0 0 1 12 15.1Z"
        />
        <path
          fill="currentColor"
          d="M16.6 6.5a1.12 1.12 0 1 1-1.1-1.12 1.12 1.12 0 0 1 1.1 1.12Z"
        />
        <path
          fill="currentColor"
          d="M16.9 2h-9.8A5.12 5.12 0 0 0 2 7.1v9.8A5.12 5.12 0 0 0 7.1 22h9.8a5.12 5.12 0 0 0 5.1-5.1V7.1A5.12 5.12 0 0 0 16.9 2ZM20 16.9a3.13 3.13 0 0 1-3.1 3.1H7.1A3.13 3.13 0 0 1 4 16.9V7.1A3.13 3.13 0 0 1 7.1 4h9.8A3.13 3.13 0 0 1 20 7.1Z"
        />
      </>
    ),
    LinkedIn: (
      <path
        fill="currentColor"
        d="M6.5 8.7H3.2V20h3.3V8.7ZM4.9 3.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20 13.3c0-2.4-.5-4.3-3.3-4.3-1.3 0-2.2.7-2.6 1.4h-.1V9H11v11h3.2v-5.5c0-1.4.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8V20h3.3v-6.2Z"
      />
    ),
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      {paths[name]}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <BrandLogo
                href="#home"
                label={footer.brand}
                idPrefix="footer"
                markClassName="h-9 w-9 shrink-0 drop-shadow-[0_6px_20px_rgba(14,165,233,0.22)]"
              />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-muted">
                {footer.about}
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-text">
                {footer.services.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-text-muted">
                {footer.services.links.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-text">
                {footer.support.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footer.support.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={
                        link.highlight
                          ? "font-medium text-text transition hover:text-accent-blue"
                          : "text-text-muted transition hover:text-text"
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-text">
                {footer.connect.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {footer.connect.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="interactive-scale inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-muted hover:border-white/20 hover:bg-white/10 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                  >
                    <SocialIcon name={s.label} />
                  </a>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-text-muted">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-accent-blue"
                  aria-hidden
                >
                  <path
                    d="M4 6a2 2 0 0 1 2-2h2.5l1 2H18a2 2 0 0 1 2 2v1.5M4 6v12a2 2 0 0 0 2 2h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <a
                  href={`mailto:${footer.connect.newsletterEmail}`}
                  className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                >
                  {footer.connect.newsletterEmail}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
