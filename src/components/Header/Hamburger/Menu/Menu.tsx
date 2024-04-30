'use client'
import React from "react";
import Link from 'next/link';
import {usePathname} from 'next/navigation'

import styles from "@/components/Header/Hamburger/Menu/Menu.module.scss";

type MenuProps = {
    handleCloseHamburger: () => void;
}

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

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
    const pathname: string = usePathname()

    return (
        <ul
            className={styles.menu}
        >
            {links.map((e: LinksType) => {
                return (
                    <li className={styles.item} key={e.id}>
                        <Link
                            className={styles.link}
                            onClick={props.handleCloseHamburger}
                            style={{color: pathname === e.link ? '#4385d7' : ''}}
                            key={e.id}
                            href={`${e.link}`}
                        >
                            {e.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu;