interface ProofArtifactBlockProps {
  text: string;
}

const ProofArtifactBlock = ({ text }: ProofArtifactBlockProps) => (
  <section className="border-b border-border py-16 md:py-20">
    <div className="container">
      <div className="mx-auto max-w-3xl border border-border bg-surface p-8 md:p-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Proof artifact
        </div>
        <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
          {text}
        </p>
      </div>
    </div>
  </section>
);

export default ProofArtifactBlock;
