# Icon Usage Report

This is an audit of every `lucide-react` icon used across the site, where it appears, and why. It is split into **content icons** (chosen deliberately to convey meaning) and **chrome/UI icons** (used by base shadcn primitives or generic UI affordances).

---

## 1. Content icons — chosen for meaning

### `ArrowRight`
Used as the directional cue on every primary CTA button across the site.
- **HeroSection.tsx** — "Start a conversation" CTA
- **WhySection.tsx**, **ExplorePathsSection.tsx**, **PartnerSection.tsx**, **LabSection.tsx** — section-level CTAs
- **Layout.tsx** — footer CTA
- **Pages:** About, Services, Offerings, Portfolio, Contact, Insights, InsightArticle, AIInPractice, AppliedAI, ArchitectureAudit, DrupalAI
- **Why:** Single, repeated visual signal that an action moves the visitor forward. Sized small (`h-3.5 w-3.5`) to stay flush with the mono-uppercase button label.

### `ArrowLeft`
- **InsightArticle.tsx** — "Back to insights" link
- **Why:** Mirror of `ArrowRight` for back-navigation within the Insights flow.

### Social / contact icons (footer + Contact page)
- **`Mail`** — Layout footer ("hello@109.studio") and Contact page ("Or email directly"). Why: signals direct email contact.
- **`Linkedin`** — Layout footer (company LinkedIn). Why: professional network link.
- **`Github`** — Layout footer + Contact page ("View project repo"). Why: code/work portfolio link.
- **`Youtube`** — Layout footer (109studiotube channel). Why: video channel link.

### Hero / marker icons (single instances)
- **`Handshake`** (PartnerSection.tsx, `h-10 w-10`) — Visual anchor for the "Partner" section. Why: conveys collaboration/partnership.
- **`CheckCircle`** (Contact.tsx, `h-12 w-12`) — Success state after submitting the contact form ("Conversation started"). Why: positive confirmation.
- **`ShieldCheck`** (DrupalAI.tsx, `h-6 w-6`) — Marker for the "Commitments that guide the work" block. Why: trust / safeguards.
- **`PencilLine`** (Insights.tsx, InsightArticle.tsx) — "Draft" / "Draft note" badge. Why: marks unfinished or note-style entries.

### FocusSection.tsx — three pillars of the practice
- **`Workflow`** — Fractional CTO and technical advisory (process / orchestration of decisions)
- **`Blocks`** — Platform and product engineering (composable building blocks)
- **`GitFork`** — Research and prototype sprints (branching exploration)

### IndustriesSection.tsx — industries served
- **`Landmark`** — Civic and public-information platforms (government / civic institution)
- **`GraduationCap`** — Editorial and publishing systems (academic/editorial associations)
- **`Workflow`** — Operational and internal tools (process orchestration)
- **`Layers3`** — Complex service platforms (layered systems)
- **`Building2`** — Agency and team augmentation (organizations / firms)

### LabSection.tsx — open-source / lab work
- **`Workflow`** — Reusable workflow patterns
- **`Network`** — Search and retrieval (graph/connections)
- **`Code2`** — Developer tooling and acceleration

### AppliedAI.tsx — applied-AI capabilities
- **`Bot`** — Workflow support inside products and teams (AI agent/assistant)
- **`FileSearch`** — Content operations with human review (audit/search through content)
- **`Network`** — Retrieval and answer quality (RAG / connected knowledge)

### DrupalAI.tsx — Drupal-AI capabilities
- **`FileSearch`** — Content operations
- **`Network`** — Retrieval over structured Drupal content
- **`Workflow`** — Workflow and agentic support
- **`Bot`** — Delivery and modernization
- **`ShieldCheck`** — Commitments block (trust)

---

## 2. Chrome / UI icons (generic affordances)

### Navigation chrome
- **`Menu`**, **`X`** — Layout.tsx and Navbar.tsx mobile menu open/close toggle.

### shadcn/ui primitives (used only inside `src/components/ui/*`)
These come with the component templates and are not chosen per-feature:
- **`ChevronDown`** — accordion, select, navigation-menu
- **`ChevronUp`** — select
- **`ChevronLeft`**, **`ChevronRight`** — calendar, pagination, breadcrumb, dropdown-menu, context-menu, menubar
- **`Check`** — checkbox, select, dropdown-menu, context-menu, menubar (selected/checked state)
- **`Circle`** — radio-group, dropdown-menu, context-menu, menubar (radio dot indicator)
- **`X`** — dialog, sheet, toast (close affordance)
- **`Search`** — command palette
- **`MoreHorizontal`** — breadcrumb, pagination (overflow indicator)
- **`Dot`** — input-otp separator
- **`GripVertical`** — resizable handle
- **`PanelLeft`** — sidebar toggle
- **`ArrowLeft`**, **`ArrowRight`** — carousel previous/next

These are standard shadcn defaults and consistent across most Lovable projects.

---

## 3. Observations and small inconsistencies

- **Two navbars exist:** `Layout.tsx` (the one actually used site-wide) and `Navbar.tsx` (legacy, not referenced in routing). Both import `Menu`/`X`. `Navbar.tsx` may be unused dead code.
- **`Workflow` is reused in three different contexts** (Focus, Industries, Lab, DrupalAI). This is intentional thematic shorthand for "process," but if you want each section to feel more distinct, Industries' "Operational and internal tools" could swap to something like `Cog` or `Settings2` to avoid overlap with FocusSection.
- **`Network` appears in both LabSection and AppliedAI/DrupalAI** for retrieval. Consistent and fine.
- **Icon sizing is consistent by role:** `h-3.5 w-3.5` for inline CTA arrows, `h-4 w-4` for footer/social, `h-6 w-6` for section-marker icons in cards, `h-10 w-10`–`h-12 w-12` for hero feature anchors. This pattern is healthy and worth preserving.

---

No code changes are proposed in this report. Let me know if you'd like to act on any of the observations (e.g., remove the unused `Navbar.tsx`, or differentiate the reused `Workflow` icon).
