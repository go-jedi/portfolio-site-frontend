import React from 'react';
import Link from 'next/link';

import styles from "@/components/Header/Logo/Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div>
            <Link className={styles.link} href={'/'}>
                <div className={styles.text}>Code Wave</div>
            </Link>
        </div>
    )
}

export default Logo;