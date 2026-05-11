interface PAVBlockProps {
  problem: string;
  approach: string;
  resultValue: string;
}

const sections: { eyebrow: string; key: keyof PAVBlockProps }[] = [
  { eyebrow: "Problem", key: "problem" },
  { eyebrow: "Approach", key: "approach" },
  { eyebrow: "Value", key: "resultValue" },
];

const PAVBlock = (props: PAVBlockProps) => (
  <section className="border-b border-border py-20 md:py-24">
    <div className="container">
      <div className="mx-auto grid max-w-4xl gap-6">
        {sections.map(({ eyebrow, key }) => (
          <article
            key={key}
            className="border border-border bg-surface p-8 md:p-10"
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </div>
            <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
              {props[key]}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PAVBlock;
