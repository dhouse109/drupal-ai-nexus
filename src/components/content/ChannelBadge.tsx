import { cn } from "@/lib/utils";

interface ChannelBadgeProps {
  channel: string;
  className?: string;
}

/**
 * Cross-channel badge. Per current policy, this never renders an external link.
 * If a destination URL for damien.house becomes available, swap to an <a> with
 * rel="noopener" target="_blank".
 */
const ChannelBadge = ({ channel, className }: ChannelBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center border border-border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-text-dim",
      className,
    )}
  >
    {channel}
  </span>
);

export default ChannelBadge;
