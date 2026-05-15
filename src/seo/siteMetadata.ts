import {
  absoluteUrl,
  defaultMetadata,
  getRouteMetadata as getSharedRouteMetadata,
  routeMetadata as sharedRouteMetadata,
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

export const routeMetadata = sharedRouteMetadata as Record<string, RouteMetadata>;

export const getRouteMetadata = (pathname: string): RouteMetadata =>
  getSharedRouteMetadata(pathname) as RouteMetadata;

export { absoluteUrl, defaultMetadata, siteName, siteUrl };
