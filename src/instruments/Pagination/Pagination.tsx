import React from "react";

import {useSelector} from 'react-redux';
import {selectorReview} from "@/redux/review/selectors";

import ReactPaginate from 'react-paginate';

import styles from "@/instruments/Pagination/Pagination.module.scss"

import PaginationSkeleton from "@/instruments/Pagination/PaginationSkeleton/PaginationSkeleton";

type PaginationProps = {
    pageCount: number;
    limit: number;
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({pageCount, limit, onChangePage}) => {
    const {status} = useSelector(selectorReview)

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
                />
            )}
        </>
    )
}

export default Pagination;