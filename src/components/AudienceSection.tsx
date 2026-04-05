import { motion } from "framer-motion";

const audienceGroups = [
  {
    title: "For founders and business leaders",
    description:
      "When the product vision is clear but technical execution is still uncertain, 109.studio helps reduce risk, shape the build, and create a more credible path from idea to launch.",
    bullets: ["De-risk technical investments", "Clarify architecture and roadmap", "Move toward launch with more confidence"],
  },
  {
    title: "For technical teams and agencies",
    description:
      "When delivery leaves little room for exploration or specialized architecture work, 109.studio adds senior depth, focused implementation support, and practical research and development capacity.",
    bullets: ["Senior support for complex platform work", "Architecture and implementation depth", "Team enablement and developer workflows"],
  },
];

const AudienceSection = () => {
  return (
    <section className="border-t border-border py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">Who We Help</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">Two engagement models shaped around how decisions get made and how delivery actually happens.</h2>
        </motion.div>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {audienceGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-background p-8 md:p-10">
              <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">{group.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{group.description}</p>
              <div className="mt-6 space-y-3">
                {group.bullets.map((bullet) => (
                  <div key={bullet} className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">{bullet}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
