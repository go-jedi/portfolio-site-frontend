import React from 'react';

import styles from "@/components/Home/Introduce/Introduce.module.scss"

import Picture from "@/components/Home/Introduce/Picture/Picture";
import Info from "@/components/Home/Introduce/Info/Info";
import Navigate from "@/components/Home/Introduce/Navigate/Navigate";

const Introduce: React.FC = () => {
    return (
        <div className={styles.introduce}>
            <div>
                <Picture/>
            </div>
            <div className={styles.information}>
                <Info/>
                <Navigate/>
            </div>
        </div>
    )
}

export default Introduce;