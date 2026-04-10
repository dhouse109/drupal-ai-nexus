import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Fractional CTO and technical strategy",
    description:
      "Senior technical leadership for teams that need clearer product direction, stronger architecture decisions, and better judgment around sequencing, delivery, and technical risk.",
    features: [
      "Technical strategy",
      "Architecture direction",
      "Roadmap clarity",
      "Decision support",
    ],
  },
  {
    title: "Prototype-to-production architecture",
    description:
      "Turn early product ideas, mockups, and brittle prototypes into working architecture, versioned specifications, and delivery plans a team can actually build against.",
    features: [
      "Technical roadmaps",
      "System design",
      "Specification work",
      "Production planning",
    ],
  },
  {
    title: "Agentic workflows and AI governance",
    description:
      "Design reviewable AI workflows, retrieval-backed context, and explicit action paths so models can support meaningful work without drifting into guesswork or hidden risk.",
    features: [
      "Workflow design",
      "Context control",
      "Review paths",
      "Human oversight",
    ],
  },
  {
    title: "AI-enabled content operations",
    description:
      "Apply AI to content audits, accessibility support, metadata, editorial workflows, and large content environments where manual review alone does not scale.",
    features: [
      "Content audits",
      "Accessibility support",
      "Metadata workflows",
      "Editorial operations",
    ],
  },
  {
    title: "Platform modernization, DevEx, and delivery systems",
    description:
      "Improve environments, release workflows, documentation, and platform foundations so teams can ship with less friction, lower rework, and more confidence over time.",
    features: [
      "Modernization",
      "CI/CD systems",
      "Developer experience",
      "Release confidence",
    ],
  },
];

const offerings = [
  {
    title: "2-Week architecture audit",
    outcome:
      "Get a clear read on platform risk, delivery friction, and the technical decisions that need to happen next.",
    fit: [
      "A product or platform feels harder to change than it should",
      "The team needs senior technical judgment before committing to a larger build",
      "You want an outside view on architecture, workflows, or AI readiness",
    ],
    deliverables: [
      "Architecture and delivery review",
      "Prioritized findings and recommendations",
      "Clear next-step roadmap",
      "Executive readout",
    ],
  },
  {
    title: "Fractional CTO and technical advisory",
    outcome:
      "Bring senior technical leadership into the work without adding a full-time executive layer before the timing is right.",
    fit: [
      "A founder needs help shaping product and platform decisions",
      "A team needs architecture guidance, roadmap support, or technical due diligence",
      "The work spans strategy, delivery, and communication with non-technical stakeholders",
    ],
    deliverables: [
      "Technical strategy and architecture direction",
      "Roadmap and prioritization support",
      "Decision support for product and platform trade-offs",
      "Hands-on involvement where needed",
    ],
  },
  {
    title: "Platform and product engineering",
    outcome:
      "Design and build stronger platforms, workflows, and product systems that can hold up under real operating conditions.",
    fit: [
      "The team needs help on a content-rich or process-heavy platform",
      "There is active delivery work that needs senior depth",
      "Architecture, integrations, and maintainability all matter at the same time",
    ],
    deliverables: [
      "Platform architecture and implementation support",
      "Workflow and systems design",
      "Delivery systems and technical foundations",
      "Reusable patterns and documentation",
    ],
  },
  {
    title: "Applied AI prototypes and workflow design",
    outcome:
      "Explore where AI can improve the product, the workflow, or the speed of execution without making the system harder to trust.",
    fit: [
      "You want to test a practical AI use case before scaling it",
      "The team needs help connecting AI to real product or delivery work",
      "You want something more concrete than a general AI strategy conversation",
    ],
    deliverables: [
      "Prototype scope and design",
      "Working proof of concept",
      "Reviewable workflow patterns",
      "Recommendations for production next steps",
    ],
  },
];

const guideItems = [
  {
    problem: "You need clarity before making a bigger technical commitment",
    recommendation: "Start with the 2-Week architecture audit.",
  },
  {
    problem: "You need a senior technical partner across roadmap, architecture, and delivery",
    recommendation: "Start with fractional CTO and technical advisory.",
  },
  {
    problem: "You already have delivery work in motion and need deeper engineering support",
    recommendation: "Start with platform and product engineering.",
  },
  {
    problem: "You want to test an applied AI direction in a controlled way",
    recommendation: "Start with applied AI prototypes and workflow design.",
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
      {/* Hero */}
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
            Senior technical help across strategy, architecture, applied AI, and delivery systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps founders, technical teams, and agency partners make better product
            and platform decisions, build stronger systems, and apply AI in ways that stay
            reviewable, useful, and grounded in real delivery work.
          </motion.p>
        </div>
      </section>

      {/* Service categories */}
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
              Most engagements span more than one of these areas. The point is not to force the
              work into a neat category. It is to make the role 109.studio plays easier to
              understand before a project gets underway.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-background p-8 md:p-10">
                <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {service.description}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shaped offerings */}
      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Common starting points
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Most engagements begin as a focused diagnostic, advisory track, build effort, or applied AI sprint
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              These are practical ways the work usually starts. The underlying scope often reaches
              across several of the core areas above, but this is the easiest way to match the next
              step to the decision in front of you.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                  {offering.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {offering.outcome}
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
                    Typical deliverables
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to start guide */}
      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Where to start
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Choose the engagement that matches the decision in front of you
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

      {/* Process */}
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
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                If one of these sounds close to the work in front of you, start a conversation
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                A strong starting point is a short note about what you are building, where things
                feel unclear, and what kind of help would be most useful.
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
                Review shaped offerings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
