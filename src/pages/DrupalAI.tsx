import { ArrowRight, Bot, Code2, Github, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const supportAreas = [
  {
    icon: Bot,
    title: "AI-enabled content and workflow systems",
    description: "Patterns for generation, summarization, classification, and structured support that fit real publishing, governance, and editorial environments.",
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description: "Discovery experiences that combine structured content, retrieval, and AI-assisted querying in practical ways teams can maintain.",
  },
  {
    icon: Workflow,
    title: "AI-assisted platform delivery",
    description: "Developer workflows, implementation experiments, and delivery patterns that help teams move faster with stronger defaults.",
  },
  {
    icon: Code2,
    title: "Reusable assets and starter systems",
    description: "Starter systems, documentation, and tooling that support stronger delivery reuse across client work, internal R and D, and partner collaboration.",
  },
];

const outputs = [
  "Workflow concepts",
  "Prototype implementations",
  "Reusable delivery patterns",
  "Shared tooling and documentation",
];

const DrupalAI = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative border-b border-border py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Drupal AI</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Practical Drupal AI work shaped by delivery, research, and reusable systems.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            109.studio explores how AI can strengthen content systems, delivery workflows, and platform strategy in ways that are useful for real teams building and modernizing with Drupal.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Primary focus</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Applied AI strategies for Drupal teams working in complex content environments.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>The focus is helping agencies, product teams, and Drupal practitioners incorporate AI in ways that are practical, maintainable, and useful inside active platform work.</p>
            <p>This work explores how structured content, publishing workflows, search, and AI capabilities can reinforce each other rather than treating Drupal and AI as separate tracks.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Support areas</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Where 109.studio is actively experimenting, refining, and contributing.
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {supportAreas.map((area) => (
              <div key={area.title} className="bg-background p-8 md:p-10">
                <area.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{area.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Delivery posture</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Built to support real platform delivery, not just exploratory theory.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The goal is to help teams adopt AI strategies in ways that are practical, maintainable, and useful inside active Drupal platform environments.
            </p>
          </div>
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Likely outputs</span>
            <div className="space-y-3">
              {outputs.map((item) => (
                <div key={item} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Collaboration</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Looking for a partner working in the Drupal AI space?</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is interested in collaborating with agencies, technical teams, and community-aligned partners exploring how AI can improve platform delivery, content systems, and Drupal development workflows.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                Discuss collaboration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://github.com/dhouse109/drupal-ai-nexus" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary">
                View repo
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrupalAI;
