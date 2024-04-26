'use client';
import React from "react";

import {useAppDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
import {fetchGet} from "@/redux/review/asyncActions/get";
import {selectorReview} from "@/redux/review/selectors";
import {ReviewType} from "@/redux/review/types";

import styles from "@/components/Review/Review.module.scss";

import Form from "@/components/Review/Form/Form";
import Block from "@/components/Review/Block/Block";
import Empty from "@/components/Review/Empty/Empty";
import Pagination from "@/instruments/Pagination/Pagination"

const Review: React.FC = () => {
    const dispatch = useAppDispatch()
    const {status, reviews, params} = useSelector(selectorReview)

    const [currentPage, setCurrentPage] = React.useState(1)

    const onChangePage = (page: number):void => {
        try {
            setCurrentPage(page)
        } catch (error) {
            console.log("error in onChangePage:", error)
        }
    }

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    React.useEffect(() => {
        const formData = {
            page: currentPage,
            limit: 5,
        }
        dispatch(fetchGet(formData))
    }, [currentPage])

    if (reviews.length === 0 && status === "completed") {
        return (
            <div className={styles.review}>
                <div className={styles.title}>Отзывы</div>
                <Form/>
                <Empty/>
            </div>
        );
    }

    return (
        <div className={styles.review}>
            <div className={styles.title}>Отзывы</div>
            <Form/>
            {reviews.map((e: ReviewType) => {
                return <Block key={e.id} {...e} />;
            })}
            <div className={styles.pagination}>
                <Pagination
                    currentPage={currentPage}
                    pageCount={params.page_count}
                    limit={params.limit}
                    status={status}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
}

export default Review;