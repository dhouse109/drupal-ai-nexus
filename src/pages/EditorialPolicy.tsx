import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContentCTA from "@/components/content/ContentCTA";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-b border-border py-16 md:py-20">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const EditorialPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-text-dim transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3" />
            Home
          </Link>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          Editorial policy
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          How 109 uses AI in published work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          109.studio uses AI as a research and drafting tool. Damien House and
          109.studio remain the accountable authors and publishers of every
          insight and project page on this site.
        </motion.p>
      </div>
    </section>

    <Section title="What we use AI for">
      <p>AI assistance is used for a narrow set of editorial tasks:</p>
      <ul className="space-y-3 pl-0">
        {[
          "Research synthesis from notes, transcripts, and source materials.",
          "Drafting first passes from outlines and bullet points.",
          "Summarization of longer working documents.",
          "Review support — checking structure, clarity, and consistency before publication.",
        ].map((item, i) => (
          <li
            key={i}
            className="flex gap-4 border-l border-border pl-4 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <span className="shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary md:pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>

    <Section title="Who is accountable">
      <p>
        Damien House and 109.studio are responsible for editorial judgment and
        final publication. AI assistance never replaces author attribution.
      </p>
      <p>
        Author bylines on this site are never set to "AI". Where an article was
        drafted with AI support, that is disclosed separately through the
        AI-assisted chip — it does not replace the human author of record.
      </p>
    </Section>

    <Section title="How we label projects">
      <p>
        Project pages on this site use an explicit status taxonomy so it is
        clear what kind of work each entry represents:
      </p>
      <ul className="space-y-3 pl-0">
        {[
          "Real client work — engagements released to production for an external client.",
          "Abstracted past work — real engagements described with details abstracted for confidentiality.",
          "Planned — committed work that is scoped but not yet delivered.",
          "Internal — systems built inside 109.studio for our own operations.",
          "Lab — experiments and prototypes used to test a pattern or technique.",
          "Sample-only — illustrative examples that have not been delivered to a client.",
        ].map((item, i) => (
          <li
            key={i}
            className="flex gap-4 border-l border-border pl-4 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <span className="shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary md:pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p>
        The AI-assistance chip only appears on a project page when that project
        is explicitly marked as AI-assisted. Most project pages do not use AI
        assistance and therefore do not show the chip.
      </p>
    </Section>

    <Section title="How AI assistance is disclosed">
      <p>
        Insights drafted with AI assistance show an "AI-assisted ·
        Human-reviewed" chip near the byline, with a short note explaining how
        AI was used and confirming that a human reviewed and edited the piece
        before publication.
      </p>
      <p>
        If an entry is published without a human review pass, it will not carry
        the "Human-reviewed" label.
      </p>
    </Section>

    <ContentCTA
      eyebrow="Questions about this policy"
      headline="Want to know how a specific piece was put together?"
      body="Editorial questions are welcome. A short note is enough — Damien reviews each inquiry personally."
      primary={{ label: "Start a conversation", to: "/contact" }}
      secondary={{ label: "Read the insights", to: "/insights" }}
    />
  </div>
);

export default EditorialPolicy;
