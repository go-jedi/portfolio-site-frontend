import React from "react";

import ReactPaginate from 'react-paginate';

import styles from "@/instruments/Pagination/Pagination.module.scss"

import PaginationSkeleton from "@/instruments/Pagination/PaginationSkeleton/PaginationSkeleton";

type PaginationProps = {
    currentPage: number;
    pageCount: number;
    limit: number;
    status: string;
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({currentPage, pageCount, limit, status, onChangePage}) => {
    return (
        <>
            {status === "loading" ? (
                <PaginationSkeleton/>
            ) : (
                <ReactPaginate
                    className={styles.pagination}
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={(event) => onChangePage(event.selected + 1)}
                    pageRangeDisplayed={2}
                    pageCount={Math.ceil(pageCount / limit)}
                    forcePage={currentPage - 1}
                />
            )}
        </>
    )
}

export default Pagination;