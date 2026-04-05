import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    title: "Embedded architecture support",
    description: "Step into active delivery work where teams need senior technical judgment, sharper architecture decisions, or help untangling platform complexity.",
  },
  {
    title: "Drupal AI prototyping",
    description: "Explore new workflow ideas, AI-assisted delivery patterns, and reusable systems without forcing a larger commitment too early.",
  },
  {
    title: "Shared delivery and open source work",
    description: "Collaborate on modules, tooling, research, and client-facing initiatives that strengthen both immediate delivery and the broader ecosystem.",
  },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="border-t border-border py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
          <Handshake className="mb-6 h-10 w-10 text-primary" />
          <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight md:text-5xl">A better fit for agencies and teams that want a true technical partner.</h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            109.studio works best with agencies, delivery teams, and product groups that need senior technical depth, practical R and D capacity, and a partner who can contribute to both systems and outcomes.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div key={model.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-background p-8 md:p-10">
              <h3 className="font-mono text-xl font-semibold">{model.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
            Discuss a collaboration
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary">
            Review engagement options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
