import { ArrowRight, Bot, Code2, Github, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const supportAreas = [
  {
    icon: Bot,
    title: "Editorial support inside Drupal workflows",
    description:
      "Summaries, metadata suggestions, and drafting support that live inside moderation and publishing flows instead of outside the CMS.",
  },
  {
    icon: Network,
    title: "Retrieval over structured Drupal content",
    description:
      "Search and answer experiences built on content models, taxonomy, Search API, and retrieval patterns that actually use Drupal's structure.",
  },
  {
    icon: Workflow,
    title: "Delivery support in a Drupal team's CI",
    description:
      "PR summaries, release notes, regression checks, and support tooling around deploys, tickets, and handoffs.",
  },
  {
    icon: Code2,
    title: "Reusable Drupal starter patterns",
    description:
      "Reference implementations, starter assets, and documentation a team can adapt instead of rebuilding the same pattern from scratch.",
  },
];

const outputs = [
  "Editorial workflow prototypes",
  "Retrieval and Search API experiments",
  "Delivery support tooling",
  "Reference implementations and docs",
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
            Drupal AI
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Where AI fits inside a Drupal platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio looks at AI in the places Drupal teams actually operate: editorial workflows, structured content and search, and delivery support around releases.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Drupal-specific patterns
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Start with the content model, editorial workflow, and release process
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              This page is the Drupal-specific layer. The useful work usually starts with the structure already in the system: content types, taxonomy, moderation states, search setup, and the team&apos;s actual publishing process.
            </p>
            <p>
              The same goes for delivery. A Drupal team already has a release path, review process, and CI shape. AI should support those operating conditions instead of pretending they do not exist.
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
              Four ways this work tends to show up in Drupal
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
              Built around real Drupal operating conditions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The useful work usually depends on the shape of the content model, the moderation flow, the search configuration, and the deploy process already in place. That is what makes it different from a generic demo.
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
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Broader patterns
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                See the general workflow patterns behind this work
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                AI in Practice shows the broader workflow patterns this Drupal-specific work belongs to.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/ai-in-practice"
                className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                See AI in practice
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
              Exploring Drupal-specific AI work?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is interested in working with agencies, technical teams, and community-aligned partners exploring editorial workflows, structured content retrieval, and delivery support patterns inside Drupal.
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
