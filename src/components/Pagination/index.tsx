import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      activeClassName={styles.selected}
      disabledLinkClassName={styles.disabled}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={5}
      forcePage={currentPage - 1}
      pageCount={pageCount}
    />
  );
};

export default Pagination;
