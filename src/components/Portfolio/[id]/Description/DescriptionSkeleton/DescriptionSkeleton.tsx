import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Portfolio/[id]/Description/DescriptionSkeleton/DescriptionSkeleton.module.scss";

const DescriptionSkeleton: React.FC = () => {
    return (
        <div className={styles.description}>
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
                className={styles.text}
                baseColor="#fff"
                highlightColor="#ccc"
                enableAnimation
                duration={2}
                direction="ltr"
                borderRadius={5}
            />
        </div>
    )
}

export default DescriptionSkeleton;