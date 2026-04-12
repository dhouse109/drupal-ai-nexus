

## Plan: Align AI in Practice CTA with footer CTA style

The footer CTA (Layout.tsx) and the AI in Practice page CTA differ in several ways:

| Property | Footer CTA | AI in Practice CTA |
|---|---|---|
| Grid ratio | `1.2fr / 0.8fr` | `1.1fr / 0.9fr` |
| Title size | `text-2xl / md:text-4xl` | `text-3xl / md:text-5xl` |
| Body text size | `text-sm / md:text-base` | `text-base / md:text-lg` |
| Button padding | `px-5 py-3` | `px-8 py-4` |
| Button font size | `text-xs` | `text-sm` |
| Button tracking | `tracking-[0.3em]` | `tracking-widest` |
| Arrow icon size | `h-3.5 w-3.5` | `h-4 w-4` |

### Changes in `src/pages/AIInPractice.tsx`

Update the bottom CTA section (~lines 229-260) to match the footer's sizing and proportions:

- Grid: `lg:grid-cols-[1.2fr_0.8fr]`
- Title: `text-2xl md:text-4xl`
- Body: `text-sm md:text-base`
- Buttons: `px-5 py-3`, `text-xs`, `tracking-[0.3em]`
- Arrow: `h-3.5 w-3.5`
- Secondary button: same border/hover style with `tracking-[0.3em]`

No content or copy changes — purely visual alignment.

