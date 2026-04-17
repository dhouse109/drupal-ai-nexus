

## Clickable card hover effects — audit

I scanned every `<Link>`/`<NavLink>`-wrapped card across pages and shared sections. There are **4 distinct clickable card patterns** in use, and they are **not consistent**.

### The Contact page reference (the "smooth" one you set)

`src/pages/Contact.tsx` line 162 — "Before you reach out" cards:
```
border border-transparent bg-background p-8
transition-all duration-300 ease-out
hover:border-border hover:bg-muted/20
md:p-10
```
Key traits: `transition-all`, **`duration-300`**, **`ease-out`**, hover swaps a transparent border → visible border + subtle bg tint.

### The four clickable card variants found

| # | File | Lines | Hover classes | Matches Contact? |
|---|---|---|---|---|
| A | `src/pages/Contact.tsx` | 160–162 | `transition-all duration-300 ease-out hover:border-border hover:bg-muted/20` | ✅ reference |
| B | `src/components/ExplorePathsSection.tsx` | 62–64 | `transition-colors duration-300 hover:bg-muted/20` | ⚠️ partial (300ms but `transition-colors`, no border swap) |
| C | `src/pages/Insights.tsx` featured article | 86–88 | `transition-colors hover:border-primary` (no duration → 150ms default) | ❌ |
| D | `src/pages/Insights.tsx` recent entries | 134–137 | `transition-colors hover:bg-surface` (no duration → 150ms default) | ❌ |

That's it for *clickable cards*. Everything else flagged in my search (buttons, nav links, footer links) are pill/button CTAs and outside the scope of this question.

### Inconsistencies vs. the Contact reference

1. **Duration mismatch**: Contact uses `duration-300`. Insights featured + recent both omit duration entirely, falling back to Tailwind's 150ms default — this is the "sudden" feel you fixed before.
2. **Easing mismatch**: Contact uses `ease-out`. None of the others specify easing.
3. **Transition scope**: Contact uses `transition-all` (so border + bg both animate). Others use `transition-colors`. For the Insights featured card (which animates `border-color`) this is fine, but for consistency `transition-all` keeps the rule simple.
4. **Hover effect itself**: Contact uses border + subtle bg tint together. The two Insights cards each use only one of the two — featured swaps border color to primary, recent shifts background. Neither matches the gentle dual effect of Contact.

### Proposed fix

Standardize all clickable informational cards on the Contact pattern. Concretely:

**ExplorePathsSection (`src/components/ExplorePathsSection.tsx` line 64)** — already 300ms but missing border + ease:
- From: `group flex h-full flex-col justify-between bg-background p-8 transition-colors duration-300 hover:bg-muted/20 md:p-10`
- To: `group flex h-full flex-col justify-between border border-transparent bg-background p-8 transition-all duration-300 ease-out hover:border-border hover:bg-muted/20 md:p-10`

**Insights featured (`src/pages/Insights.tsx` line 88)** — already has a visible border, so just match timing/easing:
- From: `group block border border-border bg-surface p-8 transition-colors hover:border-primary md:p-10`
- To: `group block border border-border bg-surface p-8 transition-all duration-300 ease-out hover:border-primary md:p-10`
- (Keep `hover:border-primary` since this is a *featured* card and the stronger highlight is intentional. Only the smoothness changes.)

**Insights recent entries (`src/pages/Insights.tsx` line 137)** — currently no border at all, snaps bg:
- From: `` `group block bg-background p-8 transition-colors hover:bg-surface md:p-10 ${spanClass}` ``
- To: `` `group block border border-transparent bg-background p-8 transition-all duration-300 ease-out hover:border-border hover:bg-muted/20 md:p-10 ${spanClass}` ``
- Brings these in line with the Contact "browse a little more first" cards, which they functionally resemble.

After this, every clickable card on the site uses the same `transition-all duration-300 ease-out` timing, with the same `hover:border-border hover:bg-muted/20` effect (or `hover:border-primary` only for the deliberately stronger featured-article card).

### Files touched

- `src/components/ExplorePathsSection.tsx` (1 className)
- `src/pages/Insights.tsx` (2 classNames — featured + recent)

`Contact.tsx` is unchanged — it's the reference.

### Memory update

After approval, I'll add a short note to `mem://style/ui-components/cta` (or a new `mem://style/clickable-cards` entry) recording the canonical clickable-card hover recipe so future cards stay consistent.

