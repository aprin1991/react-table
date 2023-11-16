import { FC } from "react";
import { TableColumnType, TableRowType } from "../../types";
import "./../../assets/css/main.scss";
import TableItem from "./TableItem";

type TableProps = {
  columns: TableColumnType[];
  rows: TableRowType[];
};

const Table: FC<TableProps> = ({ columns, rows }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column.id}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableItem key={row.id} row={row.data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
