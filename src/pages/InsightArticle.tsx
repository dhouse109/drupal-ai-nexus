import { ArrowLeft, ArrowRight, PencilLine } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getArticleBySlug, type InsightBlock } from "@/data/insights";

const calloutEyebrow: Record<
  Extract<InsightBlock, { type: "callout" }>["variant"],
  string
> = {
  guidance: "Practical guidance",
  warning: "Watch out for",
  insight: "Key insight",
};

const renderBlock = (block: InsightBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2
          key={index}
          className="mt-6 font-mono text-2xl font-bold tracking-tight md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "callout":
      return (
        <aside
          key={index}
          className="my-4 border border-border bg-surface p-6 md:p-8"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {calloutEyebrow[block.variant]}
          </div>
          <h3 className="mt-3 font-mono text-lg font-bold tracking-tight md:text-xl">
            {block.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            {block.text}
          </p>
        </aside>
      );
    case "list":
      return (
        <ul key={index} className="space-y-3 pl-0">
          {block.items.map((item, i) => (
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
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-4 border-l-2 border-primary pl-6 font-mono text-lg leading-relaxed text-foreground md:text-xl"
        >
          <p>"{block.text}"</p>
          {block.attribution && (
            <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-text-dim">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    default:
      return null;
  }
};

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const hasBody = article.body.length > 0;
  const isDraft = article.status === "draft";

  return (
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
              to="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-text-dim transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" />
              All insights
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {article.category}
            </span>
            {isDraft && (
              <span className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                <PencilLine className="h-3 w-3" />
                Draft note
              </span>
            )}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
          >
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl border border-border bg-surface p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Key takeaway
            </div>
            <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
              {article.keyTakeaway}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container">
          <article className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              {article.intro}
            </p>

            {hasBody ? (
              <div className="mt-10 space-y-6">
                {article.body.map((block, i) => renderBlock(block, i))}
              </div>
            ) : (
              <div className="mt-10 border border-border bg-surface p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Notes in progress
                  </div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
                    <PencilLine className="h-3 w-3" />
                    Draft
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  This entry is being drafted. The key takeaway above captures the thesis, but the full note is still in progress. If the topic is close to a decision in front of you, the contact form is open now.
                </p>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container border border-border bg-surface p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </span>
              <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
                Recognize your own situation in this?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                If this essay touches on a decision or risk in front of you, a short conversation is usually the fastest way to sort the next move.
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

export default InsightArticle;
