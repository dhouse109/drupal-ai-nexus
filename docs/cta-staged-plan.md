# CTA Refresh Staged Plan

## Goal
Refine calls to action across 109.studio so they feel more welcoming, principal-led, and useful to visitors who may be interested in the work but are not yet familiar with Damien or the practice.

## Voice standard
The copy should sound like:
- a senior technical leader speaking plainly
- calm, direct, and commercially clear
- collaborative without sounding soft
- confident without asking the visitor to self-diagnose too early

The copy should avoid:
- procedural intake language
- overly technical framing in first-touch moments
- CTA copy that feels intrusive or high-pressure
- repetitive use of "review offerings" when a more natural path can be named

## Working principle
Each CTA should answer one of three questions:
1. What should I do next?
2. Why would I do that?
3. How much effort is required from me?

Where possible, the copy should lower friction by making the next step feel simple and personal.

---

## Stage 1 — Warm the entry points
**Purpose:** Make the first-touch conversion moments feel more inviting.

**Target files:**
- `src/components/Layout.tsx`
- `src/pages/Contact.tsx`

**Focus:**
- Rewrite the global footer CTA block
- Rewrite the Contact page hero and intro copy
- Make the form ask feel lighter and more personal
- Replace language that sounds like an intake checklist with language that sounds like a straightforward invitation

**Success criteria:**
- The footer no longer assumes the visitor already understands the engagement model
- The Contact page feels introductory rather than evaluative
- The form language lowers pressure and makes it clear that a short note is enough

---

## Stage 2 — Normalize repeated CTA language across key pages
**Purpose:** Reduce inconsistency and make the site feel more intentional.

**Target files:**
- `src/components/HeroSection.tsx`
- `src/pages/Services.tsx`
- `src/pages/AppliedAI.tsx`
- `src/pages/AIInPractice.tsx`

**Focus:**
- Standardize the primary and secondary CTA patterns
- Replace more mechanical labels where needed
- Use natural routing language such as:
  - `Start a conversation`
  - `See how 109 helps`
  - `See starting points`
  - `Explore applied AI`

**Success criteria:**
- Repeated CTA pairs feel consistent from page to page
- Primary CTAs invite contact without sounding pushy
- Secondary CTAs describe the destination in plain language

---

## Stage 3 — Improve front-door offer language
**Purpose:** Make shaped starting points easier to understand and easier to choose.

**Likely target files:**
- `src/pages/Offerings.tsx`
- any shared components used by offerings cards or offer detail sections

**Focus:**
- Clarify the difference between browsing the practice and choosing a starting offer
- Tighten offer CTAs so they sound like a next step, not a brochure label
- Make each offer CTA answer: who it is for, when to use it, and what happens next

**Success criteria:**
- Visitors can self-select into the right starting point more easily
- Offer CTAs feel commercially clear without becoming salesy
- The offerings page supports both non-technical buyers and technical evaluators

---

## Stage 4 — Add trust-building microcopy around contact and response flow
**Purpose:** Improve conversion confidence at the moment of action.

**Likely target files:**
- `src/pages/Contact.tsx`
- any shared CTA or form components that appear elsewhere

**Focus:**
- Clarify what happens after someone reaches out
- Reassure visitors that the first step is lightweight
- Introduce short trust cues where useful, such as principal review, response timing, or how engagements usually begin

**Success criteria:**
- The contact flow feels personal and low-friction
- Visitors understand what they can expect after submitting the form
- The page sounds like Damien, not a generic agency intake form

---

## Stage 5 — Proof-led CTA refinement
**Purpose:** Connect CTA language more directly to credibility.

**Likely target files:**
- `src/pages/About.tsx`
- `src/pages/Insights.tsx`
- `src/pages/AIInPractice.tsx`
- any case study or proof modules added later

**Focus:**
- Use proof-adjacent CTA copy after credibility sections
- Shift some CTA moments from generic action prompts to context-aware next steps
- Example direction:
  - after proof: `Talk through a similar challenge`
  - after insights: `Start with your situation`
  - after applied AI examples: `Discuss a practical use case`

**Success criteria:**
- CTA language feels increasingly specific as trust increases
- The site moves from general invitation to context-aware action
- Proof sections and CTA sections support each other more directly

---

## Recommended PR sequence
1. **PR 1:** Stage 1 — footer and Contact page warm-up
2. **PR 2:** Stage 2 — homepage and service-level CTA normalization
3. **PR 3:** Stage 3 — offerings page CTA refinement
4. **PR 4:** Stage 4 — trust-building microcopy around contact and next steps
5. **PR 5:** Stage 5 — proof-led CTA refinement across About, Insights, and AI in Practice

## Review approach
For each PR:
- keep the scope tight
- isolate one conversion problem at a time
- review tone, clarity, and buyer fit before moving to the next stage
- prefer string changes first, then structure changes only if the copy still needs help

## Notes for implementation
The current highest-priority friction points are the global footer CTA and the Contact page copy. Those are the first places a new visitor can feel pushed into self-diagnosis before enough trust has been built.
