

# 109.studio Site Audit: Strategy, UX, and Conversion Review

---

## A. Overall Diagnosis

### 5 Things Working Well

1. **Voice is already strong.** The copy across the site reads like a senior practitioner speaking plainly. It avoids the worst agency cliches. The voice spec has been well-implemented -- the current copy matches the "calm, credible, direct" target almost everywhere.

2. **Two-audience model is explicit on the homepage.** The AudienceSection cleanly separates founders/business leaders from technical teams/agencies. This is unusual and valuable -- most solo practitioners blur their audiences into one generic pitch.

3. **Visual system is disciplined and consistent.** The monospace typography, warm neutral palette, grid backgrounds, border-separated cards, and eyebrow/headline/body hierarchy create a distinctive, recognizable system. It feels technical without being cold. The design does not fight the message.

4. **Information architecture is logical.** Home (overview) > How We Help (service categories) > Offerings (shaped engagements) > Applied AI (specialty depth) > AI in Practice (proof patterns) > About (founder credibility) > Contact. The progression makes sense for a buyer researching the practice.

5. **CTAs are consistent and well-placed.** Every page ends with a clear next-step CTA. The "Start a conversation" language is strong -- it lowers the commitment threshold versus "Request a quote" or "Get started."

### 5 Biggest Problems

1. **No proof anywhere.** There are zero client names, case studies, testimonials, project outcomes, metrics, or logos on the entire site. The "Work patterns" section on AI in Practice is the closest thing, but it reads as hypothetical narrative, not evidence. For a principal-led practice selling to founders and senior technical leaders, this is the single biggest conversion gap. Credibility is being asserted, not demonstrated.

2. **Too many pages doing overlapping work.** The site has 7 content pages (Home, About, Services, Offerings, Applied AI, AI in Practice, Insights). For a solo practice, this creates two problems: (a) visitors struggle to find the right page, and (b) multiple pages repeat the same claims in slightly different words. Services vs. Offerings is the worst overlap -- a visitor landing on Services does not know they also need to visit Offerings to see the actual engagement shapes. Applied AI vs. AI in Practice is similarly confusing.

3. **The homepage is too long and too abstract.** It has 8 sections. By the time a visitor reaches PartnerSection, they have scrolled through ~5 screens of text with no images, no proof, no interactivity, and no variation in visual format. The sections after AudienceSection (Why, Experience, Industries, Labs, Partner) all describe the practice in slightly different abstract terms without adding new concrete information. The page would be stronger at half the length.

4. **No contact form.** The Contact page displays an email address and a mailto link. For a practice selling to non-technical founders and business leaders, this is a conversion barrier. A simple form (name, email, what are you working on) would reduce friction significantly and feel more professional.

5. **The Insights page is a shell.** All articles are placeholder content with no links, no actual content, and no dates. A page full of fake articles actively damages credibility. It should either contain real content or be removed until content exists.

---

## B. Brand and Positioning Review

### Does the site feel principal-led, premium, and credible?

**Mostly yes on tone, no on proof.** The copy consistently positions Damien as the principal doing the work. The design system is restrained and professional. But "premium" and "credible" require evidence, and the site has none. There are no client names, no project outcomes, no testimonials, no case studies, no "as seen in" signals, and no LinkedIn or professional profile links beyond a GitHub repo.

### Does it clearly separate the two audiences?

**On the homepage, yes. Everywhere else, no.** The AudienceSection is excellent. But the Services, Offerings, Applied AI, and Contact pages all address a blended audience. A non-technical founder landing on the Offerings page sees "Platform architecture and implementation support" listed as a deliverable -- that language is for the technical buyer. Meanwhile, the technical buyer sees "Reduce technical risk early" and "Move toward launch with more confidence" -- that is founder language. The pages work acceptably for both audiences, but they do not feel *targeted* to either.

### Where does it sound generic or vague?

- **WhySection**: "product decisions get better when strategy, research, and implementation stay connected" -- this is true but generic. Any competent consultant could say this.
- **ExperienceSection**: The three items (platform modernization, applied AI, team enablement) are described at a level of abstraction that makes them interchangeable with many competitors. No specific project, technology stack, or outcome anchors them.
- **IndustriesSection**: "Complex service platforms" and "Operational and internal tools" are so broad they do not help a buyer self-select. The section would be stronger with 3 specific industries (e.g., "Public sector and civic tech," "Media and publishing," "SaaS and product companies") rather than 5 abstract categories.

### Where does it need stronger proof?

