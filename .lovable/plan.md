# Fix card grid divider system

Scope: CSS / class-generation only. No design, copy, spacing, or content changes.

## Root cause

`src/lib/grid.ts` builds Tailwind class names with template strings like `${prefix}:border-t-0` and `${prefix}:border-l`. Tailwind's JIT scanner only sees literal class strings in source, so these never get generated. At `md`/`xl` breakpoints the base `border-t` (added unconditionally to every item except the first) stays visible on first-row items, producing stray top borders. Similar issues happen with `md:border-l-0` / `xl:border-l-0` resets.

## Fix

Rewrite `getCardGridItemClass` in `src/lib/grid.ts` so every possible returned class is a literal string in the source. Same public API (`cardGridClass`, `getCardGridItemClass({ index, itemCount, mdColumns, xlColumns })`), same call sites — no consumer changes required.

### Wrapper (unchanged)

```
grid md:grid-cols-2 xl:grid-cols-3
```

### Per-item logic

For each breakpoint (mobile = 1 col, md = 2 cols, xl = 3 cols), compute:

- `row = floor(index / cols)`
- `col = index % cols`
- top divider: `border-t` if `row > 0`, else explicit reset
- left divider: `border-l` if `col > 0`, else explicit reset

Mobile (always single column): first item gets nothing, others get `border-t`. No left borders ever at mobile.

md breakpoint: emit one of `md:border-t` / `md:border-t-0` and one of `md:border-l` / `md:border-l-0` based on row/col at 2 cols.

xl breakpoint: same with 3 cols, emitting `xl:border-t` / `xl:border-t-0` / `xl:border-l` / `xl:border-l-0`.

The reset variants (`*:border-t-0`, `*:border-l-0`) are required because an item that is a first-row item at `xl` may have been a non-first-row item at `md`, so we must actively cancel the lower-breakpoint border.

### Last-item span (preserved)

When `index === itemCount - 1`:

- md remainder 1 → add `md:col-span-2`
- xl remainder 1 → add `xl:col-span-3`
- xl remainder 2 → add `xl:col-span-2`

When the final item spans, treat its effective `col` as 0 for the left-border calculation at that breakpoint (so spanning items never get a stray left border), and recompute its row position so its top border still matches whether it is on the first row or not.

### Class allowlist

Every class the helper can return is one of:

```
border-border
border-t border-t-0 border-l border-l-0
md:border-t md:border-t-0 md:border-l md:border-l-0
xl:border-t xl:border-t-0 xl:border-l xl:border-l-0
md:col-span-2 md:col-span-3
xl:col-span-1 xl:col-span-2 xl:col-span-3
```

No template-generated Tailwind names. A safelist comment listing these literals will be added at the top of `grid.ts` so future readers (and Tailwind's scanner) see them all in one place.

## Files touched

- `src/lib/grid.ts` — rewrite helper, keep exports stable.

No other files need edits — `ProjectGrid`, `RelatedProjects`, `RelatedInsights`, `RelatedWorkBlock`, `Insights.tsx`, and `Portfolio.tsx` already consume `cardGridClass` + `getCardGridItemClass` and will pick up the fix automatically.

## Verification

After the change, screenshot at desktop viewport:

- `/portfolio` (all + a filtered category)
- `/insights` and `/insights?category=product-platform-architecture`
- `/applied-ai` (RelatedWorkBlock)
- an Insight detail with Related Projects
- a Project detail with Related Insights

Acceptance: no outer top/left/right/bottom frame on grids; internal dividers intact between rows and columns; final-row spans still render correctly.
