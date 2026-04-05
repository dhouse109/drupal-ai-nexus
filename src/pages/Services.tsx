import { motion } from "framer-motion";

const services = [
  {
    title: "Drupal AI Advisory",
    description:
      "Senior technical guidance for teams that need architecture clarity, product judgment, and a stronger plan before delivery gets expensive.",
    features: ["Technology strategy", "Architecture direction", "Roadmap clarity", "Technical due diligence"],
  },
  {
    title: "Drupal and AI Product Engineering",
    description:
      "Design and build content-rich platforms, editorial systems, and intelligent workflows with Drupal at the core and AI applied where it creates real value.",
    features: ["Drupal architecture", "Intelligent workflows", "Platform builds", "Custom integrations"],
  },
  {
    title: "Research and Prototype Sprints",
    description:
      "Focused exploration for new product ideas, internal tools, and emerging technical directions so teams can test concepts early and reduce delivery risk.",
    features: ["Prototype sprints", "Technical spikes", "Feasibility work", "Experiment design"],
  },
  {
    title: "Platform Architecture and DevOps",
    description:
      "Cloud environments, delivery pipelines, and system design built to support reliability, maintainability, and long-term growth.",
    features: ["Cloud architecture", "CI/CD workflows", "Containerized environments", "Operational reliability"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative border-b border-border py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Services designed to bring clarity to product decisions and depth to technical execution.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            109.studio helps founders, technical teams, and agency partners make better technical decisions, build stronger Drupal platforms, and explore new ideas without losing delivery discipline.
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
