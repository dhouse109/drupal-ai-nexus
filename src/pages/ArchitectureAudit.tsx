import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fitItems = [
  {
    title: "Founders preparing a build decision",
    description:
      "You are about to commit to a larger investment in product or platform work and need a senior outside read before that decision is locked in.",
  },
  {
    title: "CTOs inheriting a platform",
    description:
      "You have stepped into a system you did not design and need an honest assessment of where the real risk and leverage live.",
  },
  {
    title: "Agencies needing a senior outside read",
    description:
      "You want a principal-level review to validate direction, sharpen recommendations, or strengthen a client conversation.",
  },
  {
    title: "Teams weighing AI-readiness investment",
    description:
      "You are evaluating where AI fits and need a clear read on whether the architecture, data, and workflows can support it responsibly.",
  },
];

const reviewAreas = [
  {
    title: "Platform architecture and system boundaries",
    description:
      "How the system is shaped, where the seams are, and where structural choices are quietly making future work harder than it needs to be.",
  },
  {
    title: "Technical debt and change-cost",
    description:
      "Where the cost of changing the system is higher than it should be, and which forms of debt are worth paying down before the next phase of work.",
  },
  {
    title: "Delivery risk and release confidence",
    description:
      "How the team releases software, where confidence breaks down, and which delivery practices are creating drag on real work.",
  },
  {
    title: "Data, integration, and content surfaces",
    description:
      "How information moves through the system, where integrations are fragile, and how content and data are structured for the work ahead.",
  },
  {
    title: "AI readiness, where relevant",
    description:
      "Whether the system is ready to support AI in a meaningful way, what would need to change first, and where the most useful early bets sit.",
  },
  {
    title: "Team capacity and decision-making structure",
    description:
      "Where ownership is clear, where it is not, and how technical decisions are actually being made under the surface of the work.",
  },
];

const deliverables = [
  {
    title: "Prioritized findings document",
    description: "A written set of findings ordered by impact, with the reasoning behind each one.",
  },
  {
    title: "Architecture map",
    description: "A clear view of the system as it is today, including the boundaries that matter most.",
  },
  {
    title: "Risk register",
    description: "The technical, delivery, and operational risks worth tracking, with severity and context.",
  },
  {
    title: "Recommended next steps",
    description: "A concrete set of moves the team can take, sequenced by what creates the most clarity first.",
  },
  {
    title: "Executive debrief session",
    description: "A working session to walk through the findings, answer questions, and pressure-test the recommendations.",
  },
  {
    title: "Optional roadmap outline",
    description: "If useful, a higher-level roadmap shaping how the recommended work could unfold over the next few quarters.",
  },
];

const inputs = [
  "Repository or codebase access",
  "A short system overview",
  "Any relevant architecture or product documentation",
  "Access to the people who hold key context, if needed",
];

const timeline = [
  {
    range: "Days 1–2",
    title: "Intake and access",
    description:
      "A short kickoff to align on goals, gather context, and get access to the systems, repositories, and documentation that matter for the review.",
  },
  {
    range: "Days 3–7",
    title: "Review",
    description:
      "Hands-on review of architecture, code, delivery workflows, integrations, and any AI-related surfaces. Conversations with key people on the team as needed.",
  },
  {
    range: "Days 8–10",
    title: "Synthesis",
    description:
      "Findings get organized, prioritized, and shaped into a written document with a clear architecture map and risk register.",
  },
  {
    range: "Days 11–14",
    title: "Debrief and recommendation",
    description:
      "Executive debrief session, written deliverables handed over, and a recommended next step that matches the situation in front of you.",
  },
];

const reasons = [
  {
    title: "Low-risk shape",
    description:
      "Two weeks, a fixed scope, and a clear set of deliverables. There is no open-ended commitment and no need to over-explain the engagement to stakeholders.",
  },
  {
    title: "Principal-led judgment",
    description:
      "The review is conducted by Damien personally, not handed off to a junior team. The output reflects senior technical judgment from the first conversation through the debrief.",
  },
  {
    title: "Decision-ready output",
    description:
      "You leave with a written record, a clear set of recommendations, and enough structure to make the next investment decision with more confidence.",
  },
];

const ArchitectureAudit = () => {
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
            Front-door engagement
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            A 2-Week Architecture Audit for teams that need clarity before the next big technical decision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            A short, principal-led diagnostic that surfaces the real technical risks, names the decisions that matter,
            and gives leadership a written basis for the next investment.
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
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/offerings"
              className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
            >
              See starting points
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">What this is</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A focused outside read on the system, the risks, and the decisions in front of you
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The audit is not a generic assessment or a long discovery exercise. It is a two-week, principal-led review
              of the platform, the delivery work around it, and any AI-related surfaces that matter. The output is a
              written document and a working debrief, both designed to inform a real decision.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Most teams use it to validate direction, prioritize technical investment, or get a clear read before
              committing to a larger build, modernization, or applied AI effort.
            </p>
          </div>
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">At a glance</span>
            <div className="space-y-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">Duration</div>
                <p className="mt-2 text-base text-foreground">2 weeks</p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">Format</div>
                <p className="mt-2 text-base text-foreground">Remote, principal-led by Damien</p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">Output</div>
                <p className="mt-2 text-base text-foreground">Written findings and an executive debrief</p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-dim">Scope</div>
                <p className="mt-2 text-base text-foreground">Architecture, delivery, and AI readiness where relevant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Who it is for</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Built for the moment before a meaningful technical decision
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {fitItems.map((item) => (
              <div key={item.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-xl font-bold tracking-tight md:text-2xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              What Damien reviews
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The areas that most often shape what happens next
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Not every area gets the same depth in every engagement. The review is shaped around the system in front of
              us and the decision the team is preparing to make.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {reviewAreas.map((area) => (
              <div key={area.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-xl font-bold tracking-tight md:text-2xl">{area.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              What Damien needs to get started
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A small set of inputs is usually enough
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The audit works best when the team can give Damien a direct view of the system and a short explanation of what feels uncertain, fragile, or expensive right now.
            </p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {inputs.map((item) => (
              <div key={item} className="bg-background p-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              What the client receives
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A written record, not a slide deck
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-background p-8">
                <h3 className="font-mono text-lg font-bold tracking-tight md:text-xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              What happens over the 2 weeks
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A clear arc from intake to recommendation
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((step, index) => (
              <div key={step.title} className="grid gap-4 md:grid-cols-[120px_1fr]">
                <div className="font-mono text-sm text-text-dim">
                  <div>0{index + 1}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em]">{step.range}</div>
                </div>
                <div>
                  <h3 className="font-mono text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{step.description}</p>
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
              Why this is a strong first step
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Designed to create clarity, not commitment
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-xl font-bold tracking-tight md:text-2xl">{reason.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Audit starting point</span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Ready to bring more clarity to the next decision?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Send a short note about the system, the team, and the decision in front of you. From there, the next
                step is usually a brief conversation to confirm fit and shape the engagement.
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

export default ArchitectureAudit;
