import { articles as sharedArticles } from "../data/insights.shared.js";
import { applyInsightEditorialOverrides } from "../data/insights.editorial-overrides.js";
import { getAllProjects } from "../data/projects.shared.js";
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createServiceSchema,
  createWebPageSchema,
  organizationSchema,
  personSchema,
  professionalServiceSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from "./schema.shared.js";

const defaultOgImage = "/og/og-image.png";
const appliedAiOgImage = "/og/og-applied-ai.png";
const drupalAiOgImage = "/og/og-drupal-ai.png";
const architectureAuditOgImage = "/og/og-architecture-audit.png";

const normalizePublishedDate = (publishedDate) => {
  if (!publishedDate) return undefined;

  const [month, year] = String(publishedDate).split(" ");
  if (!month || !year) return undefined;

  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
  if (Number.isNaN(monthIndex)) return undefined;

  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-01`;
};

const stripTitleSuffix = (title) => title.split("|")[0].trim();

export const absoluteUrl = (path) => new URL(path, siteUrl).toString();

const page = ({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = defaultOgImage,
  pageType = "WebPage",
  schema = [],
  breadcrumbItems,
}) => {
  const crumbs =
    breadcrumbItems ??
    (path === "/"
      ? []
      : [
          { name: "Home", path: "/" },
          { name: stripTitleSuffix(ogTitle ?? title), path },
        ]);

  return {
    title,
    description,
    path,
    ogTitle: ogTitle ?? title,
    ogDescription: ogDescription ?? description,
    ogType,
    ogImage,
    pageType,
    schema: [
      createWebPageSchema({ path, name: title, description, pageType }),
      ...(crumbs.length ? [createBreadcrumbSchema(crumbs)] : []),
      ...schema,
    ],
  };
};

const publicArticles = sharedArticles.map(applyInsightEditorialOverrides).filter((article) => article.status === "published");
const allProjects = getAllProjects();

const createArticleSchema = (article) => {
  const path = `/insights/${article.slug}`;
  const datePublished = normalizePublishedDate(article.publishedDate);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    url: `${siteUrl}${path}`,
    headline: article.title,
    description: article.description,
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@id": `${siteUrl}${path}#webpage` },
    articleSection: article.category,
    inLanguage: "en-US",
    image: absoluteUrl(appliedAiOgImage),
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    ...(article.themes?.length
      ? {
          keywords: article.themes.join(", "),
          about: article.themes,
        }
      : {}),
  };
};

const createInsightMetadata = (article) => {
  const path = `/insights/${article.slug}`;

  return page({
    title: `${article.title} | 109.studio`,
    description: article.description,
    path,
    ogTitle: article.title,
    ogDescription: article.description,
    ogType: "article",
    ogImage: appliedAiOgImage,
    schema: [createArticleSchema(article)],
    breadcrumbItems: [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: article.title, path },
    ],
  });
};

const insightArticleMetadata = Object.fromEntries(publicArticles.map((article) => [`/insights/${article.slug}`, createInsightMetadata(article)]));

const createProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${siteUrl}/portfolio/${project.slug}#project`,
  url: `${siteUrl}/portfolio/${project.slug}`,
  name: project.title,
  headline: project.detail.headline,
  description: project.detail.cardSummary,
  about: project.themes,
  creator: { "@id": `${siteUrl}/#person` },
  publisher: { "@id": `${siteUrl}/#organization` },
  mainEntityOfPage: { "@id": `${siteUrl}/portfolio/${project.slug}#webpage` },
  inLanguage: "en-US",
  keywords: project.themes.join(", "),
  creativeWorkStatus: project.statusLabel,
  genre: project.primaryCategoryLabel,
});

const createProjectMetadata = (project) => {
  const path = `/portfolio/${project.slug}`;
  const description = project.detail.cardSummary;

  return page({
    title: `${project.title} | 109.studio Portfolio`,
    description,
    path,
    ogTitle: project.detail.headline || project.title,
    ogDescription: description,
    ogType: "article",
    schema: [createProjectSchema(project)],
    breadcrumbItems: [
      { name: "Home", path: "/" },
      { name: "Portfolio", path: "/portfolio" },
      { name: project.title, path },
    ],
  });
};

const projectMetadata = Object.fromEntries(allProjects.map((project) => [`/portfolio/${project.slug}`, createProjectMetadata(project)]));

const portfolioItemListSchema = createItemListSchema({
  path: "/portfolio",
  name: "109.studio Portfolio",
  description: "Selected 109.studio work, experiments, and proof of practice.",
  items: allProjects.map((project) => ({
    path: `/portfolio/${project.slug}`,
    name: project.title,
    description: project.detail.cardSummary,
  })),
});

const insightsItemListSchema = createItemListSchema({
  path: "/insights",
  name: "109.studio Insights",
  description: "Published working notes from 109.studio.",
  items: publicArticles.map((article) => ({
    path: `/insights/${article.slug}`,
    name: article.title,
    description: article.description,
  })),
});

