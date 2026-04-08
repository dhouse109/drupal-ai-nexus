import { ArrowRight, Github, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organization: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Please describe what you are working on").max(5000),
});

const inquiryTypes = [
  {
    title: "Technical direction and strategy",
    description:
      "For teams that need clearer architecture choices, roadmap guidance, or senior technical judgment before delivery gets more expensive.",
  },
  {
    title: "Product and platform delivery",
    description:
      "For organizations that need platform modernization, delivery support, or deeper engineering capacity on active work.",
  },
  {
    title: "Agency and partner collaboration",
    description:
      "For agencies and technical teams looking for a senior partner for implementation support, architecture work, or shared systems initiatives.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      organization: result.data.organization || null,
      message: result.data.message,
    });

    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again or email hello@109.studio directly.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl font-mono text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Start the right product or platform conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Whether you need senior technical direction, delivery support, or a strong partner
            for a complex initiative, this is the place to start.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-24">
        <div className="container grid gap-px bg-border md:grid-cols-3">
          {inquiryTypes.map((type) => (
            <div key={type.title} className="bg-background p-8 md:p-10">
              <h2 className="font-mono text-2xl font-bold tracking-tight">{type.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Get in touch
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
              Tell Damien what you are working on
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A strong first message usually includes what you are building, where things are
              stuck, and whether you are looking for strategy, delivery support, or collaboration.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Damien typically responds within one business day.
            </p>

            <div className="mt-8 border border-border bg-surface p-6">
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                <Mail className="h-4 w-4" />
                Or email directly
              </div>
              <a
                href="mailto:hello@109.studio"
                className="mt-3 block font-mono text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
              >
                hello@109.studio
              </a>
              <a
                href="https://github.com/dhouse109/drupal-ai-nexus"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                View project repo
              </a>
            </div>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-6 h-12 w-12 text-primary" />
                <h3 className="font-mono text-2xl font-bold tracking-tight">Message received</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Thanks for reaching out. Damien will review your message and get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="organization" className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-foreground">
                    Organization <span className="normal-case tracking-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Company or team name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-foreground">
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Describe what you are building, where things feel unclear, and what kind of help would be most useful."
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send inquiry"}
                  {!loading && <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
