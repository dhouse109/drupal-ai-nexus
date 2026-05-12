import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "@/components/content/StatusBadge";
import ThemeChips from "@/components/content/ThemeChips";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  className?: string;
}

const ProjectCard = ({ project, variant = "default", className }: ProjectCardProps) => {
  const isFeatured = variant === "featured";
  const frameClass = isFeatured
    ? "border border-border bg-surface p-8 hover:border-primary md:p-10"
    : "bg-background p-8 hover:bg-muted/20 hover:ring-1 hover:ring-inset hover:ring-border md:p-10";

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`group block transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${frameClass} ${className ?? ""}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {project.primaryCategoryLabel}
        </div>
        <StatusBadge label={project.statusLabel} tone={project.statusTone} />
      </div>
      <h3
        className={`mt-4 font-mono font-bold tracking-tight ${
          isFeatured ? "text-3xl md:text-5xl" : "text-2xl"
        }`}
      >
        {project.detail.cardTitle}
      </h3>
      <p
        className={`mt-4 leading-relaxed text-muted-foreground ${
          isFeatured ? "text-base md:text-lg" : "text-base md:text-lg"
        }`}
      >
        {project.detail.cardSummary}
      </p>
      {project.themes.length > 0 && (
        <div className="mt-6">
          <ThemeChips themes={project.themes} max={3} />
        </div>
      )}
      <div className="mt-6 flex items-center justify-end">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          View project
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
