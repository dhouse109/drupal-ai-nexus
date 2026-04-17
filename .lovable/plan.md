

## Fix odd-count grid on /insights "Recent entries"

The grid in `src/pages/Insights.tsx` (around line ~119) is:
```
md:grid-cols-2 xl:grid-cols-3
```

Apply the same last-item-spans-remaining pattern used on `IndustriesSection.tsx` and `Services.tsx`. Because Insights has two breakpoints, the rule needs to cover both:

- At `md` (2 cols): if `articles.length` is odd, last card spans 2.
- At `xl` (3 cols): if `articles.length % 3 === 1`, last card spans 3; if `% 3 === 2`, last card spans 2.

### Change

In `src/pages/Insights.tsx`, in the `articles.map(...)` Link, conditionally append span classes to the existing `className`:

```ts
const isLast = index === articles.length - 1;
const mdSpan = articles.length % 2 === 1 ? "md:col-span-2" : "";
const xlRemainder = articles.length % 3;
const xlSpan =
  xlRemainder === 1 ? "xl:col-span-3" :
  xlRemainder === 2 ? "xl:col-span-2" : "";
const spanClass = isLast ? `${mdSpan} ${xlSpan}` : "";
```

Then add `spanClass` to the Link's className. Add `index` to the map callback signature.

No other files touched. Visual system, voice, and CTA rules unchanged.

