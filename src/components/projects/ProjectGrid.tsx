import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";
import { cardGridClass, getCardGridItemClass } from "@/lib/grid";

interface ProjectGridProps {
  projects: Project[];
  emptyMessage?: string;
}

const ProjectGrid = ({ projects, emptyMessage }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="border border-border bg-surface p-10 text-center font-mono text-xs uppercase tracking-[0.25em] text-text-dim">
        {emptyMessage ?? "No projects in this category yet."}
      </div>
    );
  }

  return (
    <div className={cardGridClass}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          className={getCardGridItemClass({
            index,
            itemCount: projects.length,
            mdColumns: 2,
            xlColumns: 3,
          })}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
