import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryFilterOption {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  options: CategoryFilterOption[];
  paramName?: string;
  allLabel?: string;
  className?: string;
}

/**
 * Horizontal pill row driven by URL search params so deep links survive.
 * Active state uses text color + bottom border, no background fill.
 */
const CategoryFilter = ({
  options,
  paramName = "category",
  allLabel = "All",
  className,
}: CategoryFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get(paramName) ?? "all";

  const setActive = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (id === "all") {
      next.delete(paramName);
    } else {
      next.set(paramName, id);
    }
    setSearchParams(next, { replace: true });
  };

  const all = [{ id: "all", label: allLabel }, ...options];

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-4",
        className,
      )}
      role="tablist"
      aria-label="Filter by category"
    >
      {all.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(option.id)}
            className={cn(
              "border-b-2 pb-2 font-mono text-xs uppercase tracking-[0.25em] transition-colors",
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
