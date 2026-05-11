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
