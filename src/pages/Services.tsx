import { motion } from "framer-motion";

const services = [
  {
    title: "Fractional CTO and technical advisory",
    description:
      "Senior guidance for teams that need architecture clarity, product judgment, and a stronger technical plan before delivery gets expensive.",
    features: ["Technology strategy", "Architecture direction", "Roadmap clarity", "Technical due diligence"],
  },
  {
    title: "Platform and product engineering",
    description:
      "Design and build content-rich platforms, operational systems, and practical intelligent features with durable architecture at the core.",
    features: ["Platform architecture", "Workflow systems", "Product delivery", "Custom integrations"],
  },
  {
    title: "Research and prototype sprints",
    description:
      "Focused exploration for new product ideas, internal tools, and emerging technical directions so teams can test concepts early and reduce delivery risk.",
    features: ["Prototype sprints", "Technical spikes", "Feasibility work", "Experiment design"],
  },
  {
    title: "Platform architecture and delivery systems",
    description:
      "Cloud environments, release workflows, and system design built to support reliability, maintainability, and long-term change.",
    features: ["Cloud architecture", "Delivery workflows", "Containerized environments", "Operational reliability"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Services designed to reduce risk, sharpen direction, and strengthen delivery.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            109.studio helps founders, technical teams, and agency partners make better product and platform decisions, build stronger systems, and explore new ideas without losing delivery discipline.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{service.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={feature} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
