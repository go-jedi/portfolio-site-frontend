'use client';
import React from "react";

import {useAppDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
import {fetchGet} from "@/redux/review/asyncActions/get";
import {selectorReview} from "@/redux/review/selectors";

import styles from "@/components/Review/Review.module.scss";

import Form from "@/components/Review/Form/Form";
import Block from "@/components/Review/Block/Block";
import Empty from "@/components/Review/Empty/Empty";
import Pagination from "@/instruments/Pagination/Pagination"

type ReviewsType = {
    id: number;
    username: string;
    message: string;
    rating: number;
    created_at: string;
    updated_at: string;
};

const Review: React.FC = () => {
    const dispatch = useAppDispatch()
    const {reviews, status} = useSelector(selectorReview)

    const [currentPage, setCurrentPage] = React.useState(1)

    const onChangePage = (page: number) => {
        try {
            console.log("page:", page)
            setCurrentPage((prevState: number) => prevState + 1)
        } catch (error) {
            console.log("error in onChangePage:", error)
        }
    }

    React.useEffect(() => {
        const formData = {
            page: 1,
            limit: 5,
        }
        dispatch(fetchGet(formData))

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

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
            {reviews.map((e: ReviewsType) => {
                return <Block key={e.id} {...e} />;
            })}
            <div className={styles.pagination}>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
}

export default Review;