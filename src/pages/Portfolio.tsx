import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryFilter from "@/components/content/CategoryFilter";
import ContentCTA from "@/components/content/ContentCTA";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGrid from "@/components/projects/ProjectGrid";
import {
  getAllProjects,
  getFeaturedProject,
  getProjectsByCategory,
} from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/data/taxonomy";
import type { ProjectCategoryId } from "@/data/taxonomy";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") ?? "all") as
    | ProjectCategoryId
    | "all";

  const featured = useMemo(() => getFeaturedProject(), []);
  const visibleProjects = useMemo(() => {
    const filtered = getProjectsByCategory(activeCategory);
    // Hide the featured project from the grid only when no filter is active.
    if (activeCategory === "all" && featured) {
      return filtered.filter((p) => p.slug !== featured.slug);
    }
    return filtered;
  }, [activeCategory, featured]);

  const totalCount = getAllProjects().length;
  const showingFeatured = activeCategory === "all" && featured;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Selected work, experiments, and proof of practice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            A working portfolio of {totalCount} projects across platform
            architecture, applied AI, developer tooling, and labs work. Status
            labels are visible on every entry: abstracted past work, planned
            service proofs, and open-source ecosystem contributions are not the
            same thing as completed client engagements, and they are not
            presented that way.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-12 md:py-16">
        <div className="container">
          <CategoryFilter
            options={PROJECT_CATEGORIES.map(({ id, shortLabel }) => ({
              id,
              label: shortLabel,
            }))}
          />
        </div>
      </section>

      {showingFeatured && featured && (
        <section className="border-b border-border py-16 md:py-20">
          <div className="container">
            <span className="mb-8 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Featured project
            </span>
            <ProjectCard project={featured} variant="featured" />
          </div>
        </section>
      )}

      <section className="border-b border-border py-16 md:py-20">
        <div className="container">
          <span className="mb-8 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {activeCategory === "all" ? "All projects" : "Filtered projects"}
          </span>
          <ProjectGrid
            projects={visibleProjects}
            emptyMessage="No projects match this filter yet."
          />
        </div>
      </section>

      <ContentCTA
        eyebrow="Next move"
        headline="See a project that maps to a decision in front of you?"
        body="Each entry abstracts the underlying pattern. A short conversation is the fastest way to sort whether the same approach fits your situation."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "See starting points", to: "/offerings" }}
      />
    </div>
  );
};

export default Portfolio;
