
The previous fix added `pt-1 md:pt-1.5` but the numbers still sit too high. Looking at the screenshot, the numbers (01, 02, 03) are clearly above the title baseline. The title is `text-xl font-semibold` (~20px) while the number is `text-sm` (~14px), so a larger nudge is needed.

Note: the user is on `/about`, but the same numbered list pattern appears on About too. Let me check.

Actually the screenshot shows "HOW DAMIEN WORKS" — that's the About page. Let me verify by checking About.tsx for the same pattern, then increase the padding across all pages using this pattern.

## Fix

Increase the top padding on the number column to better align with the larger title baseline. Change `pt-1 md:pt-1.5` → `pt-2 md:pt-2.5`.

**Files to update** (same pattern in each):
- `src/pages/Services.tsx` (line 216)
- `src/pages/Offerings.tsx` (line 332)
- `src/pages/About.tsx` (if same pattern present — will verify and update)

Replace:
```tsx
<div className="pt-1 font-mono text-sm text-text-dim md:pt-1.5">0{index + 1}</div>
```
With:
```tsx
<div className="pt-2 font-mono text-sm text-text-dim md:pt-2.5">0{index + 1}</div>
```

Copy-only change, no layout impact.
