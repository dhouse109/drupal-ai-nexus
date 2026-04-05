import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight, Github, Mail } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Drupal AI", to: "/drupal-ai" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "font-mono text-xs uppercase tracking-[0.3em] transition-colors",
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
  ].join(" ");

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <NavLink to="/" className="font-mono text-lg font-bold tracking-tight">
            <span className="text-primary">109</span>
            <span className="text-foreground">.studio</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
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
            className="md:hidden text-foreground"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-5 py-6">
              {navItems.map((item) => (
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
        <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-mono text-lg font-bold tracking-tight mb-4">
              <span className="text-primary">109</span>
              <span className="text-foreground">.studio</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              109.studio is a Drupal and AI focused product engineering practice built around senior technical direction, practical R&amp;D, and open-source minded delivery.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground">Navigation</h3>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" end={item.to === "/"}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground">Connect</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@109.studio" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" />
                hello@109.studio
              </a>
              <a
                href="https://github.com/dhouse109/drupal-ai-nexus"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
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
