import { ArrowRight, FileSearch, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RelatedWorkBlock from "@/components/content/RelatedWorkBlock";
import { getCardGridBorderClass } from "@/lib/grid";

const focusAreas = [
  {
    icon: Workflow,
    title: "Workflow support inside products and teams",
    description:
      "Use AI where it can support a real product feature, operational workflow, or internal process without making the system harder to trust or maintain.",
    fit: [
      "You want AI tied to a specific workflow, not a vague innovation brief",
      "The team needs a reviewable way to test an agentic or assistant-like pattern",
      "You want better decisions about what should and should not be automated",
    ],
    outcomes: ["Reviewable workflows", "Safer automation", "Clearer next steps"],
  },
  {
    icon: FileSearch,
    title: "Content operations with human review",
    description:
      "Apply AI to content audits, metadata, accessibility support, and editorial workflows where the work is repetitive, coverage matters, and human review still belongs in the loop.",
    fit: [
      "Editorial work is slowed down by metadata, audit, or accessibility backlog",
      "You need more coverage across a large content estate without scaling manual review linearly",
      "The organization wants practical AI support inside content operations, not a disconnected tool",
    ],
    outcomes: ["Lower editorial drag", "Better coverage", "Stronger accessibility support"],
  },
  {
    icon: Network,
    title: "Retrieval and answer quality",
    description:
      "Design search and retrieval systems that combine structured content, semantic lookup, and AI-assisted querying so users and teams can get to the right answer faster.",
    fit: [
      "Search quality is poor on a content-rich or knowledge-heavy platform",
      "You need a better path from user question to useful answer",
      "The team wants retrieval-backed AI rather than prompt-only behavior",
    ],
    outcomes: ["Better discovery", "Fewer dead ends", "More grounded answers"],
  },
];

const proofItems = [
  {
    metric: "40% to 60% better answer accuracy",
    detail:
      "Grounded retrieval and stronger context design improve answer quality on real product and knowledge workflows.",
  },
  {
    metric: "50% fewer no-result dead ends",
    detail: "Search gets more useful when semantic retrieval and AI-assisted querying are designed together.",
  },
  {
    metric: "6,000+ content items reviewed",
    detail: "AI-assisted content operations can expand audit coverage from small samples to full-estate visibility.",
  },
  {
    metric: "80% to 90% faster alt-text generation",
    detail:
      "Accessibility support moves faster when repetitive work is automated and review remains part of the workflow.",
  },
];

const startingPoints = [
  {
    problem: "You need to test where AI can help in a real workflow before scaling further.",
    recommendation: "Start with the agentic workflow design sprint.",
  },
  {
    problem: "Content operations, accessibility, or metadata work are creating friction.",
    recommendation: "Start with the content operations audit and automation plan.",
  },
  {
    problem: "You need a broader technical read before choosing the right AI direction.",
    recommendation: "Start with the 2-Week architecture audit.",
  },
];

const principles = [
  {
    title: "Observable",
    description:
      "Teams should be able to see what the system is doing, inspect the output, and understand where intervention is needed.",
  },
  {
    title: "Reviewable",
    description:
      "AI should support decisions and workflows without quietly bypassing the people responsible for quality, accuracy, or risk.",
  },
  {
    title: "Grounded",
    description:
      "The work needs to stay connected to structured content, real workflows, and actual operating conditions rather than floating as a disconnected layer.",
  },
  {
    title: "Maintainable",
    description:
      "If a team cannot operate it, revise it, and extend it over time, it is not ready to become part of the platform.",
  },
];

const releaseStandards = [
  "Human review stays in the loop for consequential decisions",
  "Governance burden should go down, not up",
  "The pattern has to hold up under real delivery conditions",
  "The system should reduce confusion for editors, developers, and operators",
];

const AppliedAI = () => {
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
            A decision framework for applied AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Start with the workflow, content system, or search problem in front of you. Then decide whether AI improves
            speed, coverage, or answer quality without creating more operating risk than value.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              HOW TO DECIDE WHERE AI FITS
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The best place to begin is where the work already has structure
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              This page is about the kinds of environments where applied AI tends to hold up: workflows with clear owners, 
              content operations with review paths, and search systems grounded in structured information.
            </p>
            <p>
              That is usually the right starting point because the team can evaluate the output, 
              measure the result, and keep improving the system after release.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Working in Drupal?
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                There is now a Drupal-specific path for this work
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                The Drupal AI page explains how these applied AI patterns connect to structured content, editorial workflows,
                search, governance, modernization, and the Drupal AI Initiative.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/drupal-ai"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Drupal AI
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

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className={`bg-background p-8 md:p-10 ${
                  i < focusAreas.length - 1 ? "md:border-r md:border-border/20" : ""
                }`}
              >
                <area.icon className="mb-6 h-6 w-6 text-primary" />
                <h2 className="font-mono text-2xl font-bold tracking-tight">{area.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{area.description}</p>
                <div className="mt-8">
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">Good fit when</div>
                  <div className="space-y-3">
                    {area.fit.map((item) => (
                      <div key={item} className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">Typical outcomes</div>
                  <div className="space-y-3">
                    {area.outcomes.map((item) => (
                      <div key={item} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Selected proof</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few concrete signals of what this work can improve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {proofItems.map((item, index) => (
              <div
                key={item.metric}
                className={`bg-background p-8 ${getCardGridBorderClass({
                  index,
                  itemCount: proofItems.length,
                  mdColumns: 2,
                  xlColumns: 4,
                })}`}
              >
                <div className="font-mono text-xl font-semibold tracking-tight md:text-2xl">{item.metric}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Where to start</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Pick the starting point that matches the problem in front of you
            </h2>
          </div>
          <div className="space-y-6">
            {startingPoints.map((item) => {
              const isAuditRow = item.recommendation.includes("2-Week architecture audit");
              return (
                <div key={item.problem} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                  <div className="font-mono text-sm uppercase tracking-[0.2em] text-text-dim">{item.problem}</div>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {isAuditRow ? (
                      <>
                        Start with the{" "}
                        <Link
                          to="/architecture-audit"
                          className="text-primary underline-offset-4 transition-colors hover:underline"
                        >
                          2-Week Architecture Audit
                        </Link>
                        .
                      </>
                    ) : (
                      item.recommendation
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Working standards
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The work should stay understandable, reviewable, and under control
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-background p-8">
                <h3 className="font-mono text-xl font-semibold">{principle.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Release standards
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              What needs to be true before anything goes live
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio produces applied AI that a team can understand, review, operate, and extend. If it cannot meet
              that bar, it is not ready for release.
            </p>
          </div>
          <div className="space-y-4">
            {releaseStandards.map((item) => (
              <div
                key={item}
                className="border-b border-border pb-4 text-base leading-relaxed text-muted-foreground md:text-lg last:border-b-0 last:pb-0"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedWorkBlock categoryId="applied-ai-workflow-systems" />

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Applied AI starting point</span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Need a senior read on whether AI fits here?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with the workflow or content problem in front of you, or look at the concrete patterns on the AI
                in Practice page first.
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
    </div>
  );
};

export default AppliedAI;