const offeringsItemListSchema = createItemListSchema({
  path: "/offerings",
  name: "109.studio Offerings",
  description: "Focused starting points for working with 109.studio.",
  items: [
    {
      path: "/architecture-audit",
      name: "2-Week Architecture Audit",
      description: "A focused outside read on platform risk, delivery constraints, AI readiness, and next technical steps.",
    },
    {
      path: "/drupal-ai",
      name: "Drupal AI Strategy, Architecture, and Implementation",
      description: "Applied AI strategy and implementation support for Drupal teams and enterprise CMS workflows.",
    },
    {
      path: "/applied-ai",
      name: "Applied AI Strategy and Workflow Engineering",
      description: "Practical applied AI strategy and workflow design for real product, content, search, and delivery systems.",
    },
  ],
});

export const defaultMetadata = page({
  title: "109.studio | Senior Technical Direction for Complex Products and Platforms",
  description:
    "109.studio helps founders, agencies, and technical teams shape architecture, modernize platforms, and turn complex ideas into systems teams can run with confidence.",
  path: "/",
  ogTitle: "109.studio | Product Engineering, Platform Architecture, and Applied AI",
  ogDescription:
    "Senior technical direction for complex products, platforms, modernization work, Drupal systems, and applied AI workflows.",
  schema: [organizationSchema, personSchema, websiteSchema, professionalServiceSchema],
});

