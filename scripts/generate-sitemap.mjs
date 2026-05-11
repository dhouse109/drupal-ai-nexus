import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { routeMetadata, absoluteUrl } from "../src/seo/metadata.shared.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const sitemapPath = join(repoRoot, "dist", "sitemap.xml");

const defaultSitemapOptions = {
  changefreq: "monthly",
  priority: "0.6",
};

const sitemapOptions = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/services": { changefreq: "monthly", priority: "0.9" },
  "/offerings": { changefreq: "monthly", priority: "0.9" },
  "/drupal-ai": { changefreq: "monthly", priority: "0.9" },
  "/applied-ai": { changefreq: "monthly", priority: "0.8" },
  "/architecture-audit": { changefreq: "monthly", priority: "0.8" },
  "/ai-in-practice": { changefreq: "monthly", priority: "0.7" },
  "/portfolio": { changefreq: "weekly", priority: "0.8" },
  "/insights": { changefreq: "weekly", priority: "0.7" },
};

const getSitemapOptions = (path) => {
  if (path.startsWith("/insights/")) {
    return { changefreq: "monthly", priority: "0.6" };
  }

  if (path.startsWith("/portfolio/")) {
    return { changefreq: "monthly", priority: "0.7" };
  }

  return {
    ...defaultSitemapOptions,
    ...sitemapOptions[path],
  };
};

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const publicRoutes = Object.values(routeMetadata)
  .map(({ path }) => path)
  .filter(Boolean)
  .filter((path) => path !== "/404")
  .filter((path, index, paths) => paths.indexOf(path) === index)
  .sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

const urls = publicRoutes
  .map((path) => {
    const loc = absoluteUrl(path);
    const { changefreq, priority } = getSitemapOptions(path);

    return [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  "</urlset>",
  "",
].join("\n");

await mkdir(dirname(sitemapPath), { recursive: true });
await writeFile(sitemapPath, sitemap, "utf8");

console.log(`Generated sitemap with ${publicRoutes.length} routes: ${sitemapPath}`);
