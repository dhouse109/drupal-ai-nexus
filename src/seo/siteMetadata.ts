import {
  absoluteUrl,
  defaultMetadata,
  getRouteMetadata as getSharedRouteMetadata,
  routeMetadata as sharedRouteMetadata,
  siteName,
  siteUrl,
} from "./metadata.shared.js";
import { getPublishedArticles } from "../data/insights";

export type RouteMetadata = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  schema?: Record<string, unknown>[];
};

const appliedAiOgImage = "/og/og-applied-ai.png";

const qaPublishedInsightMetadata = Object.fromEntries(
  getPublishedArticles().map((article) => {
    const path = `/insights/${article.slug}`;

    return [
      path,
      {
        title: `${article.title} | 109.studio`,
        description: article.description,
        path,
        ogTitle: article.title,
        ogDescription: article.description,
        ogType: "article" as const,
        ogImage: appliedAiOgImage,
      },
    ];
  }),
);

export const routeMetadata = {
  ...sharedRouteMetadata,
  ...qaPublishedInsightMetadata,
} as Record<string, RouteMetadata>;

export const getRouteMetadata = (pathname: string): RouteMetadata =>
  routeMetadata[pathname] ?? (getSharedRouteMetadata(pathname) as RouteMetadata);

export { absoluteUrl, defaultMetadata, siteName, siteUrl };
