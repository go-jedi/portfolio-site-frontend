import React from 'react';

import styles from '@/app/not-found.module.scss'

const NotFound: React.FC = () => {
    return (
        <div className={styles.notfound}>
            <h1 className={styles.code}>404</h1>
            <span className={styles.line}></span>
            <h2 className={styles.text}>Эту страницу не удалось найти.</h2>
            <div className={styles.loader}></div>
        </div>
    );
};

export default NotFound;