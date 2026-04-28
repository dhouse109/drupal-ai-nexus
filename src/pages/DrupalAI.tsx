import { ArrowRight, Bot, FileSearch, Network, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const usefulAreas = [
  {
    icon: FileSearch,
    title: "Content operations",
    description:
      "Use AI to support summaries, metadata, alt text, classification, content audits, and editorial QA while keeping review inside the publishing workflow.",
    outcomes: ["Metadata support", "Accessibility assistance", "Reviewable editorial workflows"],
  },
  {
    icon: Network,
    title: "Search and retrieval",
    description:
      "Design RAG and semantic search patterns that work from structured Drupal content, cite useful sources, and reduce the gap between a user's question and the answer they need.",
    outcomes: ["Grounded answers", "Better discovery", "Fewer dead ends"],
  },
  {
    icon: Workflow,
    title: "Workflow and agentic support",
    description:
      "Scope AI agents around real Drupal workflows, explicit permissions, and human handoffs so automation helps the team without quietly bypassing governance.",
    outcomes: ["Scoped actions", "Human review paths", "Safer workflow support"],
  },
  {
    icon: Bot,
    title: "Delivery and modernization",
    description:
      "Use AI-assisted planning, code review, documentation, and migration support to improve delivery without treating the platform as an experiment.",
    outcomes: ["Clearer implementation plans", "Better documentation", "Lower delivery friction"],
  },
];

const startingPoints = [
  {
    title: "Drupal AI Readiness Review",
    description:
      "A focused read on whether the current content model, workflows, search layer, hosting, and governance practices can support practical AI work.",
    fit: "Best when your team knows AI may help, but needs a safer way to decide where to begin.",
  },
  {
    title: "RAG Search and Observability Retrofit",
    description:
      "A targeted improvement for content-rich Drupal sites where users need better answers and teams need visibility into AI behavior, cost, and quality.",
    fit: "Best when search quality, discovery, or support load is the pressure point.",
  },
  {
    title: "AI Content Operations Accelerator",
    description:
      "A practical engagement for editorial teams dealing with metadata, alt text, classification, content debt, accessibility support, or review backlog.",
    fit: "Best when manual content operations are absorbing too much time.",
  },
  {
    title: "Agentic Drupal Workflow Sprint",
    description:
      "A scoped sprint for testing an AI-assisted workflow inside Drupal, with defined action boundaries, review paths, and release criteria.",
    fit: "Best when you want to test one workflow before scaling automation further.",
  },
  {
    title: "AI-Ready Drupal Migration",
    description:
      "A modernization path that treats a Drupal upgrade or rebuild as the moment to improve structure, delivery, governance, and AI readiness together.",
    fit: "Best when migration work is already on the table and AI capability should not be bolted on later.",
  },
];

const initiativeCommitments = [
  "Build and document Drupal AI patterns in public where possible",
  "Explore RAG, AI observability, guardrails, MCP, and human-in-the-loop workflows",
  "Contribute issues, documentation, examples, or implementation notes as the practice matures",
  "Help clients adopt community-maintained Drupal capabilities instead of fragile one-off wrappers",
];

const proofItems = [
  {
    title: "Deep Drupal platform experience",
    description:
      "More than 20 years of platform engineering work, including Drupal modernization, custom modules, structured content, search, accessibility, and delivery systems.",
  },
  {
    title: "Principal-led architecture judgment",
    description:
      "The work is led directly by Damien, connecting strategy, implementation, governance, and delivery decisions in one engagement.",
  },
  {
    title: "Applied AI tied to real workflows",
    description:
      "AI is treated as part of content operations, discovery, delivery, and workflow support rather than a detached feature sitting outside the platform.",
  },
  {
    title: "Open-source and R&D mindset",
    description:
      "The practice is shaped around learning in public, reusable patterns, and contribution paths that make the work more durable over time.",
  },
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
            Practical AI work for Drupal platforms, content teams, and agencies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps Drupal teams apply AI where it can improve content operations, search, editorial workflows,
            platform delivery, and user guidance without making the system harder to trust or maintain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Drupal AI conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/architecture-audit"
              className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
            >
              See the 2-Week Audit
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Why Drupal matters
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Drupal already has many of the control surfaces AI needs
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Drupal is useful for AI because it is already built around structured content, roles, permissions,
              revisions, workflows, taxonomies, and editorial governance. Those are the same surfaces teams need when AI
              has to support real work instead of sitting outside the platform.
            </p>
            <p>
              The goal is to use that foundation carefully: connect AI to the parts of the system that already have
              ownership, review paths, and operating rules. That makes the work easier to inspect, improve, and maintain
              after the first experiment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Where AI becomes useful
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Start with the Drupal work your team already owns
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The strongest opportunities usually sit inside existing content, search, workflow, and delivery problems.
              That is where AI can be evaluated against real output instead of abstract promise.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
            {usefulAreas.map((area) => (
              <div key={area.title} className="bg-background p-8 md:p-10">
                <area.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-mono text-xl font-bold tracking-tight md:text-2xl">{area.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{area.description}</p>
                <div className="mt-6 space-y-3">
                  {area.outcomes.map((item) => (
                    <div key={item} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Drupal AI Initiative alignment
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              109.studio is building toward the same practical direction: open, inspectable, and useful AI
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The Drupal AI Initiative is important because it treats AI as part of the platform, not a disconnected
              overlay. 109.studio is aligning its Drupal AI work with that direction while building contribution paths
              through documentation, examples, and client work that can become reusable learning.
            </p>
          </div>
          <div className="border border-border bg-surface p-8 md:p-10">
            <ShieldCheck className="mb-6 h-6 w-6 text-primary" />
            <h3 className="font-mono text-2xl font-bold tracking-tight">Commitments that guide the work</h3>
            <div className="mt-8 space-y-4">
              {initiativeCommitments.map((item) => (
                <div key={item} className="border-b border-border pb-4 text-base leading-relaxed text-muted-foreground last:border-b-0 last:pb-0 md:text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Starting points
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Five ways to begin Drupal AI work without overcommitting too early
            </h2>
          </div>
          <div className="space-y-px bg-border">
            {startingPoints.map((item) => (
              <div key={item.title} className="grid gap-6 bg-background p-8 md:p-10 lg:grid-cols-[0.8fr_1fr]">
                <div>
                  <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{item.fit}</p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Why 109.studio fits this work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Drupal depth, applied AI judgment, and hands-on architecture in one place
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {proofItems.map((item) => (
              <div key={item.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-xl font-bold tracking-tight md:text-2xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Next step</span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Have a Drupal platform where AI might help, but you are not sure where to start?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Send a short note about the site, the workflow, or the decision in front of you. Damien will review it
                personally and suggest the clearest next step.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Drupal AI conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/offerings"
                className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                Compare starting points
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrupalAI;
