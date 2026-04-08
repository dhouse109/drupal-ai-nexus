
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form (public-facing)
CREATE POLICY "Anyone can submit a contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- No public read access - submissions are private
CREATE POLICY "No public read access"
  ON public.contact_submissions
  FOR SELECT
  USING (false);
