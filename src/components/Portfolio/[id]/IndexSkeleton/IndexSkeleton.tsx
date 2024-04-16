import React from "react";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Portfolio/[id]/IndexSkeleton/IndexSkeleton.module.scss";

const IndexSkeleton: React.FC = () => {
    return (
        <Skeleton
            className={styles.title}
            baseColor="#fff"
            highlightColor="#ccc"
            enableAnimation
            duration={2}
            direction="ltr"
            borderRadius={5}
        />
    )
}

export default IndexSkeleton;