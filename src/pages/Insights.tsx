import { ArrowRight, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getDraftArticles,
  getFeaturedArticle,
  getNonFeaturedArticles,
} from "@/data/insights";

const topics = [
  "Platform modernization",
  "Applied AI",
  "Search and retrieval",
  "Delivery systems",
  "Drupal and open source",
];

const Insights = () => {
  const featuredArticle = getFeaturedArticle();
  const publishedArticles = getNonFeaturedArticles();
  const draftArticles = getDraftArticles();

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
            Notes from real product and platform work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio shares working notes on modernization, applied AI, search, delivery systems, and the technical decisions that shape how teams build and operate software.
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

      {featuredArticle && (
        <section className="border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Featured note
              </span>
            </div>

            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="group block border border-border bg-surface p-8 transition-all duration-300 ease-out hover:border-primary md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  {featuredArticle.category}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                  {featuredArticle.publishedDate}
                </div>
              </div>
              <h2 className="mt-4 max-w-3xl font-mono text-3xl font-bold tracking-tight md:text-5xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {featuredArticle.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                  {featuredArticle.readTime}
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Read note
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {publishedArticles.length > 0 && (
        <section className="border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mb-16 max-w-3xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Published notes
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
                More finished notes from the work
              </h2>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
              {publishedArticles.map((article, index) => {
                const isLast = index === publishedArticles.length - 1;
                const mdSpan = publishedArticles.length % 2 === 1 ? "md:col-span-2" : "";
                const xlRemainder = publishedArticles.length % 3;
                const xlSpan =
                  xlRemainder === 1 ? "xl:col-span-3" :
                  xlRemainder === 2 ? "xl:col-span-2" : "";
                const spanClass = isLast ? `${mdSpan} ${xlSpan}` : "";
                return (
                  <Link
                    key={article.slug}
                    to={`/insights/${article.slug}`}
                    className={`group block border border-transparent bg-background p-8 transition-all duration-300 ease-out hover:border-border hover:bg-muted/20 md:p-10 ${spanClass}`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                        {article.category}
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                        {article.publishedDate}
                      </div>
                    </div>
                    <h3 className="mt-4 font-mono text-2xl font-bold tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {article.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                        {article.readTime}
                      </div>
                      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        Read
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {draftArticles.length > 0 && (
        <section className="border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mb-16 max-w-3xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Notes in progress
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
                A few draft ideas that are being written up now
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                These are not linked yet on purpose. Each one has a clear thesis, but the full note is still being drafted.
              </p>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
              {draftArticles.map((article, index) => {
                const isLast = index === draftArticles.length - 1;
                const mdSpan = draftArticles.length % 2 === 1 ? "md:col-span-2" : "";
                const xlRemainder = draftArticles.length % 3;
                const xlSpan =
                  xlRemainder === 1 ? "xl:col-span-3" :
                  xlRemainder === 2 ? "xl:col-span-2" : "";
                const spanClass = isLast ? `${mdSpan} ${xlSpan}` : "";
                return (
                  <div
                    key={article.slug}
                    className={`bg-background p-8 md:p-10 ${spanClass}`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                        {article.category}
                      </div>
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                        <PencilLine className="h-3 w-3" />
                        Draft
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                        {article.publishedDate}
                      </div>
                    </div>
                    <h3 className="mt-4 font-mono text-2xl font-bold tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {article.keyTakeaway}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Working through something similar?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with your situation. If one of these ideas sounds close to the problem in front of you, Damien can help you sort the technical decision, delivery risk, or AI question that comes next.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Talk through a similar challenge
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

export default Insights;
