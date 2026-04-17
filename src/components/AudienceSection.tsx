import { motion } from "framer-motion";

const audienceGroups = [
  {
    title: "For founders and business leaders",
    description:
      "You have a product direction, a platform problem, or a technical initiative that matters, but need senior help shaping it, scoping it, and reducing avoidable risk.",
    bullets: [
      "Reduce technical risk early",
      "Clarify the roadmap and architecture",
      "Move toward launch with more confidence",
    ],
  },
  {
    title: "For technical teams and agencies",
    description:
      "You have delivery work underway, but need senior depth around architecture, modernization, or AI implementation that the current team cannot absorb without slowing down.",
    bullets: [
      "Senior help on complex platform work",
      "Architecture and implementation depth",
      "Better workflows and stronger delivery practices",
    ],
  },
];

const AudienceSection = () => {
  return (
    <section className="border-t border-border py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Who this work is for
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
            Two kinds of teams tend to get the most from 109
          </h2>
        </motion.div>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {audienceGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <h3 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
                {group.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {group.description}
              </p>
              <div className="mt-6 space-y-3">
                {group.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim"
                  >
                    {bullet}
                  </div>
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
