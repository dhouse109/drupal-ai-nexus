import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { InsightArticle } from "@/data/insights";

interface InsightCardProps {
  article: InsightArticle;
  className?: string;
}

/**
 * Extracted from src/pages/Insights.tsx to keep card markup consistent
 * across the insights index, related-insights blocks, and future surfaces.
 */
const InsightCard = ({ article, className }: InsightCardProps) => (
  <Link
    to={`/insights/${article.slug}`}
    className={`group block bg-background p-8 transition-colors duration-300 ease-out hover:bg-muted/20 hover:ring-1 hover:ring-inset hover:ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-10 ${className ?? ""}`}
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

export default InsightCard;
