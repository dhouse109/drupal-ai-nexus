import { motion } from "framer-motion";
import { Brain, GitFork, Blocks } from "lucide-react";

const focuses = [
  {
    icon: Brain,
    title: "Drupal AI Initiative",
    description:
      "We're a driving force in bringing AI capabilities natively into Drupal — from LLM integrations to intelligent content workflows and autonomous agents.",
    tags: ["GPT-4", "Claude", "LLM Pipelines", "Smart Content"],
  },
  {
    icon: Blocks,
    title: "R&D Engineering",
    description:
      "Rapid prototyping, MVP development, and experimental product design. We treat software as iterative research — always asking 'does it work, is it better?'",
    tags: ["Prototyping", "MVP", "Architecture", "DevOps"],
  },
  {
    icon: GitFork,
    title: "Open Source Tools",
    description:
      "We build and contribute reusable frameworks, modules, and developer tools back to the community. Better ecosystems make better products for everyone.",
    tags: ["Drupal Modules", "Dev Tools", "GraphQL", "APIs"],
  },
];

const FocusSection = () => {
  return (
    <section id="focus" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="font-mono font-bold text-3xl md:text-5xl tracking-tight">
            Three pillars of
            <br />
            our practice
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-surface transition-colors"
            >
              <f.icon className="w-8 h-8 text-primary mb-6 group-hover:text-glow transition-all" />
              <h3 className="font-mono font-semibold text-xl mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {f.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-text-dim border border-border px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
