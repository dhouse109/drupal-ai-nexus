/**
 * Card grid divider helper.
 *
 * Tailwind's JIT scanner only sees literal class strings. Every class this
 * module can return must therefore appear verbatim somewhere in the source.
 * The complete allowlist (also a safelist for Tailwind):
 *
 *   border-border
 *   border-t border-t-0 border-l border-l-0
 *   md:border-t md:border-t-0 md:border-l md:border-l-0
 *   xl:border-t xl:border-t-0 xl:border-l xl:border-l-0
 *   md:col-span-2 md:col-span-3
 *   xl:col-span-1 xl:col-span-2 xl:col-span-3
 *
 * Goal: only internal dividers between rows/columns. No outer frame on the
 * grid (no top border on first-row items, no left border on first-column
 * items, no right or bottom border anywhere).
 */

type SupportedGridColumns = 2 | 3;

type CardGridItemOptions = {
  index: number;
  itemCount: number;
  mdColumns?: SupportedGridColumns;
  xlColumns?: SupportedGridColumns;
};

export const cardGridClass = "grid md:grid-cols-2 xl:grid-cols-3";

// ---- literal class lookup tables ----------------------------------------

const MOBILE_TOP = {
  on: "border-t",
  off: "", // first item at mobile gets no top border; base has none
};

const MD_TOP = {
  on: "md:border-t",
  off: "md:border-t-0",
};

const MD_LEFT = {
  on: "md:border-l",
  off: "md:border-l-0",
};

const XL_TOP = {
  on: "xl:border-t",
  off: "xl:border-t-0",
};

const XL_LEFT = {
  on: "xl:border-l",
  off: "xl:border-l-0",
};

const MD_SPAN: Record<number, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
};

const XL_SPAN: Record<number, string> = {
  1: "xl:col-span-1",
  2: "xl:col-span-2",
  3: "xl:col-span-3",
};

// ---- helpers -------------------------------------------------------------

const getLastSpanForColumns = (
  columns: SupportedGridColumns,
  itemCount: number,
): number => {
  const remainder = itemCount % columns;
  if (remainder === 0) return 1;
  // 1 leftover at 2-col → span 2; 1 leftover at 3-col → span 3; 2 leftover at 3-col → span 2.
  if (remainder === 1) return columns;
  if (columns === 3 && remainder === 2) return 2;
  return 1;
};

/**
 * For a given breakpoint with `columns` columns, return the effective row
 * and starting column for `index`, accounting for the final item spanning
 * the remainder of the row.
 */
const getEffectivePosition = ({
  index,
  itemCount,
  columns,
}: {
  index: number;
  itemCount: number;
  columns: SupportedGridColumns;
}) => {
  const isLast = index === itemCount - 1;
  const lastSpan = getLastSpanForColumns(columns, itemCount);

  if (isLast && lastSpan === columns) {
    // Final item occupies its own full row.
    const row = Math.floor(index / columns);
    return { row, col: 0 };
  }

  if (isLast && lastSpan === 2 && columns === 3) {
    // Final item starts at column 1 (middle) of its row.
    const row = Math.floor(index / columns);
    return { row, col: 1 };
  }

  return {
    row: Math.floor(index / columns),
    col: index % columns,
  };
};

// ---- public API ----------------------------------------------------------

export const getCardGridItemClass = ({
  index,
  itemCount,
  mdColumns,
  xlColumns,
}: CardGridItemOptions) => {
  const classes: string[] = ["border-border"];

  // Mobile (single column): top border on every item except the first.
  if (index > 0) {
    classes.push(MOBILE_TOP.on);
  }

  // md breakpoint
  if (mdColumns) {
    const { row, col } = getEffectivePosition({
      index,
      itemCount,
      columns: mdColumns,
    });
    classes.push(row > 0 ? MD_TOP.on : MD_TOP.off);
    classes.push(col > 0 ? MD_LEFT.on : MD_LEFT.off);

    // Span for last item if there's a remainder of 1 at md.
    if (index === itemCount - 1) {
      const span = getLastSpanForColumns(mdColumns, itemCount);
      if (span !== 1 && MD_SPAN[span]) {
        classes.push(MD_SPAN[span]);
      }
    }
  }

  // xl breakpoint
  if (xlColumns) {
    const { row, col } = getEffectivePosition({
      index,
      itemCount,
      columns: xlColumns,
    });
    classes.push(row > 0 ? XL_TOP.on : XL_TOP.off);
    classes.push(col > 0 ? XL_LEFT.on : XL_LEFT.off);

    if (index === itemCount - 1) {
      const span = getLastSpanForColumns(xlColumns, itemCount);
      if (MD_SPAN[span] || span === 1) {
        // Always emit an explicit xl span for the last item so md spans
        // don't bleed up to xl unintentionally.
        if (XL_SPAN[span]) {
          classes.push(XL_SPAN[span]);
        }
      }
    }
  }

  return classes.join(" ");
};

// Retained for backwards compatibility with any external callers.
export const getLastGridItemSpanClass = ({
  index,
  itemCount,
  mdColumns,
  xlColumns,
}: CardGridItemOptions) => {
  if (index !== itemCount - 1 || itemCount <= 0) return "";
  const out: string[] = [];
  if (mdColumns) {
    const span = getLastSpanForColumns(mdColumns, itemCount);
    if (span !== 1 && MD_SPAN[span]) out.push(MD_SPAN[span]);
  }
  if (xlColumns) {
    const span = getLastSpanForColumns(xlColumns, itemCount);
    if (XL_SPAN[span]) out.push(XL_SPAN[span]);
  }
  return out.join(" ");
};
