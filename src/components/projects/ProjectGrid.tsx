import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

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
    <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
