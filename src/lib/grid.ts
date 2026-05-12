type SupportedGridColumns = 2 | 3 | 4;

type LastGridItemSpanOptions = {
  index: number;
  itemCount: number;
  mdColumns?: SupportedGridColumns;
  xlColumns?: SupportedGridColumns;
};

const mdSpanClassByColumns: Record<SupportedGridColumns, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const xlRemainderSpanClassByColumns: Record<SupportedGridColumns, Record<number, string>> = {
  2: {
    1: "xl:col-span-2",
  },
  3: {
    1: "xl:col-span-3",
    2: "xl:col-span-2",
  },
  4: {
    1: "xl:col-span-4",
    2: "xl:col-span-2",
    3: "xl:col-span-2",
  },
};

export const getLastGridItemSpanClass = ({
  index,
  itemCount,
  mdColumns,
  xlColumns,
}: LastGridItemSpanOptions) => {
  const isLast = index === itemCount - 1;

  if (!isLast || itemCount <= 0) {
    return "";
  }

  const classes: string[] = [];
  const mdRemainder = mdColumns ? itemCount % mdColumns : 0;
  const xlRemainder = xlColumns ? itemCount % xlColumns : 0;

  if (mdColumns && mdRemainder === 1) {
    classes.push(mdSpanClassByColumns[mdColumns]);
  }

  if (xlColumns) {
    const spanClass = xlRemainderSpanClassByColumns[xlColumns][xlRemainder];

    if (spanClass) {
      classes.push(spanClass);
    } else if (mdColumns && mdRemainder === 1) {
      classes.push("xl:col-span-1");
    }
  }

  return classes.join(" ");
};

// Tailwind safelist (literal classes used below):
// md:border-r-border/20 md:border-b-border/20
// xl:border-r-border/20 xl:border-b-border/20
// xl:border-r-transparent xl:border-b-transparent
//
// Note: cards already render `border border-transparent` (1px on all sides),
// so we only toggle border *color* here. This keeps `hover:border-primary`
// painting a complete square on every card, including those in the last
// xl column or row.
export const getCardGridBorderClass = ({
  index,
  itemCount,
  mdColumns,
  xlColumns,
}: LastGridItemSpanOptions) => {
  const classes: string[] = [];

  if (mdColumns) {
    const mdRows = Math.ceil(itemCount / mdColumns);
    const mdRow = Math.floor(index / mdColumns);
    const mdCol = index % mdColumns;
    if (mdRow < mdRows - 1) classes.push("md:border-b-border/20");
    if (mdCol < mdColumns - 1) classes.push("md:border-r-border/20");
  }

  if (xlColumns) {
    const xlRows = Math.ceil(itemCount / xlColumns);
    const xlRow = Math.floor(index / xlColumns);
    const xlCol = index % xlColumns;
    if (xlRow < xlRows - 1) classes.push("xl:border-b-border/20");
    else classes.push("xl:border-b-transparent");
    if (xlCol < xlColumns - 1) classes.push("xl:border-r-border/20");
    else classes.push("xl:border-r-transparent");
  }

  return classes.join(" ");
};
