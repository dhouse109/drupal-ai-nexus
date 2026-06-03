import { describe, expect, it } from "vitest";
import { getCanonicalLocation } from "./CanonicalUrlRedirect";

describe("getCanonicalLocation", () => {
  it("removes trailing slashes from nested paths", () => {
    expect(getCanonicalLocation({ pathname: "/portfolio/" })).toBe("/portfolio");
  });

  it("preserves query strings and hashes", () => {
    expect(getCanonicalLocation({ pathname: "/portfolio/", search: "?category=applied-ai", hash: "#top" })).toBe(
      "/portfolio?category=applied-ai#top",
    );
  });

  it("preserves the root path", () => {
    expect(getCanonicalLocation({ pathname: "/" })).toBe("/");
  });
});
