## Goal

Make the hover-highlight effect consistent across all card surfaces — Portfolio Work and Insights, both in grid collections and featured blocks — matching the existing Insight grid card pattern (subtle border + subtle background tint).

## Current state

| Surface | File | Hover today |
|---|---|---|
| Insight grid card | `src/components/insights/InsightCard.tsx` | `hover:border-border hover:bg-muted/20` (border + bg tint) |
| Project grid card | `src/components/projects/ProjectCard.tsx` (default) | `hover:border-primary` only — no bg shift, different border color |
| Featured project card | same file, `variant="featured"` | `hover:border-primary` only, starts with `bg-surface` |
| Featured insight card | inline in `src/pages/Insights.tsx` (lines 89–116) | `hover:border-primary` only, starts with `bg-surface` |

So there are two inconsistencies:
1. Project grid cards highlight border only, and with a different color than Insight grid cards.
2. Both featured cards (project + insight) only highlight the border; no subtle background tint.

## Proposed unified pattern

One rule for every interactive content card:

- Border transitions to `border-border` (soft, matches Insight grid card today).
- Background gains a subtle tint:
  - Cards starting on `bg-background` (transparent grid cards): `hover:bg-muted/20`.
  - Cards starting on `bg-surface` (featured cards): `hover:bg-surface-hover` (token already defined in `index.css`).
- Keep existing transition `transition-all duration-300 ease-out`.
- Keep `group-hover:translate-x-1` on the arrow.

This treats `hover:border-primary` (the louder accent) as the exception, not the default. None of the card surfaces in scope need the louder accent.

## Changes

1. **`src/components/projects/ProjectCard.tsx`**
   - Default variant: replace `hover:border-primary` with `hover:border-border hover:bg-muted/20`. Add `transition-all duration-300 ease-out` (currently `transition-colors`) so the bg tint animates smoothly.
   - Featured variant: replace `hover:border-primary` with `hover:border-border hover:bg-surface-hover`. Same transition update.

2. **`src/pages/Insights.tsx`** (featured insight Link, ~line 91)
   - Replace `hover:border-primary` with `hover:border-border hover:bg-surface-hover`. Transition class is already `transition-all duration-300 ease-out`.

3. **`src/components/insights/InsightCard.tsx`**
   - No change. This is the reference pattern.

## Out of scope

- Informational (non-interactive) cards — memory rule already forbids hover highlights on those.
- CTA buttons, nav links, and other non-card interactive elements.
- Grid divider behavior (recently fixed; untouched here).

## Verification

- Visit `/portfolio`, `/insights`, `/applied-ai` (Concrete Proof + Related Insights), and any service page using `RelatedWorkBlock`. Hover each card; confirm identical soft border + subtle background tint, and that featured cards behave the same way as grid cards.
