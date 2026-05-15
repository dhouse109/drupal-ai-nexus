// Canonical editorial overlay for Insights.
//
// Defines the publish allow-list (slugs treated as `status: "published"`) and
// the default editorial overlay applied to every published insight so the
// AI-assisted disclosure renders consistently. Article-level fields on the
// canonical record in src/data/insights.shared.js win when explicitly set.
//
// To launch a new insight: add its slug to PUBLISHED_INSIGHT_SLUGS.

export const PUBLISHED_INSIGHT_SLUGS = [
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

// Default editorial overlay applied to every published insight so the
// AI-assisted disclosure renders consistently. Article-level fields win
// when explicitly set on the source article.
const DEFAULT_EDITORIAL = {
  authorName: "Damien House",
  authorRole: "109.studio",
  aiAssisted: true,
  aiDisclosureLabel: "AI-assisted · Human-reviewed",
  aiDisclosureNote:
    "Drafted with AI assistance from Damien House's notes and source materials. Reviewed and edited before publication.",
  reviewedBy: "Damien House",
};

export const applyInsightEditorialOverrides = (article) => {
  const category = article.categoryId
    ? CATEGORY_LABEL_BY_ID[article.categoryId] ?? article.category
    : article.category;

  const status = PUBLISHED_INSIGHT_SLUGS.includes(article.slug)
    ? "published"
    : article.status;

  const editorial =
    status === "published"
      ? {
          authorName: article.authorName ?? DEFAULT_EDITORIAL.authorName,
          authorRole: article.authorRole ?? DEFAULT_EDITORIAL.authorRole,
          aiAssisted:
            article.aiAssisted !== undefined
              ? article.aiAssisted
              : DEFAULT_EDITORIAL.aiAssisted,
          aiDisclosureLabel:
            article.aiDisclosureLabel ?? DEFAULT_EDITORIAL.aiDisclosureLabel,
          aiDisclosureNote:
            article.aiDisclosureNote ?? DEFAULT_EDITORIAL.aiDisclosureNote,
          reviewedBy: article.reviewedBy ?? DEFAULT_EDITORIAL.reviewedBy,
          lastReviewedAt: article.lastReviewedAt,
        }
      : {};

  return {
    ...article,
    category,
    status,
    ...editorial,
  };
};