export const routeMetadata = {
  "/": defaultMetadata,
  "/about": page({
    title: "About Damien House and 109.studio | Senior Technical Leadership",
    description:
      "Learn about Damien House, the principal behind 109.studio, and the senior technical leadership behind its platform architecture, product engineering, and applied AI work.",
    path: "/about",
    ogTitle: "About 109.studio | Principal-Led Technical Strategy",
    ogDescription:
      "109.studio connects strategy, architecture, and implementation through principal-led technical judgment that stays close to the build.",
    pageType: "AboutPage",
    schema: [organizationSchema, personSchema],
  }),
  "/services": page({
    title: "Services | Fractional CTO, Platform Architecture, Product Engineering, and Applied AI",
    description:
      "See how 109.studio supports technical strategy, platform modernization, product engineering, agentic workflows, AI governance, and delivery systems.",
    path: "/services",
    ogTitle: "Services | What 109.studio Does Inside an Engagement",
    ogDescription:
      "Senior technical leadership across fractional CTO advisory, prototype-to-production architecture, applied AI, content operations, and platform modernization.",
    schema: [
      createServiceSchema({
        path: "/services",
        name: "Fractional CTO, Platform Architecture, Product Engineering, and Applied AI Services",
        description:
          "Principal-led technical strategy and implementation support across platform architecture, product engineering, applied AI, technical advisory, and delivery systems.",
        serviceType: [
          "Fractional CTO advisory",
          "Platform architecture",
          "Product engineering",
          "Applied AI strategy",
          "Platform modernization",
        ],
      }),
    ],
  }),
  "/offerings": page({
    title: "Offerings | Architecture Audits, Drupal AI Reviews, Sprints, and Advisory",
    description:
      "Compare focused starting points for working with 109.studio, including architecture audits, Drupal AI readiness reviews, workflow sprints, modernization resets, and fractional CTO advisory.",
    path: "/offerings",
    ogTitle: "Offerings | Clear Ways to Begin with 109.studio",
    ogDescription:
      "Choose the right starting point for product, platform, modernization, Drupal, or applied AI work before committing to a larger engagement.",
    schema: [
      createServiceSchema({
        path: "/offerings",
        name: "109.studio Strategic Technical Offerings",
        description:
          "Focused engagement models for architecture assessment, Drupal AI readiness, prototype-to-production planning, workflow design, content operations, modernization, and advisory support.",
        serviceType: [
          "Architecture assessment",
          "Drupal AI readiness review",
          "Prototype-to-production sprint",
          "Agentic workflow design",
          "Content operations audit",
          "Fractional CTO advisory",
          "Platform modernization",
        ],
      }),
      offeringsItemListSchema,
    ],
  }),
  "/architecture-audit": page({
    title: "2-Week Architecture Audit | Technical Risk, Platform Clarity, and Next Steps",
    description:
      "A two-week, principal-led architecture audit for teams that need a senior outside read on platform risk, delivery friction, AI readiness, and the next technical decision.",
    path: "/architecture-audit",
    ogTitle: "2-Week Architecture Audit | 109.studio",
    ogDescription:
      "A focused outside read on the system, the risks, and the technical decisions in front of you, with written findings and an executive debrief.",
    ogImage: architectureAuditOgImage,
    schema: [
      createServiceSchema({
        path: "/architecture-audit",
        name: "2-Week Architecture Audit",
        description:
          "A two-week, principal-led review that surfaces platform risk, delivery constraints, AI readiness, and practical next steps before a larger technical decision.",
        serviceType: "Architecture assessment",
      }),
    ],
  }),
  "/applied-ai": page({
    title: "Applied AI Strategy and Workflow Engineering | 109.studio",
    description:
      "A practical decision framework for applying AI to workflows, content operations, retrieval, and answer quality without creating more operating risk than value.",
    path: "/applied-ai",
    ogTitle: "Applied AI Strategy and Workflow Engineering | 109.studio",
    ogDescription:
      "Start with the workflow, content system, or search problem in front of you, then decide where AI can safely improve speed, coverage, or answer quality.",
    ogImage: appliedAiOgImage,
    schema: [
      createServiceSchema({
        path: "/applied-ai",
        name: "Applied AI Strategy and Workflow Engineering",
        description:
          "Practical applied AI strategy, workflow design, and implementation support for teams adopting AI inside real product, content, search, and delivery workflows.",
        serviceType: ["Applied AI strategy", "Workflow engineering", "AI governance", "Retrieval-backed systems"],
      }),
    ],
  }),
  "/drupal-ai": page({
    title: "Drupal AI Strategy, Architecture, and Implementation | 109.studio",
    description:
      "Practical Drupal AI strategy for content operations, retrieval, editorial workflows, platform delivery, governance, modernization, and Drupal AI Initiative-aligned work.",
    path: "/drupal-ai",
    ogTitle: "Drupal AI Strategy, Architecture, and Implementation | 109.studio",
    ogDescription:
      "109.studio helps Drupal teams apply AI where it can improve content operations, search, editorial workflows, platform delivery, and user guidance.",
    ogImage: drupalAiOgImage,
    schema: [
      createServiceSchema({
        path: "/drupal-ai",
        name: "Drupal AI Strategy, Architecture, and Implementation",
        description:
          "Applied AI strategy and implementation support for Drupal teams connecting AI capabilities with governed content, editorial, search, workflow, and platform modernization patterns.",
        serviceType: ["Drupal architecture", "Drupal AI strategy", "AI implementation", "Enterprise CMS workflows"],
      }),
    ],
  }),
  "/ai-in-practice": page({
    title: "AI in Practice | Workflow Patterns for Useful Applied AI",
    description:
      "Explore practical AI workflow patterns for editorial support, retrieval-backed answers, delivery documentation, PR summaries, release notes, and human-reviewed automation.",
    path: "/ai-in-practice",
    ogTitle: "AI in Practice | Three Workflow Patterns from 109.studio",
    ogDescription:
      "Examples of applied AI tied to content operations, search and retrieval, and internal delivery support, each scoped around work a team already owns.",
    ogImage: appliedAiOgImage,
    pageType: "CollectionPage",
  }),
  "/portfolio": page({
    title: "Portfolio | Selected Work, Experiments, and Proof of Practice",
    description:
      "Selected 109.studio work, experiments, and proof of practice across platform strategy, Drupal and applied AI, technical leadership, delivery systems, and reusable patterns.",
    path: "/portfolio",
    ogTitle: "Portfolio | Selected Work and Proof of Practice from 109.studio",
    ogDescription:
      "Representative work from 109.studio across platform strategy, Drupal, applied AI, technical leadership, delivery systems, and reusable experiments.",
    pageType: "CollectionPage",
    schema: [portfolioItemListSchema],
  }),
  "/contact": page({
    title: "Contact 109.studio | Start a Technical Strategy Conversation",
    description:
      "Contact 109.studio to discuss a product, platform, Drupal, applied AI, modernization, or technical strategy decision that needs senior judgment.",
    path: "/contact",
    ogTitle: "Contact 109.studio | Start with Your Situation",
    ogDescription:
      "Share what you are building, where things feel unclear, or what kind of senior technical support may be useful.",
    pageType: "ContactPage",
  }),
  "/insights": page({
    title: "Insights | Platform Modernization, Applied AI, Search, and Delivery Systems",
    description:
      "Working notes from 109.studio on platform modernization, applied AI, search and retrieval, delivery systems, Drupal, open source, and technical decision-making.",
    path: "/insights",
    ogTitle: "Insights | Notes from Real Product and Platform Work",
    ogDescription:
      "109.studio shares working notes on modernization, applied AI, search, delivery systems, and the technical decisions that shape software teams.",
    pageType: "CollectionPage",
    schema: [insightsItemListSchema],
  }),
  "/editorial-policy": page({
    title: "Editorial policy | 109.studio",
    description:
      "How 109.studio uses AI for research, drafting, and review while keeping human editorial responsibility for every published insight and project page.",
    path: "/editorial-policy",
    ogTitle: "Editorial policy | How 109 uses AI in published work",
    ogDescription:
      "109.studio uses AI as a research and drafting tool. Damien House and 109.studio remain the accountable authors and publishers.",
    pageType: "WebPage",
  }),
  ...insightArticleMetadata,
  ...projectMetadata,
};

export const notFoundMetadata = page({
  title: "Page Not Found | 109.studio",
  description: "The requested page could not be found on 109.studio.",
  path: "/404",
});

export const getRouteMetadata = (pathname) => routeMetadata[pathname] ?? notFoundMetadata;

export { siteName, siteUrl };
