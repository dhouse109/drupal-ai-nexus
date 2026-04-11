import { motion } from "framer-motion";
import { Workflow, Blocks, GitFork } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Fractional CTO and technical advisory",
    description:
      "Senior guidance for teams that need clearer architecture, stronger technical judgment, and a better plan before delivery gets more expensive.",
    tags: ["Strategy", "Architecture", "Roadmaps"],
  },
  {
    icon: Blocks,
    title: "Platform and product engineering",
    description:
      "Design and build content-rich platforms, delivery systems, and intelligent features with maintainability and long-term change in mind.",
    tags: ["Platforms", "Workflows", "Integrations"],
  },
  {
    icon: GitFork,
    title: "Research and prototype sprints",
    description:
      "Explore new product ideas, internal tools, and technical directions in a focused way before committing to a larger build.",
    tags: ["Prototypes", "Feasibility", "Experiments"],
  },
];

const FocusSection = () => {
  return (
    <section id="focus" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            How 109.studio helps
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            A few ways 109 typically plugs into the work
          </h2>
        </motion.div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background p-8 md:p-10"
            >
              <service.icon className="mb-6 h-8 w-8 text-primary" />
              <h3 className="mb-4 font-mono text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
