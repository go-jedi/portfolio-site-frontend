import React from "react";

import styles from "@/components/Portfolio/Portfolio.module.scss";

import Empty from "@/components/Portfolio/Empty/Empty";
import Block from "@/components/Portfolio/Block/Block";

type ProjectType = {
    id: number;
    title: string;
    description: string;
    img: string;
    created: string;
    technology: string;
}

const projects: ProjectType[] = [
    {
        id: 1,
        title: 'Одностраничник (Langing Page)',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: 'https://tanix.by/upload/%D0%91%D0%9B%D0%9E%D0%93.%20%D0%A1%D0%A2%D0%90%D0%A2%D0%AC%D0%98/landing-page_mesa_de_trabajo_1_0.png',
        created: '05.10.23',
        technology: "Golang + Fiber + PostgreSQL + Docker + migrations Goose + air"
    },
    {
        id: 2,
        title: 'Сайт (Miro)',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: 'https://aspro.ru/upload/iblock/54e/1.jpg',
        created: '05.10.23',
        technology: "Python",
    },
    {
        id: 3,
        title: 'Телеграм бот (Tele bot)',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: 'https://adminvps.ru/blog/wp-content/uploads/2020/07/pvylr1rn9ri2-3.jpeg',
        created: '05.10.23',
        technology: "JavaScript",
    },
]

const Portfolio: React.FC = () => {
    if (projects.length === 0) {
        return (
            <>
                <Empty/>
            </>
        )
    }

    return (
        <div className={styles.portfolio}>
            <div className={styles.title}>Портфолио</div>
            <div className={styles.project}>
                {projects.map((e: ProjectType) => {
                    return <Block key={e.id} {...e}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio;