import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Portfolio/[id]/Technology/TechnologySkeleton/TechnologySkeleton.module.scss";

const TechnologySkeleton: React.FC = () => {
    return (
        <div className={styles.technology}>
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

export default TechnologySkeleton;