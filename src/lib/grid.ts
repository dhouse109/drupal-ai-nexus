type SupportedGridColumns = 2 | 3;

type LastGridItemSpanOptions = {
  index: number;
  itemCount: number;
  mdColumns?: SupportedGridColumns;
  xlColumns?: SupportedGridColumns;
};

type CardGridItemOptions = LastGridItemSpanOptions;

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

export const cardGridClass = "grid md:grid-cols-2 xl:grid-cols-3";

const getColumnStart = ({
  index,
  itemCount,
  columns,
  spanRemainder,
}: {
  index: number;
  itemCount: number;
  columns: SupportedGridColumns;
  spanRemainder: number;
}) => {
  const isLast = index === itemCount - 1;

  if (isLast && spanRemainder === 1) {
    return 0;
  }

  if (isLast && columns === 3 && spanRemainder === 2) {
    return 1;
  }

  return index % columns;
};

const getDividerClassesForBreakpoint = ({
  index,
  itemCount,
  columns,
  prefix,
}: {
  index: number;
  itemCount: number;
  columns: SupportedGridColumns;
  prefix: "md" | "xl";
}) => {
  const classes: string[] = [];
  const isFirstRow = index < columns;
  const remainder = itemCount % columns;
  const columnStart = getColumnStart({ index, itemCount, columns, spanRemainder: remainder });
  const hasTopDivider = !isFirstRow;
  const hasLeftDivider = columnStart > 0;

  if (index > 0 && isFirstRow) {
    classes.push(`${prefix}:border-t-0`);
  }

  if (hasTopDivider) {
    classes.push(`${prefix}:border-t`);
  }

  if (prefix === "xl") {
    classes.push("xl:border-l-0");
  }

  if (hasLeftDivider) {
    classes.push(`${prefix}:border-l`);
  }

  return classes;
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

export const getCardGridItemClass = ({
  index,
  itemCount,
  mdColumns,
  xlColumns,
}: CardGridItemOptions) => {
  const classes = ["border-border"];

  if (index > 0) {
    classes.push("border-t");
  }

  if (mdColumns) {
    classes.push(
      ...getDividerClassesForBreakpoint({
        index,
        itemCount,
        columns: mdColumns,
        prefix: "md",
      }),
    );
  }

  if (xlColumns) {
    classes.push(
      ...getDividerClassesForBreakpoint({
        index,
        itemCount,
        columns: xlColumns,
        prefix: "xl",
      }),
    );
  }

  const spanClass = getLastGridItemSpanClass({ index, itemCount, mdColumns, xlColumns });

  if (spanClass) {
    classes.push(spanClass);
  }

  return classes.join(" ");
};
