import InsightCard from "@/components/insights/InsightCard";
import { articles } from "@/data/insights";
import { cardGridClass, getCardGridItemClass } from "@/lib/grid";

interface RelatedInsightsProps {
  intro?: string;
  insightSlugs: string[];
  unmatchedIds?: string[];
}

/**
 * Resolves a project's relatedInsightSlugs against the current insights dataset.
 * Slugs that don't exist in the current site are silently skipped.
 * The unmatchedIds prop (optional) is logged in dev to help backfill insights later.
 */
const RelatedInsights = ({ intro, insightSlugs, unmatchedIds }: RelatedInsightsProps) => {
  const resolved = insightSlugs
    .map((slug) => articles.find((a) => a.slug === slug && a.status === "published"))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (import.meta.env.DEV && unmatchedIds && unmatchedIds.length > 0) {
    const unresolved = insightSlugs.length - resolved.length;
    if (unresolved > 0) {
      // eslint-disable-next-line no-console
      console.info(
        `[RelatedInsights] ${unresolved} insight slug(s) from the projects dataset are not present on the site yet:`,
        unmatchedIds,
      );
    }
  }

  if (resolved.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container">
        {intro && (
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Related insights
            </span>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          </div>
        )}
        <div className={cardGridClass}>
          {resolved.map((article, index) => (
            <InsightCard
              key={article.slug}
              article={article}
              className={getCardGridItemClass({
                index,
                itemCount: resolved.length,
                mdColumns: 2,
                xlColumns: 3,
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInsights;
