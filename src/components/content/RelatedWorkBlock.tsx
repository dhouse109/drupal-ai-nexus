import ProjectCard from "@/components/projects/ProjectCard";
import InsightCard from "@/components/insights/InsightCard";
import { getProjectsByCategory } from "@/data/projects";
import { getNonFeaturedArticles } from "@/data/insights";
import type { ProjectCategoryId } from "@/data/taxonomy";
import { getLastGridItemSpanClass } from "@/lib/grid";

interface RelatedWorkBlockProps {
  categoryId: ProjectCategoryId;
  projectLimit?: number;
  insightLimit?: number;
  eyebrow?: string;
  heading?: string;
}

/**
 * Cross-surface block used near the bottom of service pages.
 * Renders up to N projects and N insights for the given category.
 */
const RelatedWorkBlock = ({
  categoryId,
  projectLimit = 3,
  insightLimit = 3,
  eyebrow = "Related work and writing",
  heading = "Concrete proof tied to this service",
}: RelatedWorkBlockProps) => {
  const projects = getProjectsByCategory(categoryId).slice(0, projectLimit);
  const insights = getNonFeaturedArticles()
    .filter((a) => a.categoryId === categoryId)
    .slice(0, insightLimit);

  if (projects.length === 0 && insights.length === 0) return null;

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            {heading}
          </h2>
        </div>

        {projects.length > 0 && (
          <div className="mb-px grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p, index) => (
              <ProjectCard
                key={p.slug}
                project={p}
                className={getLastGridItemSpanClass({
                  index,
                  itemCount: projects.length,
                  mdColumns: 2,
                  xlColumns: 3,
                })}
              />
            ))}
          </div>
        )}

        {insights.length > 0 && (
          <div className="mt-16">
            <span className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-text-dim">
              Related insights
            </span>
            <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
              {insights.map((a, index) => (
                <InsightCard
                  key={a.slug}
                  article={a}
                  className={getLastGridItemSpanClass({
                    index,
                    itemCount: insights.length,
                    mdColumns: 2,
                    xlColumns: 3,
                  })}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedWorkBlock;
