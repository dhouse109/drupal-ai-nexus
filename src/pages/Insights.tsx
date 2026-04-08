import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredArticle = {
  category: "Featured",
  title: "Applied AI starts with the workflow, not the model",
  description:
    "A practical look at how teams get more value from AI when they start with the publishing, search, or delivery problem they actually need to improve.",
  readTime: "6 min read",
};

const articles = [
  {
    category: "Platform work",
    title: "Modernization is easier when architecture and delivery stay connected",
    description:
      "Why platform modernization work goes better when migration planning, technical foundations, and delivery systems are treated as part of the same problem.",
    readTime: "5 min read",
  },
  {
    category: "Applied AI",
    title: "What reviewable AI work looks like on a real team",
    description:
      "A short essay on keeping AI output visible, editable, and grounded in the workflows people are already responsible for operating.",
    readTime: "4 min read",
  },
  {
    category: "Search and retrieval",
    title: "Search gets better when content structure does more of the work",
    description:
      "How structured content, retrieval, and AI-assisted querying can reinforce each other on content-rich platforms without turning search into a black box.",
    readTime: "5 min read",
  },
  {
    category: "Delivery",
    title: "The technical path matters: reducing friction in day-to-day delivery",
    description:
      "A practical note on environments, deployments, documentation, and the infrastructure decisions that shape how confidently teams can ship.",
    readTime: "4 min read",
  },
  {
    category: "Open source and practice",
    title: "Research, reuse, and why some patterns are worth publishing",
    description:
      "An explanation of how internal experiments, delivery lessons, and open-source habits can become better starting points for future work.",
    readTime: "3 min read",
  },
];

const topics = [
  "Platform modernization",
  "Applied AI",
  "Search and retrieval",
  "Delivery systems",
  "Drupal and open source",
];

const Insights = () => {
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
            Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Notes, essays, and working ideas pulled from real platform and product work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            This section is where 109.studio shares the thinking behind the work: platform
            modernization, applied AI, delivery systems, search, open source, and the practical
            decisions that shape how teams build and operate software.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Topics
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              The themes that show up most often in the work
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic}
                className="border border-border px-4 py-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Featured note
            </span>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {featuredArticle.category}
            </div>
            <h2 className="mt-4 max-w-3xl font-mono text-3xl font-bold tracking-tight md:text-5xl">
              {featuredArticle.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {featuredArticle.description}
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
              {featuredArticle.readTime}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Recent entries
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A first set of practical essays to anchor the thought-leadership layer
            </h2>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <div key={article.title} className="bg-background p-8 md:p-10">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  {article.category}
                </div>
                <h3 className="mt-4 font-mono text-2xl font-bold tracking-tight">
                  {article.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {article.description}
                </p>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                  {article.readTime}
                </div>
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
                If one of these ideas is close to the problem you are working through, start there
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                The most useful follow-up is usually a conversation about the platform, the team,
                and the decision that needs to be made next.
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

export default Insights;
