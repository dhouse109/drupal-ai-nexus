import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProject } from "@/data/projects";

const FeaturedProjectSection = () => {
  const featured = getFeaturedProject();
  if (!featured) return null;

  return (
    <section className="grid-bg border-t border-border py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Selected work
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              A featured project from the portfolio
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.3em] text-primary md:self-end"
          >
            View all work
            <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProjectCard project={featured} variant="featured" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
