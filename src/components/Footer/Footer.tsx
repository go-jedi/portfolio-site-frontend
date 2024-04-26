"use client";
import React from 'react';
import {usePathname} from 'next/navigation'

import styles from "@/components/Footer/Footer.module.scss"

import Trademark from "@/components/Footer/Trademark/Trademark";
import Navigate from "@/components/Footer/Navigate/Navigate";

const paths: string[] = ["/portfolio", "/review"]

const Footer: React.FC = () => {
    const pathname: string = usePathname()

    if (paths.includes(pathname)) {
        return <></>
    }

    return (
        <div className={styles.footer}>
            <Trademark/>
            <Navigate/>
        </div>
    )
}

export default Footer;