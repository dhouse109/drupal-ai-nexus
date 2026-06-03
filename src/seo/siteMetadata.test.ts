import { describe, expect, it } from "vitest";
import { getRouteMetadata, normalizePathname } from "./siteMetadata";

describe("normalizePathname", () => {
  it("preserves the root path", () => {
    expect(normalizePathname("/")).toBe("/");
  });

  it("treats repeated root slashes as the root path", () => {
    expect(normalizePathname("//")).toBe("/");
    expect(normalizePathname("///")).toBe("/");
  });

  it("removes trailing slashes from nested paths", () => {
    expect(normalizePathname("/portfolio/")).toBe("/portfolio");
    expect(normalizePathname("/portfolio///")).toBe("/portfolio");
  });
});

describe("getRouteMetadata", () => {
  it("returns the same metadata for canonical and trailing-slash portfolio paths", () => {
    expect(getRouteMetadata("/portfolio/").title).toBe(getRouteMetadata("/portfolio").title);
  });

  it("keeps unknown routes on 404 metadata after normalization", () => {
    expect(getRouteMetadata("/missing-route/").title).toBe("Page Not Found | 109.studio");
  });
});
