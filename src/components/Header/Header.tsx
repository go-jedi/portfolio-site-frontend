import React from "react";

import styles from '@/components/Header/Header.module.scss';

import Logo from '@/components/Header/Logo/Logo';
import Navigate from "@/components/Header/Navigate/Navigate";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <Logo/>
            </div>
            <div className={styles.header__right}>
                <Navigate/>
            </div>
        </div>
    )
}

export default Header;