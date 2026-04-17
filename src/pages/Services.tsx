import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Fractional CTO and technical strategy",
    description:
      "Senior technical leadership for teams that need clearer product direction, stronger architecture decisions, and better judgment around sequencing, delivery, and technical risk.",
    features: ["Technical strategy", "Architecture direction", "Roadmap clarity", "Decision support"],
  },
  {
    title: "Prototype-to-production architecture",
    description:
      "Turn early product ideas, mockups, and brittle prototypes into working architecture, versioned specifications, and delivery plans a team can actually build against.",
    features: ["Technical roadmaps", "System design", "Specification work", "Production planning"],
  },
  {
    title: "Agentic workflows and AI governance",
    description:
      "Design reviewable AI workflows, retrieval-backed context, and explicit action paths so models can support meaningful work without drifting into guesswork or hidden risk.",
    features: ["Workflow design", "Context control", "Review paths", "Human oversight"],
  },
  {
    title: "AI-enabled content operations",
    description:
      "Apply AI to content audits, accessibility support, metadata, editorial workflows, and large content environments where manual review alone does not scale.",
    features: ["Content audits", "Accessibility support", "Metadata workflows", "Editorial operations"],
  },
  {
    title: "Platform modernization, DevEx, and delivery systems",
    description:
      "Improve environments, release workflows, documentation, and platform foundations so teams can release software with less friction, lower rework, and more confidence over time.",
    features: ["Modernization", "CI/CD systems", "Developer experience", "Release confidence"],
  },
];

const proofPoints = [
  {
    metric: "40% to 60% better answer accuracy",
    detail: "Retrieval-backed context and explicit review paths help AI produce more useful, more grounded answers.",
  },
  {
    metric: "50% fewer no-result dead ends",
    detail: "Better search, retrieval, and structured knowledge systems create a clearer path from question to answer.",
  },
  {
    metric: "6,000+ content items reviewed",
    detail: "AI-assisted content operations can expand audit coverage far beyond small manual samples.",
  },
  {
    metric: "80% to 90% faster alt-text generation",
    detail: "Accessibility support moves faster when repetitive tasks are automated and review stays human.",
  },
  {
    metric: "20% lower PR review time",
    detail: "AI-assisted review and summary workflows reduce friction without giving up engineering discipline.",
  },
  {
    metric: "5 to 10 hours of manual QA saved per team each week",
    detail: "Delivery systems, testing workflows, and better DevEx reduce repetitive checking and avoidable rework.",
  },
];

const guideItems = [
  {
    problem: "You need clarity before approving a larger technical effort",
    recommendation: "Start with the 2-Week architecture audit.",
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
    problem: "Content operations, accessibility, or metadata work are absorbing too much time",
    recommendation: "Start with the content operations audit and automation plan.",
  },
  {
    problem: "You need ongoing senior technical direction across roadmap and delivery",
    recommendation: "Start with fractional CTO advisory.",
  },
  {
    problem: "Modernization and delivery systems need a reset before the next phase of work",
    recommendation: "Start with the platform modernization and delivery reset.",
  },
];

const processSteps = [
  {
    title: "Start with the problem",
    description:
      "The first step is understanding what the team is building, where the friction is, and what better technical direction would change.",
  },
  {
    title: "Shape the engagement around the work",
    description:
      "Some teams need a short diagnostic. Some need ongoing technical leadership. Some need a focused build or prototype sprint.",
  },
  {
    title: "Stay close to decisions and delivery",
    description:
      "The work is principal-led throughout. That means the strategy stays connected to architecture, implementation, and the operating realities of the team.",
  },
];

const Services = () => {
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
            How we help
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            What 109 actually does inside an engagement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps founders, technical teams, and agency partners make better technical decisions, build
            stronger systems, and move delivery forward with less friction.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Core areas of work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Five areas that describe the practice most clearly
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Most engagements span more than one of these areas. The point is not to force the work into a neat
              category. It is to make the role 109.studio plays easier to understand before a project gets underway.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-background p-8 md:p-10 ${index === services.length - 1 ? "md:col-span-2" : ""}`}
              >
                <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{service.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                      {feature}
                    </div>
                  ))}
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
              A few concrete signals of how this work creates leverage
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.metric} className="bg-background p-8">
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
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Starting offers
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              If you already know the work needs a shaped starting point
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              If you already know the work needs a shaped starting point, the offerings page is the best place to match
              the problem in front of you to an audit, sprint, advisory track, or modernization reset.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/offerings"
              className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
            >
              See starting points
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Where to start</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Choose the starting point that matches the decision in front of you
            </h2>
          </div>
          <div className="space-y-6">
            {guideItems.map((item) => {
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
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              How engagements usually work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The goal is to shape the work clearly, then stay close to the decisions that matter
            </h2>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="grid gap-4 md:grid-cols-[60px_1fr]">
                <div className="font-mono text-sm text-text-dim">0{index + 1}</div>
                <div>
                  <h3 className="font-mono text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{step.description}</p>
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
                Need help deciding where to start?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with a short note about what you are building or where things feel stuck. Or see the shaped
                starting points if you want a clearer entry path first.
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
                to="/offerings"
                className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                See starting points
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
