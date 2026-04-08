import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Fractional CTO and technical advisory",
    description:
      "Senior technical leadership for teams that need clearer architecture, better product judgment, and stronger decisions around roadmap, delivery, and technical risk.",
    features: [
      "Technology strategy",
      "Architecture direction",
      "Roadmap clarity",
      "Technical due diligence",
    ],
  },
  {
    title: "Platform and product engineering",
    description:
      "Design and build content-rich platforms, operational systems, and intelligent features with architecture that can hold up under real delivery pressure.",
    features: [
      "Platform architecture",
      "Workflow systems",
      "Product delivery",
      "Custom integrations",
    ],
  },
  {
    title: "Research and prototype sprints",
    description:
      "Focused exploration for new product ideas, internal tools, or technical directions so teams can test concepts, learn quickly, and make better decisions before scaling the work.",
    features: [
      "Prototype sprints",
      "Technical spikes",
      "Feasibility work",
      "Experiment design",
    ],
  },
  {
    title: "Platform architecture and delivery systems",
    description:
      "Cloud environments, release workflows, and system design work that support reliability, maintainability, and long-term change.",
    features: [
      "Cloud architecture",
      "Delivery workflows",
      "Containerized environments",
      "Operational reliability",
    ],
  },
];

const Services = () => {
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
            How 109.studio helps
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Services built to reduce risk, sharpen direction, and strengthen delivery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps founders, technical teams, and agency partners make better product
            and platform decisions, build stronger systems, and explore new ideas without losing
            delivery discipline.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Looking for a more shaped engagement?
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                See the commercial offerings behind the broader service categories
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                If you already know you need something more defined, the offerings page lays out
                the most common ways 109.studio structures the work.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/offerings"
                className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                Review offerings
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
