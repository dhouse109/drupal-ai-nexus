# Pre-launch Content Cleanup

> Note: the publish allow-list and editorial defaults now live in
> `src/data/insights.editorial-overrides.js` and
> `src/data/projects.editorial-overrides.js` (renamed from `*.qa-overrides.js`).
> The exported allow-list constant is `PUBLISHED_INSIGHT_SLUGS`.

Several Insights are published for implementation review in this branch. They help test routing, related-content modules, footer writing links, category filters, SEO metadata, and sitemap/prerender behavior before final launch approval.

Before the next public release, review this file and decide which notes should remain public.

## Required before launch

- [ ] Review each implementation-review Insight for final public readiness.
- [ ] Keep only launch-approved notes in `PUBLISHED_INSIGHT_SLUGS`.
- [ ] Review unfinished notes before changing `PUBLISHED_INSIGHT_SLUGS` in `src/data/insights.editorial-overrides.js`.
- [ ] Decide whether `Insights` should remain in the primary header navigation.
- [ ] Re-run `npm run lint`.
- [ ] Re-run `npm run build`.
- [ ] Confirm related Projects / Insights still render intentionally after any notes are unpublished.
- [ ] Confirm the generated sitemap includes only public-ready Insight routes.

## Insights published for implementation review

These slugs are treated as published by `src/data/insights.editorial-overrides.js`:

- `why-your-ai-prototype-is-not-a-product`
- `modernization-architecture-and-delivery`
- `automating-the-boring-ai-content-operations-that-work`
- `prompts-cannot-replace-permissions-building-reviewable-ai-systems`
- `mcp-future-ai-tool-surfaces-intent-based-cms`
- `rag-accuracy-problem-nobody-talks-about`
- `blueprint-of-agentic-engineering`
- `drupal-as-ai-infrastructure-why-structured-content-wins`
- `deployment-gap-in-ai-engineering`
- `redefining-public-service-open-source-ai`

## Notes

The editorial overlay file is intentionally separate from `src/data/insights.shared.js` so publishing state is easy to find, review, and reverse before launch.

The public copy may still need a final editorial pass. Publishing these notes in this branch is for implementation review, not final launch approval.