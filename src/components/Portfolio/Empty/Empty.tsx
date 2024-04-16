import React from 'react';

import {GiEmptyWoodBucket} from "react-icons/gi";

import styles from "@/components/Portfolio/Empty/Empty.module.scss";

const Empty: React.FC = () => {
    return (
        <div className={styles.empty}>
            <GiEmptyWoodBucket className={styles.icon}/>
            <div className={styles.description}>Пусто</div>
        </div>
    );
}

export default Empty;