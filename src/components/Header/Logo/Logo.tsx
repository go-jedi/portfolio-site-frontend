import React from 'react';
import Link from 'next/link';

import styles from "@/components/Header/Logo/Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div>
            <Link className={styles.logo__link} href={'/'}>
                <div>Conor Dewey</div>
            </Link>
        </div>
    )
}

export default Logo;