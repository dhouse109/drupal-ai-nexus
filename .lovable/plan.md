## Goal
Make the Portfolio "All projects" grid render dividers identically to the Insights "Published notes" grid: internal-only dividers, no outer frame, no doubled lines.

## Root cause
Both grids use the same parent: `grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3`. This relies on each child having a solid background (which it does) and **no per-card border**, so the 1px gaps reveal `bg-border` as clean internal dividers.

- `InsightCard` correctly uses `border border-transparent ... hover:border-border` — border only appears on hover, never frames the grid.
- `ProjectCard` uses `border border-border ... hover:border-primary` on every card. That paints a visible border around every cell, which:
  - creates an outer frame around the whole grid,
  - sits adjacent to the 1px gap dividers and reads as doubled/thicker internal lines.

## Change (single file)
`src/components/projects/ProjectCard.tsx` — split border classes by variant:

- `variant="featured"` (used standalone on Portfolio above the grid): keep `border border-border ... hover:border-primary`.
- `variant="default"` (used inside `ProjectGrid`): switch to `border border-transparent ... hover:border-border`, mirroring `InsightCard`. Hover affordance is preserved (border appears on hover, just sourced from `border` token instead of `primary` to match the Insights grid behavior — or keep `hover:border-primary` if a stronger hover is preferred; both produce the same correct grid borders).

No other files touched. No changes to `ProjectGrid`, `src/lib/grid.ts`, copy, spacing, padding, or layout.

## Open question
Hover color on default cards: match Insights exactly (`hover:border-border`) or keep the Portfolio's existing stronger `hover:border-primary` accent? Default to keeping `hover:border-primary` since the request is only about the divider/frame behavior, not hover color.

## Verification
- Screenshot `/portfolio` at desktop and compare to `/insights` Published notes section.
- Confirm: no outer frame, no top border on first row, no left border on first column, internal vertical and horizontal dividers present, last-item span behavior unchanged.
