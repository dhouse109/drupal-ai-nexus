import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="partner" className="py-32 relative border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Handshake className="w-10 h-10 text-primary mx-auto mb-6" />

          <h2 className="font-mono font-bold text-3xl md:text-5xl tracking-tight mb-6">
            Let's build
            <br />
            together
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We're looking for agencies and teams who share our passion for
            Drupal, AI, and open source. Whether you want to co-develop tools,
            share research, or tackle client projects — let's cooperate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@109.studio"
              className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-px bg-border max-w-lg mx-auto">
            {[
              { num: "20+", label: "Years Experience" },
              { num: "7", label: "Industries" },
              { num: "∞", label: "Open Source" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-6 text-center">
                <div className="font-mono text-2xl font-bold text-primary mb-1">
                  {s.num}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-text-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
