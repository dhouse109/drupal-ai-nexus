// Temporary QA publishing and display-label overrides for Projects/Insights testing.
//
// This file intentionally makes selected draft insights behave as published so
// routing, related-content modules, SEO metadata, footer links, and filters can
// be tested before launch.
//
// Before a public release, review docs/prelaunch-content-cleanup.md and remove
// any slug from QA_PUBLISHED_INSIGHT_SLUGS that is not ready for public launch.

export const QA_PUBLISHED_INSIGHT_SLUGS = [
  "why-your-ai-prototype-is-not-a-product",
  "modernization-architecture-and-delivery",
  "automating-the-boring-ai-content-operations-that-work",
  "prompts-cannot-replace-permissions-building-reviewable-ai-systems",
  "mcp-future-ai-tool-surfaces-intent-based-cms",
  "rag-accuracy-problem-nobody-talks-about",
  "blueprint-of-agentic-engineering",
  "drupal-as-ai-infrastructure-why-structured-content-wins",
  "deployment-gap-in-ai-engineering",
  "redefining-public-service-open-source-ai",
];

const CATEGORY_LABEL_BY_ID = {
  "product-platform-architecture": "Product & Platform",
  "applied-ai-workflow-systems": "Applied AI",
  "developer-tooling-delivery-systems": "Tooling & Delivery",
  "rd-labs-learning-experiments": "R&D & Labs",
};

export const applyInsightQaOverrides = (article) => {
  const category = article.categoryId
    ? CATEGORY_LABEL_BY_ID[article.categoryId] ?? article.category
    : article.category;

  return {
    ...article,
    category,
    status: QA_PUBLISHED_INSIGHT_SLUGS.includes(article.slug)
      ? "published"
      : article.status,
  };
};
