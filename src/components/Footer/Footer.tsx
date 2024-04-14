import React from 'react';

import styles from "@/components/Footer/Footer.module.scss"

import Trademark from "@/components/Footer/Trademark/Trademark";
import Navigate from "@/components/Footer/Navigate/Navigate";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <Trademark/>
            <Navigate/>
        </div>
    )
}

export default Footer;