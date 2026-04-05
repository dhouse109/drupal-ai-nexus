import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  DollarSign,
  Users,
  Hotel,
  Home,
} from "lucide-react";

const industries = [
  { icon: Landmark, label: "Civic Tech", number: "01" },
  { icon: GraduationCap, label: "Education", number: "02" },
  { icon: DollarSign, label: "Finance", number: "03" },
  { icon: Building2, label: "Payroll", number: "04" },
  { icon: Users, label: "Human Resources", number: "05" },
  { icon: Hotel, label: "Hospitality", number: "06" },
  { icon: Home, label: "Property Mgmt", number: "07" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-32 relative border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Industries
          </span>
          <h2 className="font-mono font-bold text-3xl md:text-5xl tracking-tight">
            Solutions that span
            <br />
            across sectors
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background p-6 flex flex-col items-center text-center group hover:bg-surface transition-colors cursor-default"
            >
              <span className="font-mono text-[10px] text-text-dim mb-4">
                {ind.number}
              </span>
              <ind.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                {ind.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
