import { ArrowRight, PencilLine } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import CategoryFilter from "@/components/content/CategoryFilter";
import InsightCard from "@/components/insights/InsightCard";
import {
  getDraftArticles,
  getFeaturedArticle,
  getNonFeaturedArticles,
} from "@/data/insights";
import { PROJECT_CATEGORIES } from "@/data/taxonomy";
import { getCardGridBorderClass, getLastGridItemSpanClass } from "@/lib/grid";

const Insights = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";

  const featuredArticle = getFeaturedArticle();
  const allPublished = getNonFeaturedArticles();
  const allDrafts = getDraftArticles();

  const matches = (a: { categoryId?: string }) =>
    activeCategory === "all" || a.categoryId === activeCategory;

  const publishedArticles = useMemo(
    () => allPublished.filter(matches),
    [allPublished, activeCategory],
  );
  const draftArticles = useMemo(
    () => allDrafts.filter(matches),
    [allDrafts, activeCategory],
  );
  const showFeatured =
    featuredArticle && (activeCategory === "all" || featuredArticle.categoryId === activeCategory);

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

      <section className="border-b border-border py-12 md:py-16">
        <div className="container">
          <CategoryFilter
            options={PROJECT_CATEGORIES.map(({ id, shortLabel }) => ({
              id,
              label: shortLabel,
            }))}
          />
        </div>
      </section>

      {showFeatured && featuredArticle && (
        <section className="border-b border-border py-20 md:py-24">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Featured note
              </span>
            </div>

            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="group block border border-border bg-surface p-8 transition-all duration-300 ease-out hover:border-border hover:bg-surface-hover md:p-10"
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

            <div className="grid md:grid-cols-2 xl:grid-cols-3">
              {publishedArticles.map((article, index) => {
                const span = getLastGridItemSpanClass({
                  index,
                  itemCount: publishedArticles.length,
                  mdColumns: 2,
                  xlColumns: 3,
                });
                const border = getCardGridBorderClass({
                  index,
                  itemCount: publishedArticles.length,
                  mdColumns: 2,
                  xlColumns: 3,
                });
                return (
                  <InsightCard
                    key={article.slug}
                    article={article}
                    className={`${border} ${span}`.trim()}
                  />
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

            <div className="grid md:grid-cols-2 xl:grid-cols-3">
              {draftArticles.map((article, index) => (
                <div
                  key={article.slug}
                  className={`bg-background p-8 md:p-10 border border-transparent ${getCardGridBorderClass({
                    index,
                    itemCount: draftArticles.length,
                    mdColumns: 2,
                    xlColumns: 3,
                  })} ${getLastGridItemSpanClass({
                    index,
                    itemCount: draftArticles.length,
                    mdColumns: 2,
                    xlColumns: 3,
                  })}`}
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
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Talk through the pattern
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
