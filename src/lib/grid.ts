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

const xlSpanClassByColumns: Record<SupportedGridColumns, string> = {
  2: "xl:col-span-2",
  3: "xl:col-span-3",
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

  if (mdColumns && itemCount % mdColumns === 1) {
    classes.push(mdSpanClassByColumns[mdColumns]);
  }

  if (xlColumns) {
    const remainder = itemCount % xlColumns;
    const spanClass = xlRemainderSpanClassByColumns[xlColumns][remainder];

    if (spanClass) {
      classes.push(spanClass);
    }
  }

  return classes.join(" ");
};
