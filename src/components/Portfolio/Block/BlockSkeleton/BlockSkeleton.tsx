import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Portfolio/Block/BlockSkeleton/BlockSkeleton.module.scss";

const BlockSkeleton: React.FC = () => {
    return (
        <div className={styles.block}>
            <Skeleton
                className={styles.img}
                baseColor="#fff"
                highlightColor="#ccc"
                enableAnimation
                duration={2}
                direction="ltr"
                borderRadius={5}
            />
            <div className={styles.info}>
                <div>
                    <div className={styles.header}>
                        <Skeleton
                            className={styles.title}
                            baseColor="#fff"
                            highlightColor="#ccc"
                            enableAnimation
                            duration={2}
                            direction="ltr"
                            borderRadius={5}
                        />
                        <Skeleton
                            className={styles.date}
                            baseColor="#fff"
                            highlightColor="#ccc"
                            enableAnimation
                            duration={2}
                            direction="ltr"
                            borderRadius={5}
                        />
                    </div>
                    <Skeleton
                        className={styles.description}
                        baseColor="#fff"
                        highlightColor="#ccc"
                        enableAnimation
                        duration={2}
                        direction="ltr"
                        borderRadius={5}
                    />
                </div>
                <Skeleton
                    className={styles.technology}
                    baseColor="#fff"
                    highlightColor="#ccc"
                    enableAnimation
                    duration={2}
                    direction="ltr"
                    borderRadius={5}
                />
            </div>
        </div>
    )
}

export default BlockSkeleton;