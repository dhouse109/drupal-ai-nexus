import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { absoluteUrl, routeMetadata, siteName } from "../src/seo/metadata.shared.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const distDir = join(projectRoot, "dist");
const indexPath = join(distDir, "index.html");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

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
    ...(metadata.schema ?? []).map(
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
