import { ArrowRight, Bot, Code2, Github, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const supportAreas = [
  {
    icon: Bot,
    title: "AI-enabled content and workflow systems",
    description:
      "Patterns for generation, summarization, classification, and editorial support that fit real publishing and governance environments.",
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description:
      "Discovery experiences that combine structured content, retrieval, and AI-assisted querying in ways teams can maintain.",
  },
  {
    icon: Workflow,
    title: "AI-assisted platform delivery",
    description:
      "Developer workflows, implementation experiments, and delivery patterns that help teams move faster while keeping the work reviewable and maintainable.",
  },
  {
    icon: Code2,
    title: "Reusable assets and starter systems",
    description:
      "Starter systems, documentation, and tooling that support stronger reuse across client work, internal R&D, and partner collaboration.",
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
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            Applied AI
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Practical AI work for Drupal teams, content platforms, and modern delivery environments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio explores how AI can improve content systems, delivery workflows, search,
            and platform strategy in ways that are useful to real teams working with Drupal.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Primary focus
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Applied AI for teams working in complex content and platform environments
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              The focus here is not AI for its own sake. It is how AI can support real platform
              work: better publishing workflows, stronger search, more useful internal tooling,
              and delivery systems that help teams move with more confidence.
            </p>
            <p>
              This work looks at how structured content, publishing operations, retrieval, and
              intelligent features can reinforce each other inside active Drupal environments.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Current areas of work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Where 109.studio is actively building, testing, and refining patterns
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {supportAreas.map((area) => (
              <div key={area.title} className="bg-background p-8 md:p-10">
                <area.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              How the work is approached
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Built for live delivery environments, not just isolated demos
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The goal is to help teams adopt AI where it improves the product, the workflow, or
              the speed of execution without making the platform harder to trust or operate.
            </p>
          </div>
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Likely outputs
            </span>
            <div className="space-y-3">
              {outputs.map((item) => (
                <div
                  key={item}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Want to see where this becomes concrete?
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
                See the practical patterns behind the applied AI work
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                The AI in Practice page shows the kinds of workflow, search, and delivery problems
                this work is meant to improve.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                to="/ai-in-practice"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                See AI in practice
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Collaboration
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Interested in working together in the Drupal AI space?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is interested in working with agencies, technical teams, and
              community-aligned partners exploring how AI can improve platform delivery, content
              systems, and Drupal development workflows.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Discuss a collaboration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/dhouse109/drupal-ai-nexus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                View the repo
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
