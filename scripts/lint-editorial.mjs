#!/usr/bin/env node
// Editorial guardrail lint for projects + insights data files.
// Run: node scripts/lint-editorial.mjs
//
// Fails (exit 1) on:
//   - "ship" / "shipping" / "shipped" outside an explicit allowlist (none today)
//   - "Damien" inside project/insight copy (About page is not scanned)
//   - planned/sample/lab projects whose resultValue implies client delivery
//
// No autofix. Prints violations grouped by file + field path.

import { projects } from "../src/data/projects.shared.js";
import { articles } from "../src/data/insights.shared.js";

const violations = [];

const SHIP_RE = /\b(ship|shipping|shipped)\b/i;
const DAMIEN_RE = /\bDamien\b/;
const DELIVERY_VERBS = /\b(delivered|shipped|launched for|rolled out to)\b/i;

const PLANNED_STATUSES = new Set(["planned-service-proof", "sample-only", "lab"]);

function check(value, path, file, opts = {}) {
  if (typeof value !== "string") return;
  if (SHIP_RE.test(value)) {
    violations.push({ file, path, rule: "no-ship", excerpt: value.match(SHIP_RE)[0] });
  }
  if (DAMIEN_RE.test(value)) {
    violations.push({ file, path, rule: "no-damien-in-copy", excerpt: "Damien" });
  }
  if (opts.checkDelivery && DELIVERY_VERBS.test(value)) {
    violations.push({
      file,
      path,
      rule: "no-implied-client-delivery-on-non-real-work",
      excerpt: value.match(DELIVERY_VERBS)[0],
    });
  }
}

// Projects
for (const p of projects) {
  const file = "src/data/projects.shared.js";
  const base = `projects[${p.id}]`;
  const d = p.detail ?? {};
  const checkDelivery = PLANNED_STATUSES.has(p.status);
  for (const f of ["headline", "subheadline", "cardSummary", "problem", "approach", "proofArtifact", "relatedInsightsIntro"]) {
    check(d[f], `${base}.detail.${f}`, file);
  }
  check(d.resultValue, `${base}.detail.resultValue`, file, { checkDelivery });
  if (d.cta) {
    check(d.cta.text, `${base}.detail.cta.text`, file);
  }
}

// Insights
for (const a of articles) {
  const file = "src/data/insights.shared.js";
  const base = `articles[${a.slug}]`;
  for (const f of ["title", "description", "intro", "keyTakeaway"]) {
    check(a[f], `${base}.${f}`, file);
  }
  if (Array.isArray(a.body)) {
    a.body.forEach((block, i) => {
      if (block.text) check(block.text, `${base}.body[${i}].text`, file);
      if (block.title) check(block.title, `${base}.body[${i}].title`, file);
      if (Array.isArray(block.items)) {
        block.items.forEach((item, j) => check(item, `${base}.body[${i}].items[${j}]`, file));
      }
    });
  }
}

if (violations.length === 0) {
  console.log("editorial lint: clean");
  process.exit(0);
}

console.error(`editorial lint: ${violations.length} violation(s)`);
for (const v of violations) {
  console.error(`  [${v.rule}] ${v.file} :: ${v.path}  →  "${v.excerpt}"`);
}
process.exit(1);
