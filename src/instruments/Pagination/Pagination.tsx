import React from "react";

import ReactPaginate from 'react-paginate';

import styles from "@/instruments/Pagination/Pagination.module.scss"

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage}) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={4}
            forcePage={currentPage - 1}
        />
    )
}

export default Pagination;