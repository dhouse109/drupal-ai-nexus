import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentCTATarget {
  label: string;
  to: string;
}

interface ContentCTAProps {
  eyebrow: string;
  headline: string;
  body: string;
  primary: ContentCTATarget;
  secondary?: ContentCTATarget;
}

/**
 * Shared "next step" CTA card used at the bottom of long-form content
 * (Insight detail, Project detail, Insight index).
 *
 * Visual parity with the original "Related next move" block on InsightArticle.
 */
const ContentCTA = ({ eyebrow, headline, body, primary, secondary }: ContentCTAProps) => (
  <section className="py-20 md:py-24">
    <div className="container border border-border bg-surface p-8 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
          <h2 className="max-w-2xl font-mono text-2xl font-bold tracking-tight md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:justify-end">
          <Link
            to={primary.to}
            className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {primary.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center justify-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] transition-colors hover:border-primary hover:text-primary"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ContentCTA;
