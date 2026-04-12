import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const proofItems = [
  {
    title: "20+ years across complex delivery environments",
    description:
      "Experience shaped by startups, agency work, and large public-sector platforms where architecture, governance, accessibility, and long-term maintainability all matter.",
  },
  {
    title: "Platform modernization with real operational stakes",
    description:
      "Work that spans cloud migration, Drupal modernization, CI/CD, structured content systems, and delivery practices teams can keep using after the engagement ends.",
  },
  {
    title: "Applied AI tied to actual workflows",
    description:
      "AI work focused on search, content operations, delivery systems, and retrieval-backed workflows that improve usefulness without losing review and control.",
  },
  {
    title: "Principal-led from architecture through execution",
    description:
      "Clients work directly with Damien House throughout the engagement, which keeps strategy, technical judgment, and implementation connected.",
  },
];

const workingStyle = [
  {
    title: "Start with the real problem",
    description:
      "The work usually begins by clarifying what the team is trying to build, where the friction is, and what better technical direction would change.",
  },
  {
    title: "Shape the architecture and the next decision",
    description:
      "Some engagements need an audit or roadmap. Some need product and platform structure. Some need deeper engineering support or applied AI implementation.",
  },
  {
    title: "Stay close to delivery",
    description:
      "The goal is not to hand off abstract advice. It is to help teams make better decisions, build stronger systems, and leave the work in a better operating state.",
  },
];

const About = () => {
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
            About
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            A principal-led practice for product, platform, and AI work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps founders, agencies, and technical teams move from concept to
            production with clearer architecture, stronger delivery systems, and senior technical
            judgment that stays close to the work.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              About the practice
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Built for work that needs senior technical judgment without losing contact with the build
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Many teams have a familiar gap. Strategy sits too far from implementation, or delivery is moving without
              enough senior technical direction around architecture, sequencing, and risk.
            </p>
            <p>
              109.studio was built to close that gap. The work spans product direction, platform modernization, applied
              AI, content operations, and the delivery systems teams need to keep shipping reliably.
            </p>
            <p>
              The model is principal-led throughout. Clients get senior judgment, hands-on technical depth, and an
              engagement that is meant to leave the team with stronger architecture, clearer workflows, and better
              delivery confidence after the work is done.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Founder</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">Damien House</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Fractional CTO, senior engineering advisor, and hands-on principal architect focused on moving complex
              products and platforms from concept to production.
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Damien brings more than two decades of experience across startups, agencies, and large public-sector
              platforms. His background includes Drupal architecture, cloud migration, DevOps transformation,
              accessibility remediation, team leadership, and the delivery discipline required on systems that cannot
              afford to be fragile.
            </p>
            <p>
              Today that experience extends into applied AI, agentic workflows, retrieval-backed systems, content
              operations, and AI-augmented delivery. The common thread is practical technical leadership that helps
              teams use new capabilities without losing control of architecture, process, or long-term maintainability.
            </p>
            <p>
              Clients usually value the ability to move between high-level technical judgment and hands-on execution
              without losing the thread. That might mean shaping a roadmap, reviewing platform risk, designing a
              workflow, or getting directly into architecture and implementation details as the work takes shape.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Selected experience
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A few signals of the background behind the work
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {proofItems.map((item) => (
              <div key={item.title} className="bg-background p-8 md:p-10">
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              How Damien works
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The work is usually shaped around a real decision, then carried forward in a way the team can use
            </h2>
          </div>
          <div className="space-y-8">
            {workingStyle.map((item, index) => (
              <div key={item.title} className="grid gap-4 md:grid-cols-[60px_1fr]">
                <div className="font-mono text-sm text-text-dim">0{index + 1}</div>
                <div>
                  <h3 className="font-mono text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
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
                Have a platform, product, or technical initiative that needs senior judgment?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with your situation. A short note is enough. Damien can help you figure out whether the right next step is an audit, a sprint, or ongoing advisory support.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start with your situation
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

export default About;
