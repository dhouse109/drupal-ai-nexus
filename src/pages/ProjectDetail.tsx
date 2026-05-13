import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ContentCTA from "@/components/content/ContentCTA";
import RelatedInsights from "@/components/content/RelatedInsights";
import PAVBlock from "@/components/projects/PAVBlock";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProofArtifactBlock from "@/components/projects/ProofArtifactBlock";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const { detail } = project;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Editorial guardrail (review-only, non-visible): {project.editorialGuardrail} */}
      <section className="border-b border-border bg-background pt-12 md:pt-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-text-dim transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" />
              All projects
            </Link>
          </motion.div>
        </div>
      </section>

      <ProjectDetailHero project={project} />

      <PAVBlock
        problem={detail.problem}
        approach={detail.approach}
        resultValue={detail.resultValue}
      />

      <ProofArtifactBlock text={detail.proofArtifact} />

      <RelatedInsights
        intro={detail.relatedInsightsIntro}
        insightSlugs={project.relatedInsightSlugs}
        unmatchedIds={project.relatedInsightIds}
      />

      <ContentCTA
        eyebrow="Next move"
        headline={detail.cta.text}
        body={`If this project sounds close to a decision in front of you, a short conversation is the fastest way to sort the next step. ${
          project.relatedOffer ? `Related offers: ${project.relatedOffer}.` : ""
        }`.trim()}
        primary={{
          label: "Start a conversation",
          to: detail.cta.primaryHref === "/contact"
            ? detail.cta.primaryHref
            : detail.cta.secondaryHref === "/contact"
              ? detail.cta.secondaryHref
              : "/contact",
        }}
        secondary={{
          label: "See starting points",
          to: detail.cta.primaryHref === "/contact"
            ? detail.cta.secondaryHref
            : detail.cta.primaryHref,
        }}
      />
    </div>
  );
};

export default ProjectDetail;
