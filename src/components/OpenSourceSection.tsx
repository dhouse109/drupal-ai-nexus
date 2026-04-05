import { motion } from "framer-motion";
import { ArrowRight, Github, Network, Workflow, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Workflow,
    title: "AI-enabled editorial workflows",
    description: "Patterns for generation, classification, summarization, and publishing support that work within Drupal content models and governance needs.",
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description: "Semantic search, retrieval, and discovery approaches that combine structured Drupal content with practical AI capabilities.",
  },
  {
    icon: Code2,
    title: "Developer acceleration",
    description: "Faster Drupal development, integration scaffolding, and reusable delivery patterns that help teams move with stronger defaults.",
  },
];

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="relative border-t border-border py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10">
        <div className="grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Drupal AI R and D</span>
            <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Open source is part of the practice,
              <br />
              not a side note.
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              109.studio explores how Drupal and AI can reinforce each other in practical ways, then turns the strongest ideas into reusable patterns, shared assets, and better delivery systems.
            </p>
            <Link to="/drupal-ai" className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary">
              <Github className="h-4 w-4" />
              <span>Explore Drupal AI work</span>
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

export default OpenSourceSection;
