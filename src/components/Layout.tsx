import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { useSafeCtaTarget } from "@/lib/cta";
import { getAllProjects, getFeaturedProject } from "@/data/projects";
import { getNonFeaturedArticles } from "@/data/insights";

const headerNavItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "How We Help", to: "/services" },
  { label: "Offerings", to: "/offerings" },
  { label: "Applied AI", to: "/applied-ai" },
  { label: "Portfolio", to: "/portfolio" },
];

const footerNavItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "How We Help", to: "/services" },
  { label: "Offerings", to: "/offerings" },
  { label: "Applied AI", to: "/applied-ai" },
  { label: "Contact", to: "/contact" },
];

const buildFooterWorkLinks = () => {
  const featured = getFeaturedProject();
  const others = getAllProjects()
    .filter((p) => p.slug !== featured?.slug)
    .slice(0, 2);
  const projectLinks = [featured, ...others]
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ label: p.detail.cardTitle, to: `/portfolio/${p.slug}` }));
  return [{ label: "All projects", to: "/portfolio" }, ...projectLinks];
};

const buildFooterWritingLinks = () => {
  const articles = getNonFeaturedArticles().slice(0, 2);
  return [
    { label: "All insights", to: "/insights" },
    ...articles.map((a) => ({ label: a.title, to: `/insights/${a.slug}` })),
  ];
};

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "font-mono text-xs uppercase tracking-[0.3em] transition-colors",
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
  ].join(" ");

const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  // Note: header "Start a conversation" CTA stays visible on /contact for visual consistency.
  // Only the footer card is hidden on /contact (handled below via isContactPage).

  const servicesCta = useSafeCtaTarget("/services", "See how 109 helps", {
    label: "See starting points",
    to: "/offerings",
  });
  const secondaryCtaOverrides: Record<string, { label: string; to: string }> = {
    "/architecture-audit": { label: "See starting points", to: "/offerings" },
    "/applied-ai": { label: "Explore Drupal AI", to: "/drupal-ai" },
    "/drupal-ai": { label: "Explore applied AI", to: "/applied-ai" },
  };
  const secondaryCta = secondaryCtaOverrides[location.pathname] ?? servicesCta;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-8">
          <NavLink to="/" className="shrink-0 font-mono text-lg font-bold tracking-tight">
            <span className="text-primary">109</span>
            <span className="text-foreground">.studio</span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {headerNavItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </nav>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-5 py-6">
              {headerNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-border py-14">
        {!isContactPage && (
          <div className="container mb-12 border border-border bg-surface p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Next step</span>
                <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                  Have a system, a platform, or a decision you want a senior read on?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  A short note is enough. Damien reviews each inquiry personally and will suggest the clearest next step.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Start a conversation
                  <ArrowRight className="h-3.5 w-3.5" />
                </NavLink>
                <NavLink
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
                >
                  {secondaryCta.label}
                </NavLink>
              </div>
            </div>
          </div>
        )}

        <div className="container grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <div className="mb-4 font-mono text-lg font-bold tracking-tight">
              <span className="text-primary">109</span>
              <span className="text-foreground">.studio</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              109.studio is a principal-led practice for platform architecture, product engineering, and applied AI.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground">Navigation</h3>
            <div className="flex flex-col gap-3">
              {footerNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground">Proof & Ideas</h3>
            <div className="flex flex-col gap-3">
              {footerProofIdeas.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground">Connect</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@109.studio"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                hello@109.studio
              </a>
              <a
                href="https://www.linkedin.com/company/109studio"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/109studio"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@109studiotube"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="container mt-10 border-t border-border pt-6 text-xs text-text-dim">
          © {new Date().getFullYear()} 109.studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
