import React from "react"

import styles from "@/components/Home/Deal/Deal.module.scss"

const Deal: React.FC = () => {
    return (
        <div className={styles.deal}>
            <div className={styles.title}>Организация сделки:</div>
            <div className={styles.text}>Через безопасные сделки в интернете (гарант).</div>
        </div>
    )
}

export default Deal;