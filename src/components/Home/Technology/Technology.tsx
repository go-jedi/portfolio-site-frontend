import React from "react";
import Link from 'next/link';

import {Card} from 'antd';
import {IconType} from "react-icons";
import {FaGolang} from "react-icons/fa6";
import {FaDocker, FaPython, FaReact} from "react-icons/fa";
import {IoLogoJavascript, IoLogoVue} from "react-icons/io5";
import {TbBrandNextjs} from "react-icons/tb";
import {DiRedis} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {SiMysql, SiSqlite} from "react-icons/si";

import styles from "@/components/Home/Technology/Technology.module.scss";

type CardType = {
    id: number;
    name: string;
    icon: IconType;
}

const cards: CardType[] = [
    {
        id: 1,
        name: "Golang",
        icon: FaGolang,
    },
    {
        id: 2,
        name: "Python",
        icon: FaPython,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        id: 4,
        name: "ReactJS",
        icon: FaReact,
    },
    {
        id: 5,
        name: "NextJS",
        icon: TbBrandNextjs,
    },
    {
        id: 6,
        name: "VueJS",
        icon: IoLogoVue,
    },
    {
        id: 7,
        name: "Docker",
        icon: FaDocker,
    },
    {
        id: 8,
        name: "PostgreSQL",
        icon: BiLogoPostgresql,
    },
    {
        id: 9,
        name: "MySQL",
        icon: SiMysql,
    },
    {
        id: 10,
        name: "Sqlite",
        icon: SiSqlite,
    },
    {
        id: 11,
        name: "Redis",
        icon: DiRedis,
    },
]

const Technology: React.FC = () => {
    return (
        <div className={styles.technology}>
            <div className={styles.title}>Технологии:</div>
            <div className={styles.list}>
                {cards.map((e: CardType) => {
                    return (
                        <Card
                            className={styles.card}
                            key={e.id}
                            bordered={false}
                        >
                            <div className={styles.info}>
                                <div className={styles.text}>{e.name}</div>
                                <e.icon className={styles.icon}/>
                            </div>
                        </Card>
                    )
                })}
            </div>
            <div className={styles.details}>
                <Link
                    className={styles.link}
                    href={'/about'}
                >
                    Подробнее
                </Link>
            </div>
        </div>
    )
}

export default Technology;