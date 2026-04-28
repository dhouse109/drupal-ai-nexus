import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    title: "See how 109 helps",
    description:
      "A broader overview of the practice and where Damien typically plugs into the work.",
    to: "/services",
  },
  {
    title: "See starting points",
    description:
      "The clearest ways to begin if you already know the work needs structure.",
    to: "/offerings",
  },
  {
    title: "Explore Drupal AI",
    description:
      "A Drupal-specific path for content platforms, search, editorial workflows, and AI Initiative-aligned work.",
    to: "/drupal-ai",
  },
  {
    title: "Explore applied AI",
    description:
      "A broader decision framework for AI in products, workflows, search, and content operations.",
    to: "/applied-ai",
  },
];

const ExplorePathsSection = () => {
  return (
    <section className="border-t border-border py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Explore further
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            Choose the path that fits where you are
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            You can start with a broader view of the practice, compare shaped starting points, or go deeper into Drupal-specific and applied AI work.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={path.to}
                className="group flex h-full flex-col justify-between bg-background p-8 transition-colors duration-300 hover:bg-muted/20 md:p-10"
              >
                <div>
                  <h3 className="font-mono text-2xl font-bold tracking-tight">{path.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {path.description}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePathsSection;
