import { cn } from "@/lib/utils";
import type { StatusTone } from "@/data/taxonomy";

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
  className?: string;
}

const toneClass: Record<StatusTone, string> = {
  neutral: "border-border text-text-dim",
  accent: "border-primary/60 text-primary",
  muted: "border-border text-muted-foreground",
};

const StatusBadge = ({ label, tone = "neutral", className }: StatusBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em]",
      toneClass[tone],
      className,
    )}
  >
    {label}
  </span>
);

export default StatusBadge;
