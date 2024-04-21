'use client';
import React from "react";

import {useAppDispatch} from '@/redux/store';

import styles from "@/components/Review/Review.module.scss";

import Form from "@/components/Review/Form/Form";
import Block from "@/components/Review/Block/Block";
import Empty from "@/components/Review/Empty/Empty";
import Pagination from "@/instruments/Pagination/Pagination"

type ReviewsType = {
    id: number;
    username: string;
    text: string;
    created: string;
    rate: number;
};

const reviews: ReviewsType[] = [
    {
        id: 1,
        username: 'Vasya',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 5,
    },
    {
        id: 2,
        username: 'Sanya',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 3,
    },
    {
        id: 3,
        username: 'Marina',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 1,
    },
    {
        id: 4,
        username: 'Vitaliy',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 2,
    },
    {
        id: 5,
        username: 'Vladislav',
        text: 'Крутой сервис. Благодарю',
        created: '15.11.2023 17:40',
        rate: 5,
    },
];

const Review: React.FC = () => {
    const dispatch = useAppDispatch()

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
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    if (reviews.length === 0) {
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
            <div>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
}

export default Review;