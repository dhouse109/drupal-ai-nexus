import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            About
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            109.studio exists to keep strategy, experimentation, and implementation connected
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            The studio helps founders, technical teams, and agency partners make better product
            and platform decisions by combining senior technical leadership, applied research and
            development, and hands-on delivery.
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
              Better software decisions happen when the thinking stays close to the build
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Too many organizations separate strategy from implementation and experimentation from
              delivery. 109.studio was built to close that gap.
            </p>
            <p>
              The practice combines product thinking, platform architecture, rapid prototyping, and
              reusable engineering systems so teams can test ideas earlier, reduce delivery risk,
              and make better technical decisions before the work gets expensive.
            </p>
            <p>
              That usually leads to projects that are better scoped, easier to operate, and more
              prepared for change over time.
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
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
              Damien House
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Principal architect, fractional CTO, and engineering leader focused on platforms,
              product delivery, and applied AI work.
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Damien brings more than two decades of experience across startups, agencies, and
              complex public-sector platforms. His work spans platform modernization, delivery
              systems, Drupal architecture, product thinking, team leadership, and emerging AI
              workflows.
            </p>
            <p>
              What tends to matter most to clients is that he can move between executive judgment
              and hands-on execution without losing the thread. That might mean helping a founder
              make the right technical call early, then getting into architecture, workflows, or
              implementation details as the work takes shape.
            </p>
            <p>
              109.studio reflects that same approach: thoughtful where the work is ambiguous,
              rigorous where the work needs to hold up, and focused on building systems that
              improve how teams deliver over time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
