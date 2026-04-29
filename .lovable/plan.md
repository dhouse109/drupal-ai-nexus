## Goal
Make the homepage hero CTA buttons ("Start a conversation", "See how 109 helps") match the smaller, site-standard sizing used on the Drupal AI hero.

## Change
In `src/components/HeroSection.tsx`, update the two CTA links:

- Replace `px-8 py-4 ... text-sm` with `px-5 py-3 ... text-xs uppercase tracking-[0.3em]` to mirror Drupal AI's hero buttons.
- Keep the same labels, icons, routes, and primary/secondary visual hierarchy.
- Reduce the arrow icon to `h-3.5 w-3.5` to match.

Result: shorter button height and tighter type, consistent with CTAs elsewhere on the site.

## Files
- `src/components/HeroSection.tsx` (only the two CTA `<Link>` elements)

No other pages or components are affected.