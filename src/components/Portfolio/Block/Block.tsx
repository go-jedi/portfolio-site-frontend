'use client';
import React from "react";
import Link from 'next/link';

import {useInView} from 'react-intersection-observer';

import styles from "@/components/Portfolio/Block/Block.module.scss";

import BlockSkeleton from "@/components/Portfolio/Block/BlockSkeleton/BlockSkeleton";

type PropsType = {
    id: number;
    title: string;
    description: string;
    img: string;
    created: string;
    technology: string;
}

const Block: React.FC<PropsType> = (props: PropsType) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            {inView ? (
                <Link className={styles.block} href={`/portfolio/${props.id}`}>
                    <div>
                        <img className={styles.img} src={props.img} alt="image"/>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <div className={styles.header}>
                                <div className={styles.title}>{props.title}</div>
                                <div className={styles.date}>{props.created}</div>
                            </div>
                            <div className={styles.description}>{props.description}</div>
                        </div>
                        <div className={styles.technology}>
                            <div className={styles.title}>Используемые технологии:</div>
                            <div className={styles.text}>{props.technology}</div>
                        </div>
                    </div>
                </Link>
            ) : (
                <BlockSkeleton/>
            )}
        </div>
    )
}

export default Block;