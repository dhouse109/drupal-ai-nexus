import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "@/components/content/StatusBadge";
import ThemeChips from "@/components/content/ThemeChips";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
}

const ProjectCard = ({ project, variant = "default" }: ProjectCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`group block border border-border bg-background transition-colors duration-300 ease-out hover:border-primary ${
        isFeatured ? "bg-surface p-8 md:p-10" : "p-8 md:p-10"
      }`}
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
