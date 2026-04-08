import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const examples = [
  {
    title: "Content operations that stay reviewable",
    description:
      "Applied AI can help editors with summarization, classification, metadata, and content support, but the work still needs to stay visible, editable, and under control.",
    outcomes: [
      "Less repetitive editorial work",
      "Better content support at scale",
      "Human review where it matters",
    ],
  },
  {
    title: "Search and retrieval that understand intent",
    description:
      "Search gets more useful when structured content, retrieval, and AI are designed together. The point is not novelty. The point is helping people find the right thing faster.",
    outcomes: [
      "More useful discovery",
      "Better support for complex content sets",
      "A clearer path from question to answer",
    ],
  },
  {
    title: "Internal workflows that reduce delivery friction",
    description:
      "Some of the best AI work happens behind the scenes: helping teams summarize information, support handoffs, generate first-pass documentation, or reduce repetitive technical work.",
    outcomes: [
      "Faster execution on repeatable tasks",
      "Stronger delivery support systems",
      "More time for higher-value judgment",
    ],
  },
];

const workStories = [
  {
    title: "Modernizing high-stakes platforms",
    context:
      "Large public-facing platforms often carry years of infrastructure complexity, content sprawl, and delivery risk. In those environments, the work usually starts with architecture, migration planning, and the release systems needed to change the platform safely.",
    role:
      "That kind of work means staying close to both strategy and implementation: helping shape the migration path, improving the technical foundation, and making sure the delivery process can support change without creating avoidable instability.",
    result:
      "The result is usually a platform that is easier to operate, safer to evolve, and better prepared for the next round of product or service work.",
  },
  {
    title: "Reducing friction on content-rich systems",
    context:
      "Some teams do not need a rebuild. They need the platform and delivery workflow to stop fighting them. The real issue is often inconsistent environments, fragile deployments, or too much technical drag around everyday work.",
    role:
      "The work here is about tightening the path from local development to production, improving the delivery workflow, documenting the system, and making the platform easier for the team to use and maintain.",
    result:
      "When that foundation improves, teams tend to ship with more confidence, onboard faster, and spend less time recovering from preventable delivery problems.",
  },
  {
    title: "Exploring applied AI without losing the thread of delivery",
    context:
      "AI becomes useful when it is tied to a real workflow, product need, or operating problem. Small teams especially need a practical way to test ideas before they commit too much complexity to them.",
    role:
      "This usually means focused prototype and workflow design work: exploring where AI can help with content operations, retrieval, internal tooling, or delivery support while keeping the output reviewable and grounded in real operating conditions.",
    result:
      "That leads to better next-step decisions, more reusable patterns, and less time wasted on ideas that sounded interesting but were never going to hold up in practice.",
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

const nonGoals = [
  "Black-box systems making consequential decisions without review",
  "AI features that are harder to govern than the work they replace",
  "Proof-of-concept demos that collapse the moment they meet real delivery constraints",
  "Automation that creates more confusion for editors, developers, or operators",
];

const AIInPractice = () => {
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
            AI in practice
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            What applied AI looks like when it is tied to real product and platform work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            The focus here is not AI as spectacle. It is AI used in ways that help teams publish,
            find information, reduce delivery friction, and improve the platform without giving up
            clarity or control.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Why this matters
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Applied AI is most useful when it improves a real workflow, not when it just sounds impressive
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Some teams need help with content operations. Some need better search. Some need
              stronger internal tooling or cleaner delivery systems. In each case, the value comes
              from solving an actual point of friction.
            </p>
            <p>
              That is the standard 109.studio works from: use AI where it makes the system more
              useful, the workflow more efficient, or the delivery path easier to sustain.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Representative applications
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few examples of where this work tends to become useful
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {examples.map((example) => (
              <div key={example.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-2xl font-bold tracking-tight">{example.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {example.description}
                </p>
                <div className="mt-6 space-y-3">
                  {example.outcomes.map((item) => (
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
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Work patterns
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few short narratives that show how this work tends to create value
            </h2>
          </div>
          <div className="space-y-px bg-border">
            {workStories.map((story) => (
              <div key={story.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                  {story.title}
                </h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  <div>
                    <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      Context
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {story.context}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      Role
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {story.role}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      Result
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {story.result}
                    </p>
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
              What this is not
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few things 109.studio is not interested in shipping
            </h2>
          </div>
          <div className="space-y-4">
            {nonGoals.map((item) => (
              <div key={item} className="border-b border-border pb-4 text-base leading-relaxed text-muted-foreground md:text-lg last:border-b-0 last:pb-0">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
                If you are exploring an applied AI direction, start with the workflow you want to improve
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                The best starting point is usually not the model. It is the product, platform, or
                delivery problem you want to make more useful.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/offerings"
                className="inline-flex items-center justify-center border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                Review offerings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInPractice;
