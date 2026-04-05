import { motion } from "framer-motion";
import { ArrowRight, Github, Network, Workflow, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Workflow,
    title: "Reusable workflow patterns",
    description:
      "Editorial, operations, and delivery patterns that turn repeated project lessons into stronger systems teams can actually reuse.",
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description:
      "Practical approaches to discovery, retrieval, and structured content that combine Drupal strengths with useful AI capabilities.",
  },
  {
    icon: Code2,
    title: "Developer tooling and acceleration",
    description:
      "Starter systems, integration scaffolding, and delivery improvements that help teams move faster with better defaults and less friction.",
  },
];

const LabSection = () => {
  return (
    <section id="opensource" className="relative border-t border-border py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10">
        <div className="grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Open Source and Labs</span>
            <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Open source is part of the operating model,
              <br />
              not a side project.
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              109.studio turns research, experiments, and delivery lessons into reusable assets that strengthen both client work and the broader ecosystem. The lab keeps the practice sharp while creating patterns, starter systems, and tooling that make future work faster and more durable.
            </p>
            <Link to="/drupal-ai" className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary">
              <Github className="h-4 w-4" />
              <span>Explore the lab</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {areas.map((area) => (
              <div key={area.title} className="border border-border bg-background p-6 transition-all hover:border-primary/40 hover:bg-surface">
                <area.icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
