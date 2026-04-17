import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhySection = () => {
  return (
    <section id="why" className="border-t border-border py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Why 109.studio
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Senior technical leadership with the ability to stay close to the work
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16 lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Product decisions get better when strategy, research, and implementation stay connected. That makes it easier to test ideas earlier, reduce delivery risk, and build systems a team can sustain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              The work draws on platform experience, hands-on prototyping, and writing the important decisions down early. That usually leads to better scope, stronger technical foundations, and delivery systems teams can keep using as the product changes.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
            >
              Read more about the approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
