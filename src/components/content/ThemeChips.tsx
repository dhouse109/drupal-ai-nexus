interface ThemeChipsProps {
  themes: string[];
  max?: number;
}

const ThemeChips = ({ themes, max }: ThemeChipsProps) => {
  if (!themes || themes.length === 0) return null;
  const visible = typeof max === "number" ? themes.slice(0, max) : themes;
  const overflow = typeof max === "number" ? Math.max(themes.length - max, 0) : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((theme) => (
        <span
          key={theme}
          className="inline-flex items-center border border-border px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-dim"
        >
          {theme}
        </span>
      ))}
      {overflow > 0 && (
        <span className="inline-flex items-center px-1 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-dim">
          +{overflow} more
        </span>
      )}
    </div>
  );
};

export default ThemeChips;
