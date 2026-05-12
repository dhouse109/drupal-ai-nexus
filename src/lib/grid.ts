type SupportedGridColumns = 2 | 3;

type LastGridItemSpanOptions = {
  index: number;
  itemCount: number;
  mdColumns?: SupportedGridColumns;
  xlColumns?: SupportedGridColumns;
};

const mdSpanClassByColumns: Record<SupportedGridColumns, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
};

const xlRemainderSpanClassByColumns: Record<SupportedGridColumns, Record<number, string>> = {
  2: {
    1: "xl:col-span-2",
  },
  3: {
    1: "xl:col-span-3",
    2: "xl:col-span-2",
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
// md:border-r md:border-r-border/20 md:border-b md:border-b-border/20
// xl:border-r xl:border-r-border/20 xl:border-b xl:border-b-border/20
// xl:border-r-0 xl:border-b-0
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
    if (mdRow < mdRows - 1) classes.push("md:border-b md:border-b-border/20");
    if (mdCol < mdColumns - 1) classes.push("md:border-r md:border-r-border/20");
  }

  if (xlColumns) {
    const xlRows = Math.ceil(itemCount / xlColumns);
    const xlRow = Math.floor(index / xlColumns);
    const xlCol = index % xlColumns;
    if (xlRow < xlRows - 1) classes.push("xl:border-b xl:border-b-border/20");
    else classes.push("xl:border-b-0");
    if (xlCol < xlColumns - 1) classes.push("xl:border-r xl:border-r-border/20");
    else classes.push("xl:border-r-0");
  }

  return classes.join(" ");
};
