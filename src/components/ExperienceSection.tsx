import { motion } from "framer-motion";

const experienceAreas = [
  {
    number: "01",
    title: "Platform modernization",
    description:
      "Modernizing mission-critical platforms through cloud migration, platform architecture, delivery improvements, and systems designed for long-term change.",
  },
  {
    number: "02",
    title: "AI-augmented engineering",
    description:
      "Using modern AI workflows, rapid prototyping, and practical intelligent automation to move from ambiguous ideas to working systems with stronger feedback loops.",
  },
  {
    number: "03",
    title: "Team enablement and developer experience",
    description:
      "Creating reusable tooling, documentation, development workflows, and stronger delivery practices so teams gain velocity without losing maintainability.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-t border-border py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Selected Experience</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            Proof shaped by complex platforms, technical leadership, and modern delivery systems.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The work spans public-sector modernization, product architecture, AI-enabled delivery, and team systems built to support real-world change.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {experienceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[80px_minmax(0,320px)_1fr] md:gap-8 md:py-12"
            >
              <div className="font-mono text-sm text-text-dim">{area.number}</div>
              <h3 className="font-mono text-2xl font-semibold tracking-tight">{area.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
