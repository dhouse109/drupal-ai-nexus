import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const examples = [
  {
    title: "Editorial support inside a publishing workflow",
    description:
      "Applied AI can help with summaries, metadata suggestions, classification, and first-pass drafting, but the work still needs to stay visible, editable, and under control.",
    outcomes: ["Draft summaries", "Metadata suggestions", "Human review in the loop"],
  },
  {
    title: "Retrieval-backed answers on structured content",
    description:
      "Search becomes much more useful when structured content, retrieval, and AI are designed together to help people find the right thing faster across complex content sets.",
    outcomes: ["Grounded answers", "Better discovery", "Fewer dead ends"],
  },
  {
    title: "Release and documentation support for delivery teams",
    description:
      "Some of the most useful AI work is internal: drafting release notes from merged PRs, turning meeting transcripts into action items, or generating first-pass documentation that someone on the team edits before it lands.",
    outcomes: ["PR review summaries", "Drafted release notes", "First-pass documentation"],
  },
];

const workStories = [
  {
    title: "Editorial support inside a live content operation",
    context:
      "A publishing team is spending too much time on repetitive support work: drafting short summaries, normalizing metadata, checking categorization, or creating accessible first passes for content that still needs an editor's judgment.",
    role:
      "The AI layer helps with the first pass, but the workflow stays visible and reviewable. Editors can accept, revise, or ignore the suggestion instead of working around a black box that sits outside the actual process.",
    result:
      "The result is lower editorial drag, better coverage across a larger content estate, and a workflow that still makes it obvious where human review belongs.",
  },
  {
    title: "Retrieval-backed answers on a content-rich platform",
    context:
      "A platform has strong content, but the search experience still leaves people in dead ends. The issue is not the absence of information. It is the gap between a user's question and the structure of the content they need.",
    role:
      "The work combines retrieval, structured content, and answer generation so the AI layer is grounded in actual content instead of improvising from a prompt alone.",
    result:
      "That usually leads to better answer quality, fewer no-result searches, and a clearer path from question to useful next step.",
  },
  {
    title: "Internal delivery support around PRs, releases, and handoffs",
    context:
      "Teams lose time in the gaps around delivery: turning merged work into release notes, summarizing review context, writing first-pass docs, or carrying meeting decisions into the next round of implementation.",
    role:
      "AI helps with the repetitive synthesis work while keeping the final output in the hands of the people already responsible for release quality, delivery judgment, and technical accuracy.",
    result:
      "The payoff is less friction around handoffs, cleaner delivery support, and more team time spent on the work that actually needs senior technical judgment.",
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
            Three workflow patterns that make applied AI useful
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            This page is the examples layer: AI tied to a content operation, AI tied to search and retrieval, and AI tied to internal delivery work. Each one starts with a workflow that already exists.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              How this page is different
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              These are example patterns, not a theory of AI
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Each pattern starts with work a team already owns: editorial support, retrieval-backed answers, or delivery support around PRs, releases, and documentation.
            </p>
            <p>
              The point is to show what the work looks like when it is scoped tightly enough to review, improve, and keep running after the first experiment.
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
              Three patterns in plain terms
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
              What these patterns look like when scoped as real work
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
              A few things 109.studio is not interested in releasing
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
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </span>
              <h2 className="font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Want to test one of these patterns on your own workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start a conversation if you want help scoping one of these patterns, or step back to the Applied AI page if you want the broader decision framework first.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/applied-ai"
                className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
              >
                See the decision framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInPractice;
