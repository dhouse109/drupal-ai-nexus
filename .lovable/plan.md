
Looking at the screenshot, the numbers (01, 02, 03) appear vertically misaligned with the text — they sit slightly higher than the text baseline because the mono font numbers render at a different visual height than the body text.

Let me check the current implementation in `InsightArticle.tsx`.

From the file I already viewed earlier, the list block renders as:
```tsx
<li className="flex gap-4 border-l border-border pl-4 ...">
  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
    {String(i + 1).padStart(2, "0")}
  </span>
  <span>{item}</span>
</li>
```

The issue: the number span is `text-xs` while the text is `text-base md:text-lg`. With `flex` and no alignment, they align at the top by default but the smaller mono number visually floats above the larger text's cap height, making it look misaligned.

## Fix

Add a small top padding/margin offset to the number span so its baseline aligns with the first line of body text. The cleanest approach:

1. Wrap the number in a fixed-width container so multi-digit numbers stay aligned
2. Add `pt-1.5 md:pt-2` to the number span to nudge it down to align optically with the larger body text
3. Use `leading-relaxed` consistently and `shrink-0` on the number span so it doesn't compress

### Change in `src/pages/InsightArticle.tsx` (lines 56-69):

Replace the list `<li>` with:
```tsx
<li
  key={i}
  className="flex gap-4 border-l border-border pl-4 text-base leading-relaxed text-muted-foreground md:text-lg"
>
  <span className="shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary md:pt-1.5">
    {String(i + 1).padStart(2, "0")}
  </span>
  <span>{item}</span>
</li>
```

Single-file, copy-only change. No structural or design-system changes needed.
