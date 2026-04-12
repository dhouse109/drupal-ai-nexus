import { motion } from "framer-motion";

const experienceAreas = [
  {
    number: "01",
    title: "Platform modernization",
    description:
      "Modernizing high-stakes platforms through cloud migration, architecture work, delivery improvements, and systems designed to stay useful as requirements change.",
  },
  {
    number: "02",
    title: "Applied AI in product and delivery work",
    description:
      "Using AI where it improves the product, the workflow, or the speed of execution, while keeping the work observable, reviewable, and grounded in real operating conditions.",
  },
  {
    number: "03",
    title: "Team enablement and developer experience",
    description:
      "Building reusable tooling, documentation, development environments, and delivery practices that help teams gain velocity without giving up maintainability.",
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
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Selected experience
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            Experience shaped by platform modernization, applied AI work, and technical leadership
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The work spans public-sector modernization, product architecture, AI-enabled delivery,
            and the internal systems teams need to release software reliably over time.
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
