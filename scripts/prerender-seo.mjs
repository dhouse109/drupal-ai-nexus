import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const distDir = join(projectRoot, "dist");
const indexPath = join(distDir, "index.html");

const siteUrl = "https://109.studio";
const siteName = "109.studio";

const schemaIds = {
  organization: `${siteUrl}/#organization`,
  person: `${siteUrl}/#person`,
  website: `${siteUrl}/#website`,
  professionalService: `${siteUrl}/#professional-service`,
};

const practiceAreas = [
  "Platform architecture",
  "Product engineering",
  "Drupal architecture",
  "Enterprise CMS architecture",
  "Applied AI strategy",
  "AI implementation",
  "Workflow engineering",
  "Technical strategy",
  "Fractional technical leadership",
];

const audienceSegments = [
  "Founders and business leaders who need senior technical judgment",
  "Technical leaders who need architecture, delivery, or applied AI support",
  "Drupal and enterprise CMS teams evaluating AI-enabled platform workflows",
];

const coreOfferings = [
  {
    name: "Platform Architecture",
    description: "Senior architecture guidance for complex platforms, CMS ecosystems, and delivery systems.",
  },
  {
    name: "Product Engineering",
    description: "Principal-led product engineering support for teams that need practical execution and technical direction.",
  },
  {
    name: "Applied AI Strategy",
    description: "Governed AI strategy and workflow engineering for teams introducing AI into real operating systems.",
  },
  {
    name: "Drupal AI Strategy",
    description: "Applied AI strategy and implementation support for Drupal teams and enterprise CMS workflows.",
  },
];

const reference = (id) => ({ "@id": id });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": schemaIds.organization,
  name: siteName,
  url: siteUrl,
  description: "109.studio is a principal-led practice for platform architecture, product engineering, and applied AI work.",
  email: "hello@109.studio",
  founder: reference(schemaIds.person),
  sameAs: ["https://www.linkedin.com/company/109studio", "https://github.com/109studio", "https://www.youtube.com/@109studiotube"],
  knowsAbout: practiceAreas,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": schemaIds.person,
  name: "Damien House",
  url: `${siteUrl}/about`,
  jobTitle: "Principal, 109.studio",
  worksFor: reference(schemaIds.organization),
  affiliation: reference(schemaIds.organization),
  knowsAbout: practiceAreas,
  sameAs: ["https://www.linkedin.com/company/109studio", "https://github.com/109studio", "https://www.youtube.com/@109studiotube"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": schemaIds.website,
  name: siteName,
  url: siteUrl,
  description: "109.studio is a principal-led practice for platform architecture, product engineering, and applied AI work.",
  publisher: reference(schemaIds.organization),
  author: reference(schemaIds.person),
  inLanguage: "en-US",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": schemaIds.professionalService,
  name: siteName,
  url: siteUrl,
  description: "Principal-led platform architecture, product engineering, and applied AI strategy for organizations that need senior technical leadership.",
  email: "hello@109.studio",
  provider: reference(schemaIds.organization),
  founder: reference(schemaIds.person),
  areaServed: "United States",
  audience: audienceSegments.map((audienceType) => ({ "@type": "Audience", audienceType })),
  serviceType: practiceAreas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "109.studio Services",
    itemListElement: coreOfferings.map((offering) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offering.name,
        description: offering.description,
        provider: reference(schemaIds.organization),
      },
    })),
  },
};

const createWebPageSchema = ({ path, name, description, pageType = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": pageType,
  "@id": `${siteUrl}${path}#webpage`,
  url: `${siteUrl}${path}`,
  name,
  description,
  isPartOf: reference(schemaIds.website),
  about: reference(schemaIds.organization),
  author: reference(schemaIds.person),
  publisher: reference(schemaIds.organization),
  inLanguage: "en-US",
});

const createServiceSchema = ({ path, name, description, serviceType }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}${path}#service`,
  url: `${siteUrl}${path}`,
  name,
  description,
  serviceType,
  provider: reference(schemaIds.organization),
  isRelatedTo: reference(schemaIds.professionalService),
});

const defaultOgImage = "/og/og-image.svg";
const appliedAiOgImage = "/og/og-applied-ai.svg";
const drupalAiOgImage = "/og/og-drupal-ai.svg";
const architectureAuditOgImage = "/og/og-architecture-audit.svg";

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
}) => ({
  title,
  description,
  path,
  ogTitle: ogTitle ?? title,
  ogDescription: ogDescription ?? description,
  ogType,
  ogImage,
  pageType,
  schema: [createWebPageSchema({ path, name: title, description, pageType }), ...schema],
});

const defaultMetadata = page({
  title: "109.studio | Senior Technical Direction for Complex Products and Platforms",
  description:
    "109.studio helps founders, agencies, and technical teams shape architecture, modernize platforms, and turn complex ideas into systems teams can run with confidence.",
  path: "/",
  ogTitle: "109.studio | Product Engineering, Platform Architecture, and Applied AI",
  ogDescription:
    "Senior technical direction for complex products, platforms, modernization work, Drupal systems, and applied AI workflows.",
  schema: [organizationSchema, personSchema, websiteSchema, professionalServiceSchema],
});

const routeMetadata = {
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
        serviceType: ["Fractional CTO advisory", "Platform architecture", "Product engineering", "Applied AI strategy", "Platform modernization"],
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
  }),
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const absoluteUrl = (path) => new URL(path, siteUrl).toString();

const safeJson = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");

const stripExistingSeo = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>\s*/gi, "\n")
    .replace(/\s*<meta\s+[^>]*(?:name|property)=["'](?:description|og:type|og:site_name|og:title|og:description|og:url|og:image|twitter:card|twitter:title|twitter:description|twitter:image)["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<link\s+[^>]*rel=["']canonical["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "\n");

const renderSeoHead = (metadata) => {
  const canonicalUrl = absoluteUrl(metadata.path);
  const imageUrl = absoluteUrl(metadata.ogImage);
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeHtml(metadata.ogType)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.ogDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.ogDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    ...metadata.schema.map(
      (schema) => `<script type="application/ld+json" data-prerender-seo="true">${safeJson(schema)}</script>`,
    ),
  ];

  return tags.map((tag) => `    ${tag}`).join("\n");
};

const applySeo = (template, metadata) => {
  const cleaned = stripExistingSeo(template);
  return cleaned.replace("  </head>", `${renderSeoHead(metadata)}\n  </head>`);
};

const routeOutputPath = (routePath) => {
  if (routePath === "/") {
    return indexPath;
  }

  return join(distDir, routePath.replace(/^\//, ""), "index.html");
};

const writeRoute = async (template, routePath, metadata) => {
  const html = applySeo(template, metadata);
  const outputPath = routeOutputPath(routePath);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
};

const run = async () => {
  const template = await readFile(indexPath, "utf8");
  const routes = Object.entries(routeMetadata);

  await Promise.all(routes.map(([routePath, metadata]) => writeRoute(template, routePath, metadata)));

  console.log(`Prerendered SEO metadata for ${routes.length} routes.`);
};

run().catch((error) => {
  console.error("Failed to prerender SEO metadata:", error);
  process.exitCode = 1;
});
