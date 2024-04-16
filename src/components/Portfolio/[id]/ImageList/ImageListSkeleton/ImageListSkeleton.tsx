import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Portfolio/[id]/ImageList/ImageListSkeleton/ImageListSkeleton.module.scss";

const ImageListSkeleton: React.FC = () => {
    return (
        <div className={styles.list}>
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
                className={styles.images}
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

export default ImageListSkeleton;