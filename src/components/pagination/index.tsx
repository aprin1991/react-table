import { FC } from "react";

type TPagination = {
  totalPage: number;
  onPageChanged: (page: number) => void;
};

const Pagination: FC<TPagination> = ({ totalPage, onPageChanged }) => {
  return <div></div>;
};

export default Pagination;
