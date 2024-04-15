import React from 'react';

import {CgTrashEmpty} from "react-icons/cg";

import styles from "@/components/Review/Empty/Empty.module.scss"

const Empty: React.FC = () => {
    return (
        <div className={styles.empty}>
            <CgTrashEmpty className={styles.icon}/>
            <div className={styles.description}>Пусто</div>
        </div>
    )
}

export default Empty;