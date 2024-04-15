'use client'

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

import styles from "@/components/Header/Navigate/Navigate.module.scss"

type LinksType = {
    id: number;
    name: string;
    link: string;
}

const links: LinksType[] = [
    {
        id: 1,
        name: 'Главная',
        link: "/"
    },
    {
        id: 2,
        name: 'Портфолио',
        link: "/portfolio"
    },
    {
        id: 3,
        name: 'Отзывы',
        link: "/review"
    },
    {
        id: 4,
        name: 'О нас',
        link: "/about"
    }
]

const Navigate: React.FC = () => {
    const pathname: string = usePathname()

    return (
        <div className={styles.navigate}>
            {links.map((e: LinksType) => {
                return (
                    <Link
                        className={styles.link}
                        style={{color: pathname === e.link ? '#4385d7' : ''}}
                        key={e.id}
                        href={`${e.link}`}
                    >
                        <div>{e.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Navigate;