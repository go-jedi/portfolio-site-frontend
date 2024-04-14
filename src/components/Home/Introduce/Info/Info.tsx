import React from 'react';
import Link from 'next/link';

import styles from "@/components/Home/Introduce/Info/Info.module.scss"

const Info: React.FC = () => {
    return (
        <div className={styles.info}>
            <Link
                className={styles.link}
                href={'/about'}
            >
                Привет, это (Название).
            </Link>
            Наша студия программирования занимается разработкой приложений.
        </div>
    )
}

export default Info;