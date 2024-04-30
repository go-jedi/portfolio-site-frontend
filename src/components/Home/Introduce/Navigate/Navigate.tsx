import React from 'react';

import { IconType } from "react-icons";
import { FaTelegram } from "react-icons/fa";

import styles from "@/components/Home/Introduce/Navigate/Navigate.module.scss"

type LinksType = {
    id: number;
    name: string;
    address: string;
    icon: IconType;
}

const links: LinksType[] = [
    {
        id: 1,
        name: "Telegram",
        address: `${process.env.NEXT_PUBLIC_TG_LINK}`,
        icon: FaTelegram,
    },
]

const Navigate: React.FC = () => {
    return (
        <div className={styles.navigate}>
            {links.map((e: LinksType) => {
                return (
                    <a className={styles.link} key={e.id} target="_blank" href={e.address}>
                        <e.icon className={styles.icon} />
                        <div className={styles.text}>{e.name}</div>
                    </a>
                )
            })}
        </div>
    )
}

export default Navigate;