import { useEffect } from "react";
import { absoluteUrl, siteName, type RouteMetadata } from "@/seo/siteMetadata";

const managedSelector = "[data-seo-managed='true']";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  const element = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  element.setAttribute("data-seo-managed", "true");

  if (!existing) {
    document.head.appendChild(element);
  }
};

const upsertCanonical = (href: string) => {
  const existing = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
  const element = existing ?? document.createElement("link");

  element.setAttribute("rel", "canonical");
  element.setAttribute("href", href);
  element.setAttribute("data-seo-managed", "true");

  if (!existing) {
    document.head.appendChild(element);
  }
};

const removeManagedStructuredData = () => {
  document.head.querySelectorAll<HTMLScriptElement>("script[type='application/ld+json'][data-seo-managed='true']").forEach((script) => {
    script.remove();
  });
};

const addStructuredData = (schema: RouteMetadata["schema"] = []) => {
  removeManagedStructuredData();

  schema.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-managed", "true");
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
};

export const SEO = ({ metadata }: { metadata: RouteMetadata }) => {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(metadata.path);
    const ogTitle = metadata.ogTitle ?? metadata.title;
    const ogDescription = metadata.ogDescription ?? metadata.description;

    document.title = metadata.title;

    document.head.querySelectorAll(managedSelector).forEach((element) => {
      if (element.tagName.toLowerCase() !== "script") {
        element.remove();
      }
    });

    upsertMeta("meta[name='description']", {
      name: "description",
      content: metadata.description,
    });
    upsertCanonical(canonicalUrl);

    upsertMeta("meta[property='og:type']", {
      property: "og:type",
      content: metadata.ogType ?? "website",
    });
    upsertMeta("meta[property='og:site_name']", {
      property: "og:site_name",
      content: siteName,
    });
    upsertMeta("meta[property='og:title']", {
      property: "og:title",
      content: ogTitle,
    });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: ogDescription,
    });
    upsertMeta("meta[property='og:url']", {
      property: "og:url",
      content: canonicalUrl,
    });

    upsertMeta("meta[name='twitter:card']", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta("meta[name='twitter:title']", {
      name: "twitter:title",
      content: ogTitle,
    });
    upsertMeta("meta[name='twitter:description']", {
      name: "twitter:description",
      content: ogDescription,
    });

    if (metadata.ogImage) {
      const imageUrl = absoluteUrl(metadata.ogImage);
      upsertMeta("meta[property='og:image']", {
        property: "og:image",
        content: imageUrl,
      });
      upsertMeta("meta[name='twitter:image']", {
        name: "twitter:image",
        content: imageUrl,
      });
    }

    addStructuredData(metadata.schema);
  }, [metadata]);

  return null;
};
