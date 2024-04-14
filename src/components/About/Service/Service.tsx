import React from "react";

import {MdOutlineHomeRepairService} from "react-icons/md";
import {CiMonitor} from "react-icons/ci";

import styles from "@/components/About/Service/Service.module.scss";

type ListType = {
    id: number;
    name: string;
}

const list: ListType[] = [
    {
        id: 1,
        name: "Веб-сайты (одностраничные, многостраничные)"
    },
    {
        id: 2,
        name: "Интернет магазинов"
    },
    {
        id: 3,
        name: "Desktop приложения"
    },
    {
        id: 4,
        name: "Telegram bots"
    },
    {
        id: 5,
        name: "Создание Backend и Frontend части"
    },
    {
        id: 6,
        name: "Скриптов"
    },
]

const Service: React.FC = () => {
    return (
        <div className={styles.service}>
            <div className={styles.title}>
                <MdOutlineHomeRepairService className={styles.icon}/>
                <CiMonitor className={styles.icon}/>
                Наши услуги:
            </div>
            <div className={styles.list}>
                {list.map((e: ListType) => {
                    return (
                        <li className={styles.text} key={e.id}>
                            {e.name}
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Service;