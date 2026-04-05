import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Research & Development Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-mono font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-8"
          >
            Building the future
            <br />
            of <span className="text-primary text-glow">Drupal</span> &{" "}
            <span className="text-primary text-glow">AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
          >
            We're an R&D studio driving the Drupal AI initiative forward.
            Open source tools. Cross-industry solutions. Built to give back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#focus"
              className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors text-center"
            >
              Explore Our Work
            </a>
            <a
              href="#partner"
              className="font-mono text-sm uppercase tracking-widest border border-border px-8 py-4 hover:border-primary hover:text-primary transition-colors text-center"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>

        {/* Terminal decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-80"
        >
          <div className="bg-surface border border-border p-5 font-mono text-xs">
            <div className="flex gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <div className="space-y-1.5 text-muted-foreground">
              <p><span className="text-primary">$</span> init 109.studio</p>
              <p className="text-text-dim">→ loading modules...</p>
              <p className="text-text-dim">→ drupal_ai <span className="text-primary">✓</span></p>
              <p className="text-text-dim">→ open_source <span className="text-primary">✓</span></p>
              <p className="text-text-dim">→ community <span className="text-primary">✓</span></p>
              <p className="mt-3"><span className="text-primary">$</span> ready<span className="animate-pulse-glow text-primary">_</span></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
