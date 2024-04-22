import React from 'react';

import {FaGolang} from "react-icons/fa6";
import {FaPython} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";


import styles from "@/components/About/Technology/Technology.module.scss"

type ListType = {
    id: number;
    name: string;
}

const list: ListType[] = [
    {
        id: 1,
        name: "Язык программирования: Golang, Python, JavaScript",
    },
    {
        id: 2,
        name: "Frontend Фреймворк: ReactJS, NextJS, Quasar, VueJS, Django",
    },
    {
        id: 3,
        name: "Backend Фреймворк: Django, Fast API, Gin, Echo, Fiber, NestJS",
    },
    {
        id: 4,
        name: "База данных: PostgreSQL, MongoDB, MySQL, SQLite",
    },
    {
        id: 5,
        name: "Контейнеризация: Docker, k8s",
    },
    {
        id: 6,
        name: "Кэширование: Redis",
    },
    {
        id: 7,
        name: "Архитектура: REST API, gRPC"
    },
    {
        id: 8,
        name: "Методология: Agile, Scrum"
    }
]

const Technology: React.FC = () => {
    return (
        <div className={styles.technology}>
            <div className={styles.title}>
                <FaGolang className={styles.icon}/>
                <FaPython className={styles.icon}/>
                <IoLogoJavascript className={styles.icon}/>
                Технологический стек:
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
            <div className={styles.info}>
                Мы стремимся использовать только самые современные и
                надежные технологии для разработки наших проектов.
            </div>
        </div>
    )
}

export default Technology;