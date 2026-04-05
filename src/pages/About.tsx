import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative border-b border-border py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            About
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            109.studio exists to connect strategy, experimentation, and execution.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We help founders, technical teams, and agency partners make stronger platform and product decisions by combining senior technical leadership, practical research and development, and hands-on delivery.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Why the studio exists
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Better software decisions happen when design, R&amp;D, and engineering stay connected.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Too many organizations separate strategic thinking from implementation and experimentation from delivery. 109.studio was built to close that gap.
            </p>
            <p>
              The practice combines product thinking, Drupal platform architecture, rapid prototyping, and reusable engineering systems so teams can test ideas earlier and build with more confidence.
            </p>
            <p>
              The result is work that is better scoped, better reasoned, and better prepared for long-term change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="border border-border bg-surface p-8">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Founder
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">Damien House</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Founder of 109.studio. Fractional CTO. Builder of platforms, prototypes, and better technical systems.
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Damien brings more than two decades of experience across startups, agencies, and complex public-sector platforms. His work spans platform modernization, DevOps transformation, team leadership, Drupal architecture, and emerging AI-native workflows.
            </p>
            <p>
              What defines his approach is the ability to move between executive-level judgment and hands-on delivery. That means helping a founder clarify the right technical path one moment, then shaping architecture, tooling, or implementation details the next.
            </p>
            <p>
              109.studio reflects that same philosophy: rigorous where it matters, flexible where it helps, and focused on building systems and practices that create real improvement rather than novelty for its own sake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
