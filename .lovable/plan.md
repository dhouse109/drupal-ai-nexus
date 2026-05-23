# Pre-public cleanup pass (revised)

Safe, Lovable-compatible hardening. No key rotation, no `.env` removal, no backend secrets in client code.

## 1. README update

Rewrite `README.md` (currently just `https://109.studio`) to keep the link and add:

- This is a Lovable-managed project. **In this Lovable-managed project, the root `.env` is intentionally tracked because it contains publishable frontend Supabase configuration used by the preview/build workflow.**
- `VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` are publishable frontend configuration — safe to commit.
- Data security is enforced via Supabase Row Level Security, not by hiding the publishable anon key.
- Never commit: service-role keys, JWT secrets, private API keys, database passwords, or any backend-only credentials. Those belong in Lovable Cloud secrets (used only by edge functions).

## 2. `.env.example`

New file at repo root, placeholders only:

```
VITE_SUPABASE_PROJECT_ID="your-project-ref"
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-anon-key"
```

## 3. Contact form honeypot (silent no-op)

Edit `src/pages/Contact.tsx`:

- Add a hidden `website` honeypot input (off-screen, `tabIndex={-1}`, `autoComplete="off"`, `aria-hidden`). Never sent to Supabase.
- In `handleSubmit`, if honeypot is non-empty → set `submitted = true` and return. No insert, no toast.

## 4. Time-on-page check (gentle block, no fake success)

- `const mountTime = useRef(Date.now())`.
- In `handleSubmit`, after zod validation and honeypot check, if `Date.now() - mountTime.current < 3000` ms:
  - Do **not** insert.
  - Do **not** show fake success.
  - Show a gentle inline message (and/or toast): "That came through a bit too fast — please wait a moment and try again." Legitimate autofill users can simply resubmit.

Threshold: 3000 ms (low enough to not frustrate real users, high enough to catch instant bot submits).

## 5–8. Explicit non-changes

- No `supabase--rotate_api_keys`.
- No edits to `.env`, `src/integrations/supabase/client.ts`, or `src/integrations/supabase/types.ts`.
- No service-role / JWT secrets in client code.
- No Supabase project configuration changes.

## 9. RLS confirmation on `contact_submissions`

Read-only verification — current state already satisfies the requirement:

- RLS enabled.
- INSERT policy `Anyone can submit a contact form` with `WITH CHECK true` → anon INSERT allowed.
- SELECT policy `No public read access` with `USING false` → anon SELECT blocked.
- No UPDATE / DELETE policies → both implicitly denied for anon.

Will run `supabase--linter` post-edit to confirm no new warnings.

## Files touched

- `README.md` (rewrite)
- `.env.example` (new)
- `src/pages/Contact.tsx` (honeypot + timing guard only)

## Out of scope

Captcha, edge-function rate limiting, content/terminology cleanup, nav/CTA changes.
