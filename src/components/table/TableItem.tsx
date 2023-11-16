import { FC } from "react";
import { TableRowItem } from "../../types";
type TProps = {
  row: TableRowItem;
};
const TableItem: FC<TProps> = ({ row }) => {
  return (
    <tr>
      {row.map((cell) => {
        return <td key={cell.id}>{cell.value}</td>;
      })}
    </tr>
  );
};

export default TableItem;
