'use client';
import React from "react";

import styles from "@/components/Review/Review.module.scss";

import Form from "@/components/Review/Form/Form";
import Block from "@/components/Review/Block/Block";
import Empty from "@/components/Review/Empty/Empty";

type ReviewsType = {
    id: number;
    email: string;
    text: string;
    created: string;
    rate: number;
    role: string;
};

const reviews: ReviewsType[] = [
    {
        id: 1,
        email: 'jv**do**c.**',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 5,
        role: 'user',
    },
    {
        id: 2,
        email: '',
        text: 'Доброе утро, поддержка работает с 10:00 до 22:00',
        created: '15.11.2023 17:40',
        rate: 0,
        role: 'admin',
    },
    {
        id: 3,
        email: 'jv**do**c.**',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 3,
        role: 'user',
    },
    {
        id: 4,
        email: 'jv**do**c.**',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 1,
        role: 'user',
    },
    {
        id: 5,
        email: 'jv**do**c.**',
        text: 'Отлично все работает, без обмана. Сомневался, т.к. все выглядело как-то недорого и просто. Но решил, что сумма небольшая, чтобы рискнуть) Уже купил 2 акка - ремейк резидента 4, и атомик харт. Все отлично работает, поддержка на сайте оперативная. Все длс в комплекте, круто. Играю со стимдека - с пиратками возиться лень, а лицухи за фулпрайс позволить не могу. И ждать распродаж по приемлемой для себя цене 2 года тоже не хочется))',
        created: '15.11.2023 17:40',
        rate: 2,
        role: 'user',
    },
    {
        id: 6,
        email: 'jv**do**c.**',
        text: 'Крутой сервис. Благодарю',
        created: '15.11.2023 17:40',
        rate: 4,
        role: 'user',
    },
];

const Review: React.FC = () => {
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
        </div>
    );
}

export default Review;