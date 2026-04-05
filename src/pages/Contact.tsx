import { Mail, ArrowRight } from "lucide-react";

const inquiryTypes = [
  {
    title: "Drupal AI strategy",
    description:
      "For teams exploring practical AI adoption in Drupal, editorial workflows, search, or reusable platform capabilities.",
  },
  {
    title: "Product and platform delivery",
    description:
      "For organizations that need architecture support, platform modernization, or senior engineering depth on an active initiative.",
  },
  {
    title: "Agency collaboration",
    description:
      "For agencies and technical teams looking for a senior partner for R and D, implementation support, or shared open-source work.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border py-24 md:py-32">
        <div className="container">
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Contact
          </span>
          <h1 className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Start the right product or platform conversation.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Whether you need Drupal AI guidance, product engineering support, or a collaboration partner for a complex build, this is the place to start.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-3">
          {inquiryTypes.map((type) => (
            <div key={type.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight">{type.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Contact details
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Tell us what you are working on.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A strong first message usually includes what you are building, where you are stuck, and whether you are looking for strategy, delivery support, or collaboration.
            </p>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10">
            <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <Mail className="h-4 w-4" />
              Email
            </div>
            <a
              href="mailto:hello@109.studio"
              className="mt-6 block font-mono text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl"
            >
              hello@109.studio
            </a>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio is especially interested in conversations around Drupal AI strategy, platform modernization, product experimentation, and collaboration with agencies and technical teams working in adjacent spaces.
            </p>
            <a
              href="mailto:hello@109.studio"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send inquiry
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
