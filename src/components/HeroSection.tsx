import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="container relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              109.studio · Product engineering, platform architecture, and applied AI
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 max-w-5xl font-mono text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
          >
            Senior technical direction
            <br />
            for <span className="text-primary text-glow">complex products and platforms</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            109.studio helps founders, agencies, and technical teams shape architecture,
            modernize platforms, and turn complex ideas into systems teams can run with confidence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            20+ years across startups, public-sector platforms, and agency delivery environments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-center font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="border border-border px-8 py-4 text-center font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              See how 109 helps
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
