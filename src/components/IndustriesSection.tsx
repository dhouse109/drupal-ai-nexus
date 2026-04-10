import { motion } from "framer-motion";
import { Landmark, GraduationCap, Workflow, Layers3, Building2 } from "lucide-react";

const contexts = [
  {
    icon: Landmark,
    title: "Civic and public information platforms",
    description:
      "Accessible, service-oriented systems where content clarity, governance, and reliability need to work together.",
  },
  {
    icon: GraduationCap,
    title: "Editorial and publishing systems",
    description:
      "Content-rich platforms that need better structure, stronger workflows, and more useful discovery as they grow.",
  },
  {
    icon: Workflow,
    title: "Operational and internal tools",
    description:
      "Process-heavy systems where better architecture and practical automation reduce friction for teams.",
  },
  {
    icon: Layers3,
    title: "Complex service platforms",
    description:
      "Platforms where content, coordination, user experience, and ongoing operations all need to stay aligned.",
  },
  {
    icon: Building2,
    title: "Agency and team augmentation",
    description:
      "Delivery environments where senior technical depth can help an existing team move faster and make better decisions.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="border-t border-border py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Where this work tends to fit
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            Best suited to environments where content, workflows, and operational complexity all matter
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            109.studio is strongest in settings where the platform is doing real work for the
            organization, not just presenting information. That usually means structure, search,
            publishing operations, user experience, and long-term maintainability all matter at the
            same time.
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
              className={`bg-background p-6 ${
                i === contexts.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <context.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-mono text-lg font-semibold uppercase tracking-wide">
                {context.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {context.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
