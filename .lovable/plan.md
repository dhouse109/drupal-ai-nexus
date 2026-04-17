

## Replacing "Contact" with "Insights" in the top nav — recommendation

### My take: yes, do it

The current nav has a redundancy problem and a discoverability problem, both of which this swap solves cleanly.

**Why "Contact" is redundant in the nav today:**
- The primary "Start a conversation" pill button (right side of header) already routes to `/contact` and is visually dominant.
- Having `Contact` as a plain text link *next to* the same-destination pill button gives the user two ways to do the same thing within ~80px of screen space. The pill wins every time — the text link is dead weight.
- We just hardened the pattern so that pill stays visible on `/contact` itself, reinforcing it as the canonical contact entry point.

**Why "Insights" deserves the slot:**
- Insights is currently only reachable from the footer ("Proof & Ideas") and from a contextual CTA on `/applied-ai`. It's the main proof-of-thinking surface and it's three layers deep.
- Per `mem://navigation/structure`, Insights is part of the proof/ideas axis — promoting it to the top nav matches how a principal-led practice typically wants prospects to browse: read the work first, then decide to reach out.
- It also gives the nav a healthier rhythm: *who we are → what we do → what we've thought about → (CTA to talk)* instead of *who we are → what we do → contact → (CTA to contact)*.

### Proposed changes

**`src/components/Layout.tsx`** — `navItems` array (line 6–13):

From:
```ts
{ label: "Contact", to: "/contact" },
```
To:
```ts
{ label: "Insights", to: "/insights" },
```

That's the only line change needed. The pill CTA, mobile menu, and footer all continue to work — the pill already handles contact, and the footer's "Proof & Ideas" group can drop the now-duplicate Insights entry (optional tidy-up below).

### Optional follow-ups (not required, ask if you want them)

1. **Footer tidy** — `footerProofIdeas` (line 15–18) currently lists `Insights` and `AI in Practice`. With Insights promoted, the footer group becomes lopsided. Two options:
   - Leave as-is (footer mirrors site map, repetition is fine)
   - Drop `Insights` from the footer group and rename it to something like a single `AI in Practice` link, or fold it into Navigation
   - I'd recommend **leaving it** — footer is a sitemap, redundancy there is expected and helps SEO/scanning.

2. **Mobile menu** — uses the same `navItems` array, so it updates automatically. No extra work.

3. **Active state on `/contact`** — with `Contact` removed from `navItems`, no nav link will highlight when the user is on `/contact`. The pill button stays visible (per the recent fix) so the page still feels grounded. This is the same pattern used by most practice sites.

### Files touched

- `src/components/Layout.tsx` (one line: swap `Contact` → `Insights` in `navItems`)

### What this is *not* doing

- Not removing the `/contact` route or any contact functionality — the pill CTA is the canonical entry point.
- Not changing voice, visual system, or CTA pattern.
- Not touching any page-level content.

### Memory update

After approval, I'll update `mem://navigation/structure` to record: *Top nav promotes Insights as a primary proof surface; `/contact` is reached exclusively via the persistent pill CTA in the header.*

