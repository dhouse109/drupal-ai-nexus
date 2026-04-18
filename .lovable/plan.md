
## Issue

In both `src/pages/Services.tsx` (line 216) and `src/pages/Offerings.tsx` (line 332), the numbered list renders as:

```tsx
<div className="grid gap-4 md:grid-cols-[60px_1fr]">
  <div className="font-mono text-sm text-text-dim">0{index + 1}</div>
  <div>
    <h3 className="font-mono text-xl font-semibold">{step.title}</h3>
    ...
```

The number column is `text-sm` while the title is `text-xl font-semibold`. Both sit at the top of their grid cell, so the smaller number appears to float above the title's optical baseline (visible in the screenshot — "01" sits noticeably higher than "Start with the problem").

## Fix

Nudge the number down with a small top padding so its baseline aligns with the title's first line. This matches the same fix already applied to `InsightArticle.tsx`.

**Change in `src/pages/Services.tsx` (line 216):**
```tsx
<div className="pt-1 font-mono text-sm text-text-dim md:pt-1.5">0{index + 1}</div>
```

**Change in `src/pages/Offerings.tsx` (line 332):**
```tsx
<div className="pt-1 font-mono text-sm text-text-dim md:pt-1.5">0{index + 1}</div>
```

Two-line, copy-only change. No layout or design system changes.
