import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "2-Week architecture audit",
    summary:
      "A short diagnostic for teams that need a clear read on platform risk, delivery friction, and the technical decisions that should happen next.",
    fit: [
      "The platform feels harder to change than it should",
      "You need senior technical judgment before committing to a larger build",
      "Architecture, workflows, or AI readiness need an outside review",
    ],
    deliverables: [
      "Architecture review",
      "Delivery workflow review",
      "Prioritized findings",
      "Executive readout",
    ],
    nextStep:
      "This often leads to a clearer roadmap, a modernization plan, or an ongoing advisory engagement.",
    cta: { label: "See the audit", to: "/architecture-audit" },
  },
  {
    title: "Drupal AI readiness review",
    summary:
      "A Drupal-specific starting point for teams evaluating AI in content operations, search, editorial workflows, delivery systems, or Drupal AI Initiative-aligned work.",
    fit: [
      "You already use Drupal and need to decide where AI should fit",
      "The team wants practical AI support without losing governance or maintainability",
      "Search, content operations, accessibility, or workflows are the likely pressure points",
    ],
    deliverables: [
      "Drupal AI opportunity map",
      "Content and workflow review",
      "Search and retrieval direction",
      "Recommended next step",
    ],
    nextStep:
      "This often leads to a scoped Drupal AI sprint, RAG/search retrofit, content operations accelerator, or modernization roadmap.",
    cta: { label: "Explore Drupal AI", to: "/drupal-ai" },
  },
  {
    title: "Prototype-to-production sprint",
    summary:
      "A focused engagement for turning a rough product idea, design mockup, or brittle prototype into a buildable architecture and a practical delivery plan.",
    fit: [
      "A founder has something early but not something a team can safely build on",
      "You need stronger technical structure before implementation expands",
      "The gap between concept and production is still too wide",
    ],
    deliverables: [
      "Technical roadmap",
      "Versioned specifications",
      "Architecture direction",
      "Implementation plan",
    ],
    nextStep:
      "The outcome is often a stronger handoff into product engineering or a retained technical leadership role.",
  },
  {
    title: "Agentic workflow design sprint",
    summary:
      "A practical sprint for teams exploring where AI can support real work through reviewable workflows, scoped actions, and stronger context control.",
    fit: [
      "You want something more useful than a general AI strategy conversation",
      "The team needs help connecting AI to a real product or delivery workflow",
      "You need the work to stay visible, reviewable, and under control",
    ],
    deliverables: [
      "Workflow design",
      "Action and review paths",
      "Prototype scope",
      "Production recommendations",
    ],
    nextStep:
      "This often becomes a proof of concept, a workflow implementation, or a broader applied AI engagement.",
  },
  {
    title: "Content operations audit and automation plan",
    summary:
      "A targeted engagement for content-heavy organizations that need help with audit coverage, accessibility support, metadata, and editorial workflow strain.",
    fit: [
      "Manual content review is not scaling",
      "Accessibility or metadata work is creating backlog",
      "You need a clearer path for applying AI inside editorial operations",
    ],
    deliverables: [
      "Content workflow review",
      "Audit and accessibility findings",
      "Automation opportunities",
      "Phased implementation plan",
    ],
    nextStep:
      "The result is often a clearer content operations roadmap and a smaller set of high-value automation decisions.",
  },
  {
    title: "Fractional CTO advisory",
    summary:
      "Ongoing senior technical direction for founders and teams that need support across roadmap, architecture, delivery, hiring judgment, and difficult technical trade-offs.",
    fit: [
      "You need continuity across strategy and implementation",
      "A founder needs a technical partner without adding a full-time executive layer yet",
      "The work spans product decisions, delivery risk, and stakeholder communication",
    ],
    deliverables: [
      "Technical direction",
      "Roadmap support",
      "Architecture decisions",
      "Ongoing advisory cadence",
    ],
    nextStep:
      "This is often the right fit when the work is active, evolving, and needs senior judgment over time.",
  },
  {
    title: "Platform modernization and delivery reset",
    summary:
      "A focused reset for teams dealing with fragile environments, release friction, unclear platform foundations, or a modernization effort that needs sharper structure.",
    fit: [
      "Delivery is slowed down by environments, deployments, or unclear ownership",
      "A legacy platform needs a stronger modernization path",
      "You need better DevEx and release confidence before the next phase of growth",
    ],
    deliverables: [
      "Platform assessment",
      "Delivery-system recommendations",
      "Environment and workflow plan",
      "Modernization priorities",
    ],
    nextStep:
      "This often leads to a modernization roadmap, a delivery-systems overhaul, or follow-on engineering support.",
  },
];

