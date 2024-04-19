'use client';
import React from 'react';

import {useInView} from 'react-intersection-observer';

import {FaRegUser} from 'react-icons/fa6';
import {FaStar} from 'react-icons/fa';

import styles from "@/components/Review/Block/Block.module.scss";

import BlockSkeleton from "@/components/Review/Block/BlockSkeleton/BlockSkeleton";

type PropsType = {
    id: number;
    username: string;
    text: string;
    created: string;
    rate: number;
};

const Block: React.FC<PropsType> = (props: PropsType) => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            {inView ? (
                <div className={styles.block}>
                    <div className={styles.person}>
                        <div className={styles.logo}>
                            <FaRegUser className={styles.icon}/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                {props.username}
                            </div>
                            <div className={styles.text}>{props.text}</div>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.rate}>
                            {[...Array(5)].map((_, index: number) => {
                                return (
                                    <FaStar
                                        key={index}
                                        className={styles.star}
                                        color={index < props.rate ? '#ffc107' : '#e4e5e9'}
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.date}>{props.created}</div>
                    </div>
                </div>
            ) : (
                <BlockSkeleton/>
            )}
        </div>
    );
}

export default Block;