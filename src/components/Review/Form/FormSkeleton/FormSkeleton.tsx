import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from "@/components/Review/Form/FormSkeleton/FormSkeleton.module.scss"

const FormSkeleton: React.FC = () => {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.row}>
                    <Skeleton
                        className={styles.input}
                        baseColor="#fff"
                        highlightColor="#ccc"
                        enableAnimation
                        duration={2}
                        direction="ltr"
                        borderRadius={5}
                    />
                </div>
                <div className={styles.row}>
                    <Skeleton
                        className={styles.rate}
                        baseColor="#fff"
                        highlightColor="#ccc"
                        enableAnimation
                        duration={2}
                        direction="ltr"
                        borderRadius={5}
                    />
                </div>
            </div>
            <Skeleton
                className={styles.textarea}
                baseColor="#fff"
                highlightColor="#ccc"
                enableAnimation
                duration={2}
                direction="ltr"
                borderRadius={5}
            />
        </>
    )
}

export default FormSkeleton;