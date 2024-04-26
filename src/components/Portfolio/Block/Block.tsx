'use client';
import React from "react";
import Link from 'next/link';

import {ProjectType} from "@/redux/project/types";

import {useInView} from 'react-intersection-observer';

import styles from "@/components/Portfolio/Block/Block.module.scss";

import BlockSkeleton from "@/components/Portfolio/Block/BlockSkeleton/BlockSkeleton";

const Block: React.FC<ProjectType> = (props: ProjectType) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            {inView ? (
                <Link className={styles.block} href={`/portfolio/${props.id}`}>
                    <div>
                        <img className={styles.img}
                             src={`${process.env.NEXT_PUBLIC_API_URL}file-server/${props.paths[0].filename}`}
                             alt="image"
                        />
                    </div>
                    <div className={styles.info}>
                        <div>
                            <div className={styles.header}>
                                <div className={styles.title}>{props.title}</div>
                                <div className={styles.date}>{props.created_at}</div>
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