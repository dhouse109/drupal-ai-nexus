

## Make in-body CTAs route-aware

### Audit results — actual self-references found today

After scanning every `<Link to="...">` across all pages and shared sections (HeroSection, PartnerSection, WhySection, plus all pages), there are **two real self-references** in in-body CTAs that exist right now:

1. **`/services` page, mid-page "Starting offers" section** (`Services.tsx` line 220–225)
   - Secondary CTA: `See starting points` → `/offerings` ✅ ok
   - Wait — re-reading: the primary heading on this section invites the reader to *Offerings*, and the secondary CTA points to `/offerings`. Not self-referential. **Clean.**

2. **`/services` page, bottom "Next step" CTA card** (`Services.tsx` line 312–316)
   - `See starting points` → `/offerings`. **Clean.**

3. **`/offerings` page, "2-Week architecture audit" card** (`Offerings.tsx` line 278–286)
   - `Learn more` → `/architecture-audit`. **Clean.**

4. **`/offerings` page, bottom CTA card** (`Offerings.tsx` line 391–396)
   - `See AI in practice` → `/ai-in-practice`. **Clean.**

5. **`/architecture-audit` page, hero CTA** (`ArchitectureAudit.tsx` line 177–182)
   - `See starting points` → `/offerings`. **Clean.**

6. **`/architecture-audit` page, bottom CTA card** (`ArchitectureAudit.tsx` line 362–367)
   - `See starting points` → `/offerings`. **Clean.**

7. **`/applied-ai` bottom CTA** → `/ai-in-practice`. **Clean.**
8. **`/ai-in-practice` bottom CTA** → `/offerings`. **Clean.**
9. **`/about` bottom CTA** → `/offerings`. **Clean.**
10. **`/insights/:slug` bottom CTA** → `/offerings`. **Clean.**
11. **`/contact` inline link** → `/architecture-audit`. **Clean.**
12. **`HeroSection` (homepage)** → `/services`. **Clean** (homepage isn't `/services`).
13. **`PartnerSection` (homepage)** → `/services`. **Clean**.
14. **`WhySection` (homepage)** → `/about`. **Clean**.
15. **`DrupalAI` bottom CTA** → `/ai-in-practice`. **Clean**.

**Conclusion: no in-body CTAs are self-referential today.** The Layout footer fix from the previous round already covered the only real risk surface (a globally rendered card that didn't know what page it was on).

### Why making in-body CTAs route-aware now would be over-engineering

In-body CTAs live on a specific page and are written for that page's context — both label *and* destination are intentional. Unlike the global footer, they cannot drift into a self-reference unless the page itself is restructured, in which case the author is already editing the file.

Adding `useLocation()` plumbing and a fallback target to every page-local CTA would:
- add code paths that will essentially never trigger
- make CTA copy harder to reason about (the visible label and destination diverge from what the file says)
- duplicate the route-awareness logic the global footer card already centralizes

### Lightweight safeguard instead — a small helper

Rather than rewrite every page, add one tiny utility that any CTA *could* opt into when the destination is genuinely ambiguous (e.g., a CTA built from data, or a CTA shared across multiple routes).

**New file**: `src/lib/cta.ts`

```ts
import { useLocation } from "react-router-dom";

/**
 * Returns the given CTA target, or a fallback if it would point to the current page.
 * Use only when a CTA's destination is dynamic / shared across routes.
 * Page-local CTAs should keep their explicit destinations.
 */
export const useSafeCtaTarget = (
  to: string,
  fallback: { label: string; to: string },
  currentLabel: string,
): { label: string; to: string } => {
  const { pathname } = useLocation();
  return pathname === to ? fallback : { label: currentLabel, to };
};
```

Plus a short note at the top of `docs/cta-copy-guidelines.md` explaining: page-local CTAs are written intentionally and don't need this; only use `useSafeCtaTarget` for CTAs whose destination is data-driven or shared (like the Layout footer card, which can be migrated to use it for consistency).

### Optional: migrate the Layout footer card to the helper

`src/components/Layout.tsx` already does the same logic inline via `secondaryCtaMap`. We can refactor it to use `useSafeCtaTarget` so there's one canonical place for the rule. Purely a tidy-up — behavior unchanged.

### Files touched

- `src/lib/cta.ts` (new — small helper + JSDoc)
- `docs/cta-copy-guidelines.md` (append a short "Route-aware CTAs" section)
- `src/components/Layout.tsx` (optional refactor to use the helper)

### What this is *not* doing

- Not modifying any page-level CTAs. They are correct today and changing them would add risk without benefit.
- Not introducing a new visual pattern.
- Not changing voice or copy.

