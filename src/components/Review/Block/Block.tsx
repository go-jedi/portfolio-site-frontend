'use client';
import React from 'react';

import { ReviewType } from "@/redux/review/types";

import { useInView } from 'react-intersection-observer';
import { FaRegUser } from 'react-icons/fa6';

import { FaStar } from 'react-icons/fa';

import styles from "@/components/Review/Block/Block.module.scss";

import BlockSkeleton from "@/components/Review/Block/BlockSkeleton/BlockSkeleton";

const Block: React.FC<ReviewType> = (props: ReviewType) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            {inView ? (
                <div className={styles.block}>
                    <div className={styles.person}>
                        <div className={styles.logo}>
                            <FaRegUser className={styles.icon} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {props.username.length > 0 ? props.username : 'Пользователь с Telegram'}
                            </div>
                            <div className={styles.text}>{props.message}</div>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.rate}>
                            {[...Array(5)].map((_, index: number) => {
                                return (
                                    <FaStar
                                        key={index}
                                        className={styles.star}
                                        color={index < props.rating ? '#ffc107' : '#e4e5e9'}
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.date}>{props.created_at}</div>
                    </div>
                </div>
            ) : (
                <BlockSkeleton />
            )}
        </div>
    );
}

export default Block;