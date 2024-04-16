import React from 'react';
import Link from 'next/link';

import styles from "@/components/Footer/Trademark/Trademark.module.scss"

const Trademark: React.FC = () => {
    return (
        <div>
            <Link className={styles.link} href={'/about'}>
                © Code Wave
            </Link>
        </div>
    )
}

export default Trademark;