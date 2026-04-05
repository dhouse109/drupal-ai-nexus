import { ArrowRight, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const inquiryTypes = [
  {
    title: "Technical direction and strategy",
    description: "For teams that need clearer architecture choices, roadmap guidance, or senior technical judgment before delivery gets more expensive.",
  },
  {
    title: "Product and platform delivery",
    description: "For organizations that need platform modernization, delivery support, or deeper engineering capacity on an active initiative.",
  },
  {
    title: "Agency and partner collaboration",
    description: "For agencies and technical teams looking for a senior partner for research, implementation support, or shared systems work.",
  },
];

const collaborationModels = [
  "Embedded technical leadership",
  "Architecture and delivery support",
  "Research and prototype sprints",
  "Shared tooling and systems work",
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative border-b border-border py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Start the right product or platform conversation.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Whether you need strategic technical direction, platform delivery support, or a strong partner for a complex initiative, this is the place to start.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-3">
          {inquiryTypes.map((type) => (
            <div key={type.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight">{type.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Good fit</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Best for teams that need clarity, depth, or a true technical partner.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A strong first message usually includes what you are building, where you are stuck, and whether you are looking for strategy, delivery support, or collaboration.
            </p>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Collaboration models</span>
            <div className="space-y-3">
              {collaborationModels.map((item) => (
                <div key={item} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact details</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Tell 109.studio what you are working on.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is especially interested in conversations around technical direction, platform modernization, product experimentation, and collaboration with agencies and technical teams working in adjacent spaces.
            </p>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <Mail className="h-4 w-4" />
              Email
            </div>
            <a href="mailto:hello@109.studio" className="mt-6 block font-mono text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl">
              hello@109.studio
            </a>

            <a href="https://github.com/dhouse109/drupal-ai-nexus" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Github className="h-4 w-4" />
              View project repo
            </a>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@109.studio" className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90">
                Send inquiry
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link to="/services" className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary">
                Review services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
