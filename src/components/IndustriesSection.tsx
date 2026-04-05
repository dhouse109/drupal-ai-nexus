import { motion } from "framer-motion";
import { Landmark, GraduationCap, DollarSign, Users, Hotel, Home, Building2 } from "lucide-react";

const contexts = [
  {
    icon: Landmark,
    title: "Civic tech",
    description: "Public information systems, governance-heavy content, and service workflows that need clarity, accessibility, and long-term maintainability.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Publishing platforms, search experiences, and structured content systems that help institutions communicate and scale knowledge.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Secure, structured, compliance-aware digital experiences where content and workflows need stronger technical foundations.",
  },
  {
    icon: Users,
    title: "HR and payroll",
    description: "Internal platforms and process-driven systems that benefit from clearer architecture and smarter automation patterns.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Operationally complex environments where service workflows, content management, and delivery experience need to work together.",
  },
  {
    icon: Home,
    title: "Property management",
    description: "Content and operations platforms that support listings, processes, communication, and service coordination.",
  },
  {
    icon: Building2,
    title: "Agency delivery",
    description: "Collaborative delivery models where senior technical depth, reusable assets, and platform thinking make teams stronger.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="border-t border-border py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Where This Work Applies</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Applied across content-heavy and workflow-heavy platforms.</h2>
        </motion.div>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {contexts.map((context, i) => (
            <motion.div key={context.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-background p-6 transition-colors hover:bg-surface">
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
