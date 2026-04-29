## Add LinkedIn link to footer Connect section

Add a LinkedIn link in `src/components/Layout.tsx`, placed between the GitHub and YouTube links in the footer's "Connect" column.

### Changes
- Import the `Linkedin` icon from `lucide-react` (alongside existing `Github`, `Mail`, `Youtube` imports).
- Insert a new anchor between the GitHub and YouTube links:
  - URL: `https://www.linkedin.com/company/109studio`
  - Label: `LinkedIn`
  - Icon: `Linkedin` (h-4 w-4)
  - `target="_blank"` and `rel="noreferrer"`, matching the existing styling.

No other files affected.