Everywhere, but especially:
- The About page (Damien's bio has no specific projects, clients, or outcomes)
- The homepage ExperienceSection (claims experience but shows none)
- The Offerings page (no indication anyone has actually bought these offerings)
- AI in Practice "Work patterns" (reads as hypothetical, not real)

---

## C. Page-by-Page Review

### Homepage (/)

**Purpose:** Introduce the practice, establish credibility, guide visitors to the right next step.

**Working:** Hero copy is strong. AudienceSection is the standout -- clear, differentiated, useful. FocusSection cards are well-structured.

**Weak:** Too many sections. WhySection, ExperienceSection, and IndustriesSection all say variations of "we do platform work and AI." LabSection and PartnerSection feel like they belong on separate pages, not the homepage. No social proof or trust signals anywhere.

**Recommended changes:**
- Cut to 5 sections: Hero, Focus, Audience, a proof/credibility section (even a simple "20+ years across X clients in Y sectors" with 2-3 anonymized case snapshots), and a CTA.
- Move Labs and Partner content to About or a dedicated page.
- Add a brief trust signal near the hero: years of experience, number of platforms delivered, or sectors served.

**Suggested hero rewrite (minor tightening):**
> Kicker: *109.studio -- Principal-led product engineering and technical advisory*
> H1: *Senior technical direction for products, platforms, and modernization work*
> Body: *I help founders and technical teams turn ambiguous product directions into working platforms, clearer architecture, and delivery plans they can trust. The work spans Drupal, applied AI, and modern platform engineering.*

Note the shift to first person ("I help") -- for a principal-led practice, this is more honest and more compelling than "109.studio helps."

### About (/about)

**Purpose:** Build trust in Damien as a principal.

**Working:** The "Why the studio exists" section is well-written. The Founder panel structure is clean.

**Weak:** Damien's bio is generic. "More than two decades of experience across startups, agencies, and complex public-sector platforms" -- every senior engineer says this. No specific projects, clients, technologies at scale, team sizes led, or outcomes delivered. No photo. No LinkedIn link. The page is too short to build real credibility.

**Recommended changes:**
- Add a professional photo of Damien.
- Add 3-5 specific career highlights (anonymized if needed): "Led the platform modernization of a [X]-page civic information system serving [Y] million users" etc.
- Add a link to LinkedIn or a downloadable capability statement.
- Consider adding a "Values" or "How I work" section with 3-4 concrete working principles.

### Services (/services)

**Purpose:** Show what 109.studio does.

**Working:** The four service cards are clear and well-described. Feature tags add useful specificity.

**Weak:** This page and Offerings are confusingly close. The CTA at the bottom ("Looking for a more shaped engagement? See the commercial offerings") confirms the problem -- the site is asking visitors to do the work of figuring out which page matters. Most visitors will not click through.

**Recommended changes:**
- Merge Services and Offerings into a single page. Lead with the service categories, then show the shaped engagements below, then the "Where to start" guide.
- Alternatively, rename this page to something like "Capabilities" and make Offerings the primary services page.

### Offerings (/offerings)

**Purpose:** Show specific engagement shapes.

**Working:** The offering cards with "Good fit when" and "Typical deliverables" are the strongest content on the site. The "Where to start" decision guide is excellent UX. The process steps section is clear.

**Weak:** This page is better than Services but hidden behind it in the IA. Most visitors will land on Services and never reach this page. The Offerings page should be the *primary* services page.

**Recommended changes:**
- Make this the main "How We Help" page, incorporating the broader service categories as a brief intro before the detailed offerings.
- Add indicative pricing or engagement duration (even "typically 2-4 weeks" or "monthly retainer") to reduce ambiguity.

### Applied AI (/drupal-ai)

**Purpose:** Position the AI capability.

**Working:** The framing as "practical AI for real teams" is strong and differentiated. The four areas of work are specific enough to be useful.

**Weak:** The page title in the nav is "Applied AI" but the URL is `/drupal-ai` -- this is a branding inconsistency. The page is heavily Drupal-focused in places, which may narrow the audience unnecessarily if the practice is broader. The "Collaboration" section at the bottom feels like a different page.

**Recommended changes:**
- Change the URL to `/applied-ai` to match the nav label.
- Decide whether Applied AI is Drupal-specific or broader, and make the page consistent.
- Cut the Collaboration section or move it to Contact.

### AI in Practice (/ai-in-practice)

**Purpose:** Show how AI work plays out in practice.

**Working:** The "Representative applications" section is useful. The principles (Observable, Reviewable, Grounded, Maintainable) are strong differentiators. The "What this is not" section is one of the best on the site -- it builds trust by showing what the practice refuses to do.

**Weak:** This page overlaps heavily with Applied AI. A visitor should not need two pages to understand the AI story. The "Work patterns" section tries to be case studies but reads as hypothetical.

**Recommended changes:**
- Merge the best content from this page into the Applied AI page. The principles, representative applications, and "what this is not" list are all strong enough to keep.
- If the work patterns become real case studies with specific (even anonymized) details, they deserve their own section.

### Insights (/insights)

**Purpose:** Thought leadership.

**Weak:** Entirely placeholder. No articles link anywhere. No dates. The heading "A first set of practical essays to anchor the thought-leadership layer" is literally internal project language leaking into the UI.

**Recommended changes:**
- Remove this page from the nav until there is at least one real, published article.
- When real content exists, this becomes valuable. But placeholder content is worse than no content.

### Contact (/contact)

**Purpose:** Convert interest into a conversation.

**Working:** The page structure is clean. The "inquiry types" cards help visitors self-identify. "Tell Damien what you are working on" is good direct language.

**Weak:** No contact form. Just a mailto link. For a non-technical founder, this feels like a dead end. The "Collaboration models" sidebar is redundant with content elsewhere.

**Recommended changes:**
- Add a simple contact form: name, email, organization (optional), "What are you working on?" textarea. Store submissions in the database and/or send via email.
- Keep the mailto as a secondary option for people who prefer email.
- Add a brief note about response time ("Damien typically responds within one business day").

---

## D. Design and UX Review

### Visual hierarchy
Strong. The eyebrow > headline > body > tags pattern is consistent and creates clear scanning paths. Primary color (warm brown/amber) is used sparingly and effectively for emphasis.

### Section flow
The grid-separated card pattern is overused. Almost every section on every page uses the same `grid gap-px bg-border` card layout. This creates visual monotony on long pages. Varying the presentation format (e.g., a timeline, a comparison table, a pull quote, an image) would improve engagement.

### Spacing and readability
Good. Line heights are generous, max-widths constrain text appropriately, and the monospace headings create clear hierarchy. The `py-32` section padding on the homepage is generous -- could be tightened to `py-20 md:py-24` (matching subpages) to reduce scroll fatigue.

### CTA placement
Adequate. Every page ends with a CTA. The homepage could benefit from a mid-page CTA after the AudienceSection (when the visitor has self-identified).

### Consistency
High across pages. The one inconsistency: some page-end CTAs use `px-8 py-4 text-sm` buttons while others use `px-5 py-3 text-xs` buttons (the recent normalization work addressed some of this).

### Mobile responsiveness
The responsive breakpoints look correct in code. The 5-column IndustriesSection grid (`xl:grid-cols-5`) will stack to 2 columns on medium screens, which may create uneven layouts with 5 items. The mobile hamburger menu is implemented.

### Where design undercuts trust
- **No images anywhere.** The entire site is text and icons. A single photo of Damien on the About page would significantly improve trust.
- **No external validation.** No logos, testimonials, or third-party proof.
- **The Insights page with fake articles** actively damages the credibility the rest of the site works to build.

---

## E. Priority Action Plan

### High priority (do now)

1. **Remove or hide the Insights page** from the navigation until real content exists.
2. **Add a contact form** to the Contact page. Even a basic name/email/message form that sends to hello@109.studio.
3. **Merge Services and Offerings** into a single "How We Help" page.
4. **Merge Applied AI and AI in Practice** into a single "Applied AI" page.
5. **Add at least one trust signal** to the homepage hero area: years of experience, sectors, or a brief credibility line.

### Next priority (do next)

6. **Shorten the homepage** to 5 sections by moving Labs and Partner content elsewhere.
7. **Add a photo of Damien** to the About page.
8. **Add 3-5 specific career highlights** (anonymized) to the About page.
9. **Add a mid-page CTA** on the homepage after AudienceSection.
10. **Change the `/drupal-ai` URL** to `/applied-ai`.

### Later experiments (test after core fixes)

11. **Add anonymized case study snapshots** (even 2-3 brief ones with context/role/outcome).
12. **Test first-person voice** ("I help...") versus third-person ("109.studio helps...") on the homepage.
13. **Add indicative engagement durations or pricing signals** to Offerings.
14. **Add a "How an engagement starts" micro-flow** to the Contact page (step 1: send a note, step 2: 30-min call, step 3: scoped proposal).
15. **Consider adding a LinkedIn link** and/or downloadable capability statement.

---

## F. Suggested Implementation Prompts

**Remove Insights from nav:**
> "Remove the Insights page from the navigation menu in the Layout component. Keep the route and page file but hide it from the nav until I have real content to publish."

**Add contact form:**
> "Add a contact form to the Contact page with fields for name, email, organization (optional), and a textarea labeled 'What are you working on?' Store submissions in the database and show a success message after submission."

**Merge Services and Offerings:**
> "Combine the Services page and Offerings page into a single page at /services with the nav label 'How We Help'. Lead with a brief intro, then show the four shaped offerings with their 'Good fit when' and 'Typical deliverables' sections, then the 'Where to start' guide, then the process steps. Remove the separate /offerings route."

**Merge Applied AI pages:**
> "Combine the Applied AI page (/drupal-ai) and AI in Practice page (/ai-in-practice) into a single page at /applied-ai with the nav label 'Applied AI'. Keep the hero, the four areas of work, the representative applications, the principles (Observable, Reviewable, Grounded, Maintainable), and the 'What this is not' list. Remove the separate /ai-in-practice route."

**Add trust signal to homepage:**
> "Add a brief credibility line below the hero paragraph on the homepage, something like: '20+ years across startups, public-sector platforms, and agency delivery environments.' Style it as a subtle mono text line, similar to the eyebrow labels."

**Add photo to About page:**
> "Add a professional headshot image to the About page Founder section. Place it inside the bordered panel alongside the name and title."

**Shorten homepage:**
> "Remove the LabSection and PartnerSection from the homepage. The homepage should end after IndustriesSection, followed by the footer CTA."

