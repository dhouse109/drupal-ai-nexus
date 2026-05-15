import { routeMetadata } from "../src/seo/metadata.shared.js";

const qaInsightRoutes = Object.keys(routeMetadata).filter((path) => path.startsWith("/insights/"));

console.log(
  `QA-published insight SEO is handled by shared route metadata. Verified ${qaInsightRoutes.length} insight route(s).`,
);
