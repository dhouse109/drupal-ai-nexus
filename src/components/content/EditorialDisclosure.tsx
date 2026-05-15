import { Link } from "react-router-dom";

interface EditorialDisclosureProps {
  aiAssisted?: boolean;
  label?: string;
  note?: string;
  reviewedBy?: string;
  lastReviewedAt?: string;
  variant?: "inline" | "block";
  className?: string;
}

const DEFAULT_LABEL = "AI-assisted · Human-reviewed";
const DEFAULT_NOTE =
  "Drafted with AI assistance from Damien House's notes and source materials. Reviewed and edited before publication.";

const Chip = ({ label, note }: { label: string; note: string }) => (
  <span
    className="inline-flex items-center border border-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-text-dim"
    aria-label={`${label}. ${note}`}
    title={note}
  >
    <span aria-hidden="true">{label}</span>
    <span className="sr-only">{note}</span>
  </span>
);

const EditorialDisclosure = ({
  aiAssisted,
  label,
  note,
  reviewedBy,
  lastReviewedAt,
  variant = "inline",
  className,
}: EditorialDisclosureProps) => {
  if (!aiAssisted) return null;

  const resolvedLabel = label ?? DEFAULT_LABEL;
  const resolvedNote = note ?? DEFAULT_NOTE;

  if (variant === "inline") {
    return (
      <span className={className}>
        <Chip label={resolvedLabel} note={resolvedNote} />
      </span>
    );
  }

  return (
    <div className={["flex flex-col gap-3", className].filter(Boolean).join(" ")}>
      <Chip label={resolvedLabel} note={resolvedNote} />
      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
        {resolvedNote}{" "}
        <Link
          to="/editorial-policy"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          Editorial policy
        </Link>
        .
      </p>
      {(reviewedBy || lastReviewedAt) && (
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-text-dim">
          {reviewedBy && <>Reviewed by {reviewedBy}</>}
          {reviewedBy && lastReviewedAt && <span aria-hidden="true"> · </span>}
          {lastReviewedAt && <>Last reviewed {lastReviewedAt}</>}
        </p>
      )}
    </div>
  );
};

export default EditorialDisclosure;
