import { motion } from "framer-motion";
import { Landmark, GraduationCap, Workflow, Layers3, Building2 } from "lucide-react";

const contexts = [
  {
    icon: Landmark,
    title: "Civic and public information platforms",
    description: "Accessible, governance-aware systems where content clarity, service workflows, and long-term maintainability all matter at once.",
  },
  {
    icon: GraduationCap,
    title: "Editorial and publishing systems",
    description: "Content-rich platforms that need stronger structure, search, workflows, and publishing operations as they grow.",
  },
  {
    icon: Workflow,
    title: "Operational and internal tools",
    description: "Process-heavy systems where better architecture, clearer workflows, and practical automation reduce friction for teams.",
  },
  {
    icon: Layers3,
    title: "Complex service platforms",
    description: "Delivery environments where content, coordination, user experience, and ongoing operations all need to work together.",
  },
  {
    icon: Building2,
    title: "Agency and team augmentation",
    description: "Collaborative delivery models where senior architecture, reusable assets, and platform thinking help existing teams move faster.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="border-t border-border py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Where This Work Lands Well</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Built for complex content, workflows, and operational change.</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            109.studio is most effective in environments where content structure, service workflows, delivery systems, and long-term maintainability all need to work together.
          </p>
        </motion.div>
        <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-5">
          {contexts.map((context, i) => (
            <motion.div
              key={context.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background p-6 transition-colors hover:bg-surface"
            >
              <context.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-mono text-lg font-semibold uppercase tracking-wide">{context.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{context.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
