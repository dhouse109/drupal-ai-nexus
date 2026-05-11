# Pre-launch Content Cleanup

Several Insights are temporarily published for QA coverage in this branch. They help test routing, related-content modules, footer writing links, category filters, SEO metadata, and sitemap/prerender behavior.

Before the next public release, review this file and decide which notes should remain public.

## Required before launch

- [ ] Review each QA-published Insight for final public readiness.
- [ ] Keep only launch-approved notes in `QA_PUBLISHED_INSIGHT_SLUGS`.
- [ ] Remove any unfinished notes from `QA_PUBLISHED_INSIGHT_SLUGS` in `src/data/insights.qa-overrides.js`.
- [ ] Decide whether `Insights` should remain in the primary header navigation.
- [ ] Re-run `npm run lint`.
- [ ] Re-run `npm run build`.
- [ ] Confirm related Projects / Insights still render intentionally after any notes are unpublished.
- [ ] Confirm the generated sitemap includes only public-ready Insight routes.

## QA-published Insights

These slugs are temporarily treated as published by `src/data/insights.qa-overrides.js`:

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

The QA override file is intentionally separate from `src/data/insights.shared.js` so temporary publishing state is easy to find, review, and reverse before launch.

The public copy may still need a final editorial pass. Publishing these notes in this branch is for implementation QA, not final launch approval.
