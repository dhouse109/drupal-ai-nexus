
The Navbar in `src/components/Navbar.tsx` uses `gap-8` on the desktop nav links container, but the logo and the nav links container are siblings of the flex parent which uses `justify-between`. The collision in the screenshot happens because at narrower widths the logo "109.studio" runs right up against "HOME".

Looking at the screenshot, the actual rendered nav appears to be different from what's in `src/components/Navbar.tsx` (it shows HOME, ABOUT, HOW WE HELP, OFFERINGS, APPLIED AI, CONTACT, START A CONVERSATION). That suggests the real navigation lives elsewhere — likely in `src/components/Layout.tsx`. I'll need to verify which file actually renders the navbar before planning the fix.

## Plan

1. Inspect `src/components/Layout.tsx` (and any related nav file) to find the actual navigation rendering "HOME / ABOUT / HOW WE HELP / ..." shown in the screenshot.
2. Add horizontal spacing (e.g., `ml-6` / `ml-8` or a `gap`) between the "109.studio" logo and the first nav link, so they no longer collide as the viewport narrows toward the md breakpoint.
3. Optionally tighten or wrap nav link spacing if needed to prevent re-collision, but keep changes minimal — the goal is just to add breathing room between the logo and the nav.

No content/text changes. Pure spacing fix in the navbar component.
