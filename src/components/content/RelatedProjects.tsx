import ProjectCard from "@/components/projects/ProjectCard";
import { getProjectBySlug, getProjectsLinkingToInsightSlug } from "@/data/projects";

interface RelatedProjectsProps {
  intro?: string;
  /** Project slugs explicitly linked from the insight. */
  projectSlugs?: string[];
  /** Insight slug for reverse lookup (projects that link TO this insight). */
  insightSlug?: string;
}

const RelatedProjects = ({ intro, projectSlugs, insightSlug }: RelatedProjectsProps) => {
  const fromForward = (projectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const fromReverse = insightSlug ? getProjectsLinkingToInsightSlug(insightSlug) : [];

  const seen = new Set<string>();
  const projects = [...fromForward, ...fromReverse].filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  if (projects.length === 0) return null;

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Related projects
          </span>
          {intro && (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          )}
        </div>
        <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
