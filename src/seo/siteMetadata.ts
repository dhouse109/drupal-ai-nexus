export {
  absoluteUrl,
  defaultMetadata,
  getRouteMetadata,
  routeMetadata,
  siteName,
  siteUrl,
} from "./metadata.shared.js";

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
