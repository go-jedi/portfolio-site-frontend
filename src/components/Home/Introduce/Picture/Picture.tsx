import React from 'react';
import Image from 'next/image'

import LogoImg from "@/assets/img/logo.jpg";

import styles from "@/components/Home/Introduce/Picture/Picture.module.scss"

const Picture: React.FC = () => {
    return (
        <div>
            <Image className={styles.img} src={LogoImg} priority={true} alt="logo"/>
        </div>
    )
}

export default Picture;