import { coreOfferings, practiceAreas, siteIdentity } from "./siteIdentity.shared.js";

export const siteUrl = siteIdentity.url;
export const siteName = siteIdentity.name;

const reference = (id) => ({ "@id": id });
const pageUrl = (path) => new URL(path, siteUrl).toString();

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteIdentity.schemaIds.organization,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.description,
  email: siteIdentity.email,
  founder: reference(siteIdentity.schemaIds.person),
  sameAs: [...siteIdentity.socialProfiles],
  knowsAbout: [...practiceAreas],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": siteIdentity.schemaIds.person,
  name: siteIdentity.founder.name,
  url: siteIdentity.founder.url,
  jobTitle: siteIdentity.founder.title,
  worksFor: reference(siteIdentity.schemaIds.organization),
  affiliation: reference(siteIdentity.schemaIds.organization),
  knowsAbout: [...practiceAreas],
  sameAs: [...siteIdentity.socialProfiles],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteIdentity.schemaIds.website,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.description,
  publisher: reference(siteIdentity.schemaIds.organization),
  author: reference(siteIdentity.schemaIds.person),
  inLanguage: "en-US",
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteIdentity.schemaIds.professionalService,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.businessDescription,
  email: siteIdentity.email,
  founder: reference(siteIdentity.schemaIds.person),
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "109.studio Services",
    itemListElement: coreOfferings.map((offering) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offering.name,
        description: offering.description,
        serviceType: offering.name,
        provider: reference(siteIdentity.schemaIds.organization),
      },
    })),
  },
};

export const createWebPageSchema = ({ path, name, description, pageType = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": pageType,
  "@id": `${siteUrl}${path}#webpage`,
  url: `${siteUrl}${path}`,
  name,
  description,
  isPartOf: reference(siteIdentity.schemaIds.website),
  about: reference(siteIdentity.schemaIds.organization),
  author: reference(siteIdentity.schemaIds.person),
  publisher: reference(siteIdentity.schemaIds.organization),
  inLanguage: "en-US",
});

export const createServiceSchema = ({ path, name, description, serviceType }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}${path}#service`,
  url: `${siteUrl}${path}`,
  name,
  description,
  serviceType,
  provider: reference(siteIdentity.schemaIds.organization),
  isRelatedTo: reference(siteIdentity.schemaIds.professionalService),
});

export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: pageUrl(item.path),
  })),
});

export const createItemListSchema = ({ path, name, description, items }) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}${path}#itemlist`,
  url: `${siteUrl}${path}`,
  name,
  description,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: item.url ?? pageUrl(item.path),
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
  })),
});
