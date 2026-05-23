# 109.studio

https://109.studio

## About this repository

This is a Lovable-managed project. The root `.env` is intentionally tracked because it contains publishable frontend Supabase configuration used by the preview/build workflow.

### Environment variables

The tracked `.env` exposes three values, all of which are **publishable frontend configuration** and safe to commit:

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

A placeholder `.env.example` is provided for reference when cloning the repo outside of Lovable.

### Security model

Data security is enforced through **Supabase Row Level Security (RLS) policies**, not by hiding the publishable anon key. Treat the publishable key the same way you would any other client-side configuration — its presence in the bundle does not grant elevated access.

### What must never be committed

The following must **never** be added to this repository or any client-side code:

- Supabase service-role keys
- JWT secrets
- Private third-party API keys
- Database passwords
- Any other backend-only credentials

These belong in Lovable Cloud secrets and are only accessible to edge functions at runtime.
