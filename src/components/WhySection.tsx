import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhySection = () => {
  return (
    <section id="why" className="border-t border-border py-32 md:py-40">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Why 109.studio</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Senior technical leadership meets hands-on execution.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16 lg:max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              109.studio combines strategy, experimentation, and implementation so product decisions can be tested before they become expensive. The work is shaped by platform thinking, research-driven iteration, and a bias toward building systems that teams can actually sustain.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              The goal is not novelty for its own sake. 109.studio prioritizes reusable assets, clearer workflows, and pragmatic technical foundations that are secure, maintainable, and ready for change as products and organizations evolve.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary transition-colors hover:text-primary/80">
              Read the methodology
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
