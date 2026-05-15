import { motion } from "framer-motion";
import StatusBadge from "@/components/content/StatusBadge";

import ThemeChips from "@/components/content/ThemeChips";
import EditorialDisclosure from "@/components/content/EditorialDisclosure";
import type { Project } from "@/data/projects";

interface ProjectDetailHeroProps {
  project: Project;
}

const SHOW_BLOCK_DISCLOSURE_STATUSES = new Set([
  "abstracted-past-work",
  "planned-service-proof",
  "lab",
  "sample-only",
  "internal-tool",
  "ecosystem-contribution",
]);

const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
  const shouldShowBlockDisclosure =
    project.aiAssisted && SHOW_BLOCK_DISCLOSURE_STATUSES.has(project.status);

  return (
  <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-6 flex flex-wrap items-center gap-3"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {project.primaryCategoryLabel}
        </span>
        <StatusBadge label={project.statusLabel} tone={project.statusTone} />
        {project.aiAssisted && (
          <EditorialDisclosure
            variant="inline"
            aiAssisted={project.aiAssisted}
            label={project.aiDisclosureLabel}
            note={project.aiDisclosureNote}
          />
        )}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
      >
        {project.detail.headline}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
      >
        {project.detail.subheadline}
      </motion.p>
      {project.aiAssisted && SHOW_BLOCK_DISCLOSURE_STATUSES.has(project.status) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl"
        >
          <EditorialDisclosure
            variant="block"
            aiAssisted={project.aiAssisted}
            label={project.aiDisclosureLabel}
            note={project.aiDisclosureNote}
            reviewedBy={project.reviewedBy}
            lastReviewedAt={project.lastReviewedAt}
            showReviewer={false}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col gap-6"
      >
        {project.themes.length > 0 && <ThemeChips themes={project.themes} />}
        {/*
          publicationChannels intentionally not rendered here.
          Only render channels publicly when each one links to a real
          destination (e.g. a damien.house companion URL) or clarifies a
          distinct publishing context. Until then, passive chips add
          visual noise without helping the reader.
        */}
      </motion.div>
    </div>
  </section>
);

export default ProjectDetailHero;
