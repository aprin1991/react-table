import { ReactNode } from "react";

type TableColumnType = {
  id: number | string;
  title: string;
};

type TableRowItem = {
  id: number | string;
  value: string | ReactNode;
}[];

type TableRowType = {
  id: string | number;
  data: TableRowItem;
};

export type { TableColumnType, TableRowItem, TableRowType };
