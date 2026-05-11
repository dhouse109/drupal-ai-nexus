import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { articles as sharedArticles } from "../src/data/insights.shared.js";
import { applyInsightQaOverrides } from "../src/data/insights.qa-overrides.js";
import { absoluteUrl, siteName, siteUrl } from "../src/seo/metadata.shared.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const distDir = join(projectRoot, "dist");
const indexPath = join(distDir, "index.html");
const sitemapPath = join(distDir, "sitemap.xml");
const appliedAiOgImage = "/og/og-applied-ai.png";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const safeJson = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");

const stripExistingSeo = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>\s*/gi, "\n")
    .replace(/\s*<meta\s+[^>]*(?:name|property)=["'](?:description|og:type|og:site_name|og:title|og:description|og:url|og:image|twitter:card|twitter:title|twitter:description|twitter:image)["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<link\s+[^>]*rel=["']canonical["'][^>]*>\s*/gi, "\n")
    .replace(/\s*<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "\n");

const createArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${siteUrl}/insights/${article.slug}#article`,
  url: `${siteUrl}/insights/${article.slug}`,
  headline: article.title,
  description: article.description,
  author: { "@id": `${siteUrl}/#person` },
  publisher: { "@id": `${siteUrl}/#organization` },
  mainEntityOfPage: { "@id": `${siteUrl}/insights/${article.slug}#webpage` },
  articleSection: article.category,
  inLanguage: "en-US",
});

const renderSeoHead = (article) => {
  const canonicalUrl = absoluteUrl(`/insights/${article.slug}`);
  const imageUrl = absoluteUrl(appliedAiOgImage);
  const title = `${article.title} | 109.studio`;
  const schema = createArticleSchema(article);

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(article.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(article.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(article.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(article.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(article.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `<script type="application/ld+json" data-prerender-seo="true">${safeJson(schema)}</script>`,
  ];

  return tags.map((tag) => `    ${tag}`).join("\n");
};

const applySeo = (template, article) => {
  const cleaned = stripExistingSeo(template);
  return cleaned.replace("  </head>", `${renderSeoHead(article)}\n  </head>`);
};

const qaPublishedArticles = sharedArticles
  .map(applyInsightQaOverrides)
  .filter((article) => article.status === "published");

const template = await readFile(indexPath, "utf8");

await Promise.all(
  qaPublishedArticles.map(async (article) => {
    const outputPath = join(distDir, "insights", article.slug, "index.html");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, applySeo(template, article), "utf8");
  }),
);

try {
  let sitemap = await readFile(sitemapPath, "utf8");
  const additions = qaPublishedArticles
    .map((article) => {
      const loc = absoluteUrl(`/insights/${article.slug}`);
      if (sitemap.includes(`<loc>${escapeXml(loc)}</loc>`)) return "";
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        "    <changefreq>monthly</changefreq>",
        "    <priority>0.6</priority>",
        "  </url>",
      ].join("\n");
    })
    .filter(Boolean)
    .join("\n");

  if (additions) {
    sitemap = sitemap.replace("</urlset>", `${additions}\n</urlset>`);
    await writeFile(sitemapPath, sitemap, "utf8");
  }
} catch (error) {
  console.warn("QA insight sitemap patch skipped:", error.message);
}

console.log(`Prerendered ${qaPublishedArticles.length} QA-published insight route(s).`);
