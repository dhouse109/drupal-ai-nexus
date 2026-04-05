const areas = [
  {
    title: "Editorial workflows",
    description:
      "Exploring content generation, classification, summarization, and taxonomy support patterns that fit Drupal governance and publishing needs.",
  },
  {
    title: "Search and retrieval",
    description:
      "Investigating semantic search, retrieval patterns, and discovery experiences that combine structured Drupal content with modern AI approaches.",
  },
  {
    title: "Developer workflows",
    description:
      "Improving Drupal development, integration scaffolding, and technical experimentation so teams can move faster with stronger defaults.",
  },
  {
    title: "Shared patterns and assets",
    description:
      "Turning successful experiments into reusable starter systems, documentation, and tooling that support both delivery teams and the broader ecosystem.",
  },
];

const DrupalAI = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border py-24 md:py-32">
        <div className="container">
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Drupal AI
          </span>
          <h1 className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Supporting Drupal AI work through practical research and development.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            109.studio is focused on exploring how AI can strengthen Drupal development, editorial workflows, and platform strategy across industries. The goal is reusable approaches that create real value for teams building and modernizing with Drupal.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Practice
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Open source is part of the delivery model, not a side note.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              The point of this work is to help agencies, product teams, and Drupal practitioners incorporate AI strategies in ways that are practical, maintainable, and relevant to real platform work.
            </p>
            <p>
              That includes experiments, prototypes, shared knowledge, and collaboration around what actually improves publishing systems, developer workflows, and content operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-2">
          {areas.map((area) => (
            <div key={area.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{area.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DrupalAI;
