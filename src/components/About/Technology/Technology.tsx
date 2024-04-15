import React from 'react';

import {FaGolang} from "react-icons/fa6";
import {FaDocker, FaPython, FaReact} from "react-icons/fa";
import {IoLogoJavascript, IoLogoVue} from "react-icons/io5";
import {TbBrandNextjs} from "react-icons/tb";

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
        name: "Архитектура: REST API, gRPC"
    },
    {
        id: 7,
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
                <FaDocker className={styles.icon}/>
                <FaReact className={styles.icon}/>
                <IoLogoVue className={styles.icon}/>
                <TbBrandNextjs className={styles.icon}/>
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