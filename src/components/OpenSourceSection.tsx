import { motion } from "framer-motion";
import { Github, Heart, ArrowRight } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-32 relative border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Open Source
            </span>
            <h2 className="font-mono font-bold text-3xl md:text-5xl tracking-tight mb-6">
              Built to give
              <br />
              back
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              We believe the best software is built in the open. Every tool we
              create strengthens the ecosystem. Every contribution raises the
              bar for everyone.
            </p>
            <div className="flex items-center gap-3 text-primary font-mono text-sm uppercase tracking-widest">
              <Github className="w-4 h-4" />
              <span>View our contributions</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { name: "drupal/ai-toolkit", desc: "AI integration layer for Drupal CMS", stars: "—" },
              { name: "109/content-intelligence", desc: "Smart content workflows powered by LLMs", stars: "—" },
              { name: "109/devops-starter", desc: "CI/CD templates for Drupal projects", stars: "—" },
            ].map((repo) => (
              <div
                key={repo.name}
                className="border border-border p-6 hover:border-primary/40 hover:bg-surface transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </span>
                  <div className="flex items-center gap-1 text-text-dim">
                    <Heart className="w-3 h-3" />
                    <span className="font-mono text-[10px]">{repo.stars}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{repo.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
