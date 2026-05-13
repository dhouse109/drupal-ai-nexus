# Bump grid divider opacity to /25

Change all grid divider border opacity classes from `border-border/20` (and `border/20` variants) to `/25` so the dividers are more visible against the new Charcoal & Ivory palette.

## Files to update

- `src/lib/grid.ts` — replace `md:border-b-border/20`, `md:border-r-border/20`, `xl:border-b-border/20`, `xl:border-r-border/20` with `/25` (including the safelist comment block).
- `src/components/FocusSection.tsx` — `md:border-r md:border-border/20` → `/25`.
- `src/pages/AppliedAI.tsx` — same swap (1 line).
- `src/pages/Services.tsx` — 5 lines, all `border-border/20` → `/25`.

No other style changes. After this, you can say "lower" to go back to /20 or "up again" to try /30.
