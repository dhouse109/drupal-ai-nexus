# Stage 1 — Voice pass: headline and CTA cleanup

This file captures the exact Stage 1 changes intended for the site copy pass.

## Note on execution

The current GitHub connector path allowed branch creation and additive file writes, but blocked direct overwrite/delete operations on tracked files during this session. Because of that, this PR records the exact Stage 1 edits file-by-file so the implementation can proceed cleanly in the next pass.

The target remains the same:
- remove slogan-shaped headlines
- tighten CTA language
- replace vague AI phrasing with named workflows where possible
- preserve the existing page structure

---

## 1. `src/pages/About.tsx`

### Replace H1
**From**
`Expert-led. Hands-on. Designed to outlast the engagement.`

**To**
`Senior technical leadership that stays close to the build.`

---

## 2. `src/pages/Services.tsx`

### Replace H1
**From**
`From strategy through delivery, this is what we cover`

**To**
`What 109 actually does inside an engagement`

### Replace “Starting offers” H2
**From**
`Services explains the practice. Offerings explains the clearest ways to begin.`

**To**
`If you already know the work needs a shaped starting point`

---

## 3. `src/pages/AIInPractice.tsx`

### Replace H1
**From**
`What practical AI looks like`

**To**
`Where applied AI tends to be worth doing`

### Replace hero supporting paragraph
**From**
`These examples show how AI becomes useful when it is tied to real workflows, content operations, search, and delivery systems.`

**To**
`Three patterns Damien returns to most often: AI tied to a content operation, AI tied to search and retrieval, and AI tied to internal delivery work. Each one starts with a workflow that already exists.`

### Replace section eyebrow
**From**
`Why this matters`

**To**
`How to read this page`

### Replace section H2
**From**
`Applied AI becomes most useful when it improves a real workflow`

**To**
`Three workflow patterns, each with a concrete starting point`

### Replace body paragraph 1
**To**
`Each example below names a workflow first and the AI second. That order matters. The model is the easy part of the conversation; the surrounding system is where the value either holds up or evaporates.`

### Replace body paragraph 2
**To**
`If one of these patterns matches something your team is already doing, that is usually the right place to start a small, reviewable trial.`

### Replace third example description
**From**
`Some of the best AI work happens behind the scenes: helping teams summarize information, support handoffs, generate first-pass documentation, or reduce repetitive technical work.`

**To**
`Some of the most useful AI work is internal: drafting release notes from merged PRs, turning meeting transcripts into action items, or generating first-pass documentation that someone on the team edits before it lands.`

### Replace third example outcomes
**From**
- `Faster execution on repeatable tasks`
- `Stronger delivery support systems`
- `More time for higher-value judgment`

**To**
- `PR review summaries`
- `Drafted release notes`
- `First-pass documentation`

### Replace final CTA H2
**From**
`Interested in a practical next step?`

**To**
`Have a workflow you'd like to test this against?`

---

## 4. `src/pages/DrupalAI.tsx`

### Replace H1
**From**
`Practical AI work for Drupal teams, content platforms, and modern delivery environments`

**To**
`Applied AI work for Drupal teams`

### Replace hero supporting paragraph
**From**
`109.studio explores how AI can improve content systems, delivery workflows, search, and platform strategy in ways that are useful to real teams working with Drupal.`

**To**
`109.studio explores where AI can improve Drupal publishing, search, editorial workflows, and delivery work in ways teams can actually run and review.`

### Replace first section H2
**From**
`Applied AI for teams working in complex content and platform environments`

**To**
`Where AI is starting to fit inside Drupal delivery work`

### Replace first section paragraph 1
**To**
`The focus here is the practical work around a Drupal platform: editorial support, search and retrieval, internal tooling, and delivery workflows that need stronger support.`

### Replace first section paragraph 2
**To**
`The goal is to use AI where it makes a Drupal system easier to operate, easier to search, or easier for a team to keep improving.`

### Replace “AI-assisted platform delivery” description
**From**
`Developer workflows, implementation experiments, and delivery patterns that help teams move faster while keeping the work reviewable and maintainable.`

**To**
`PR review assistance, visual-regression checks, and AI-drafted release notes wired into an existing Drupal team's CI.`

### Replace CTA eyebrow
**From**
`Want to see where this becomes concrete?`

**To**
`Examples`

### Replace CTA H2
**From**
`See the practical patterns behind the applied AI work`

**To**
`See the workflow patterns behind this work`

### Replace collaboration H2
**From**
`Interested in working together in the Drupal AI space?`

**To**
`Working on Drupal AI yourself?`

### Replace collaboration paragraph
**To**
`109.studio is interested in working with agencies, technical teams, and community-aligned partners exploring editorial workflows, retrieval, and delivery patterns inside Drupal.`

---

## 5. `src/pages/Insights.tsx`

### Replace “Recent entries” H2
**From**
`A first set of practical essays to anchor the thought-leadership layer`

**To**
`More notes from the work`

---

## 6. `src/components/Layout.tsx`

### Replace footer CTA H2
**From**
`Need a clearer path for a product, platform, or modernization effort?`

**To**
`Have a system, a platform, or a decision you want a senior read on?`

---

## 7. `src/pages/Offerings.tsx`

### Replace final CTA H2
**From**
`If you are exploring an applied AI direction, start with the problem you want to improve`

**To**
`Not sure which one fits? Start by describing the situation.`

### Recommended follow-on cleanup in same block
The secondary CTA should stop pointing to `AI in Practice` from the Offerings page once the H2 becomes more general. A better fit is:
- label: `See how 109 helps`
- route: `/services`

---

## 8. `src/components/WhySection.tsx`

### Replace paragraph 1
**From**
`109.studio is built around a simple idea: product decisions get better when strategy, research, and implementation stay connected. That makes it easier to test ideas earlier, reduce delivery risk, and build systems teams can actually sustain.`

**To**
`Product decisions get better when strategy, research, and implementation stay connected. That makes it easier to test ideas earlier, reduce delivery risk, and build systems teams can sustain.`

### Replace paragraph 2
**From**
`The work is shaped by platform thinking, practical experimentation, and a strong bias toward clarity. The result is better-scoped projects, stronger technical foundations, and delivery systems that can keep up as products evolve.`

**To**
`The work draws on platform experience, hands-on prototyping, and a habit of writing decisions down. The result is better-scoped projects, stronger technical foundations, and delivery systems that can keep up as products evolve.`

---

## 9. `src/pages/AppliedAI.tsx`

### Replace final CTA H2
**From**
`If you are exploring an applied AI direction, start with the problem you want to improve`

**To**
`Not sure where AI fits? Start with the workflow or content problem in front of you.`

---

## 10. `src/components/FocusSection.tsx`

### Tighten second card description
**From**
`Design and build content-rich platforms, delivery systems, and intelligent features with maintainability and long-term change in mind.`

**To**
`Design and build content-rich platforms, delivery systems, and search or workflow features with maintainability and long-term change in mind.`

---

## Expected result after Stage 1 lands

- The most visible slogan-shaped copy is gone
- CTA language becomes more practical
- AI wording becomes more concrete in high-traffic places
- The site keeps its current structure while sounding more principal-led and less packaged
