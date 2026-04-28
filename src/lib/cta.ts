import { useLocation } from "react-router-dom";

export type CtaTarget = { label: string; to: string };

/**
 * Returns the given CTA target, or a fallback if it would point to the current page.
 *
 * Use only when a CTA's destination is dynamic or shared across routes
 * (e.g. the global footer card, or a CTA built from data).
 *
 * Page-local CTAs should keep their explicit destinations — they are written
 * intentionally for that page and changing them adds risk without benefit.
 */
export const useSafeCtaTarget = (
  to: string,
  currentLabel: string,
  fallback: CtaTarget,
): CtaTarget => {
  const { pathname } = useLocation();
  return pathname === to ? fallback : { label: currentLabel, to };
};
