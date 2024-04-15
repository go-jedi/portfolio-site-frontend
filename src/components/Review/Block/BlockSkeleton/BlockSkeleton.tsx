import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Review/Block/BlockSkeleton/BlockSkeleton.module.scss"

const BlockSkeleton: React.FC = () => {
    return (
        <>
            {[...Array(5)].map((_, index) => {
                return (
                    <Skeleton
                        key={index}
                        className={styles.block}
                        baseColor="#fff"
                        highlightColor="#ccc"
                        enableAnimation
                        duration={2}
                        direction="ltr"
                        borderRadius={5}
                    />
                );
            })}
        </>
    );
}

export default BlockSkeleton;