const evidenceItems = [
  {
    metric: "3-to-4 week delivery paths",
    detail:
      "Prototype-to-production and modernization work can move much faster when the effort is shaped around architecture, decisions, and disciplined execution from the start.",
  },
  {
    metric: "40% to 60% better answer accuracy",
    detail:
      "Applied AI work becomes more useful when context, retrieval, and review paths are designed into the system.",
  },
  {
    metric: "6,000+ content items with full audit coverage",
    detail:
      "Content operations engagements can expand far beyond sample-based review without scaling manual effort linearly.",
  },
  {
    metric: "20% lower PR review time",
    detail:
      "Delivery-system and DevEx improvements create measurable gains even before a broader modernization effort is complete.",
  },
];

const guideItems = [
  {
    problem: "You need clarity before approving a larger technical effort",
    recommendation: "Start with the 2-Week architecture audit.",
  },
  {
    problem: "You already use Drupal and want to apply AI without turning the platform into an experiment",
    recommendation: "Start with the Drupal AI readiness review.",
  },
  {
    problem: "You have a concept, mockup, or brittle prototype that needs real structure",
    recommendation: "Start with the prototype-to-production sprint.",
  },
  {
    problem: "You want AI to support a real workflow without making the system harder to trust",
    recommendation: "Start with the agentic workflow design sprint.",
  },
  {
    problem: "Content operations, accessibility, or editorial debt are absorbing too much time",
    recommendation: "Start with the content operations audit and automation plan.",
  },
  {
    problem: "You need an ongoing senior technical partner across roadmap and delivery",
    recommendation: "Start with fractional CTO advisory.",
  },
  {
    problem: "Modernization and delivery systems need a reset before the next phase of work",
    recommendation: "Start with the platform modernization and delivery reset.",
  },
];

const processSteps = [
  {
    title: "Start with the decision in front of you",
    description:
      "The point of these offers is not to force the work into a package. It is to give teams a clear and sensible way to begin.",
  },
  {
    title: "Use the first engagement to create clarity",
    description:
      "Each offer is designed to reduce ambiguity, surface the real technical work, and make the next investment more informed.",
  },
  {
    title: "Expand only where the work justifies it",
    description:
      "Some engagements end with a roadmap. Some turn into a build, a retained advisory role, or a deeper modernization effort.",
  },
];

const Offerings = () => {
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
            Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Clear ways to begin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            These offers are designed to help you choose the right way to begin, whether the
            work in front of you is product, platform, modernization, Drupal, or applied AI.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Starting offers
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Seven practical ways to begin
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Some teams need a short diagnostic. Some need a focused sprint. Some need ongoing senior direction. What matters is choosing the starting point that gives the work better structure.
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-background p-8 md:p-10">
                <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                  {offering.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {offering.summary}
                </p>

                <div className="mt-8">
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Good fit when
                  </div>
                  <div className="space-y-3">
                    {offering.fit.map((item) => (
                      <div key={item} className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    What you get
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {offering.deliverables.map((item) => (
                      <div
                        key={item}
                        className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    What this can lead to
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {offering.nextStep}
                  </p>
                  {offering.cta && (
                    <Link
                      to={offering.cta.to}
                      className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary transition-colors hover:text-primary/80"
                    >
                      {offering.cta.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Selected proof
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few recent signals of the kind of leverage these offers are built to create
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
            {evidenceItems.map((item) => (
              <div key={item.metric} className="bg-background p-8">
                <div className="font-mono text-xl font-semibold tracking-tight md:text-2xl">
                  {item.metric}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.detail}
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
              Where to start
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Choose the one that matches the decision in front of you
            </h2>
          </div>
          <div className="space-y-6">
            {guideItems.map((item) => (
              <div key={item.problem} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-text-dim">
                  {item.problem}
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.recommendation}
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
              How these offers work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Start with the smallest engagement that creates real clarity
            </h2>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="grid gap-4 md:grid-cols-[60px_1fr]">
                <div className="font-mono text-sm text-text-dim">0{index + 1}</div>
                <div>
                  <h3 className="font-mono text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {step.description}
                  </p>
                </div>
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
                Not sure which path fits? Start by describing the situation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                You can start a conversation if it would help to talk through the situation, or explore the Drupal AI page if your platform is already Drupal-based.
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
                to="/drupal-ai"
                className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                Explore Drupal AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;
