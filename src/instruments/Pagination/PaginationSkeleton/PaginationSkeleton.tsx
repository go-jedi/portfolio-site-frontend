import React from "react";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/instruments/Pagination/PaginationSkeleton/PaginationSkeleton.module.scss";

const PaginationSkeleton: React.FC = () => {
    return (
        <Skeleton
            className={styles.pagination}
            baseColor="#fff"
            highlightColor="#ccc"
            enableAnimation
            duration={2}
            direction="ltr"
            borderRadius={5}
        />
    )
}

export default PaginationSkeleton;