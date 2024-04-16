import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import LogoImg from "@/assets/img/logo.jpg";

import styles from "@/components/Header/Logo/Logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div>
            <Link className={styles.link} href={'/'}>
                <Image className={styles.logo} src={LogoImg} priority={true} alt="logo"/>
                <div className={styles.text}>Code Wave</div>
            </Link>
        </div>
    )
}

export default Logo;