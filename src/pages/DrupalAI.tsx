import { ArrowRight, Bot, Code2, Github, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const supportAreas = [
  {
    icon: Bot,
    title: "AI-enabled editorial workflows",
    description: "Patterns for generation, summarization, classification, and taxonomy support that fit Drupal governance and publishing environments.",
  },
  {
    icon: Network,
    title: "Semantic search and retrieval",
    description: "Discovery experiences that combine structured Drupal content with retrieval and AI-assisted querying in practical ways.",
  },
  {
    icon: Workflow,
    title: "AI-assisted Drupal development",
    description: "Developer workflows and technical experimentation that help Drupal teams move faster with stronger defaults.",
  },
  {
    icon: Code2,
    title: "Reusable patterns and assets",
    description: "Starter systems, documentation, and tooling that support agency collaboration and better delivery reuse.",
  },
];

const outputs = [
  "Workflow concepts",
  "Prototype implementations",
  "Reusable delivery patterns",
  "Shared tooling and documentation",
];

const DrupalAI = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border py-24 md:py-32">
        <div className="container">
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Drupal AI</span>
          <h1 className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Supporting Drupal AI work through practical research and delivery-minded experimentation.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            109.studio explores how AI can strengthen Drupal development, editorial workflows, and platform strategy across industries. The goal is reusable approaches that create real value for teams building and modernizing with Drupal.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Primary focus</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Practical AI strategies for Drupal development and content-heavy platforms.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>The core focus is helping agencies, product teams, and Drupal practitioners incorporate AI in ways that are maintainable and useful in real platform work.</p>
            <p>This work explores how structured content, publishing workflows, search, and AI capabilities can reinforce each other rather than treating Drupal and AI as separate tracks.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Support areas</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Where 109.studio is actively experimenting and contributing.
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {supportAreas.map((area) => (
              <div key={area.title} className="bg-background p-8 md:p-10">
                <area.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{area.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Delivery posture</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Built to support real delivery, not just theory.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The point of this work is to help teams adopt AI strategies in ways that are practical, maintainable, and useful inside active Drupal platform environments.
            </p>
          </div>
          <div className="border border-border bg-surface p-8 md:p-10">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Likely outputs</span>
            <div className="space-y-3">
              {outputs.map((item) => (
                <div key={item} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Collaboration</span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Looking for a partner working in the Drupal AI space?</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is interested in collaborating with agencies, technical teams, and community-aligned partners exploring how AI can improve Drupal development and delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                Discuss collaboration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://github.com/dhouse109/drupal-ai-nexus" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary">
                View repo
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrupalAI;
