import { motion } from "framer-motion";
import { ArrowRight, Network, Workflow, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Workflow,
    title: "Reusable workflow patterns",
    description:
      "Editorial, operational, and delivery patterns shaped by real project work and refined into systems other teams can reuse.",
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description:
      "Practical approaches to discovery, structured content, and AI-assisted querying that build on Drupal's strengths.",
  },
  {
    icon: Code2,
    title: "Developer tooling and acceleration",
    description:
      "Starter systems, integration scaffolding, and delivery improvements that help teams move faster with better defaults.",
  },
];

const LabSection = () => {
  return (
    <section id="opensource" className="relative border-t border-border py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10">
        <div className="grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Labs and open source
            </span>
            <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Research and open source keep the work sharper
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              109.studio turns experiments, delivery lessons, and internal patterns into reusable
              assets. Some of that becomes tooling. Some becomes documentation. Some becomes a
              better starting point for future work. The point is to keep learning in public and
              make the work more durable over time.
            </p>
            <Link
              to="/drupal-ai"
              className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary"
            >
              <span>Explore Drupal AI</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {areas.map((area) => (
              <div
                key={area.title}
                className="border border-border bg-background p-6"
              >
                <area.icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
