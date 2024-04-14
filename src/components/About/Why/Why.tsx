import React from 'react';

import styles from "@/components/About/Why/Why.module.scss";

type ListType = {
    id: number;
    name: string;
}

const list: ListType[] = [
    {
        id: 1,
        name: "Качество: Мы стремимся к созданию продуктов, которые не только работают, но и удовлетворяют потребности наших клиентов.",
    },
    {
        id: 2,
        name: "Инновации: Мы постоянно ищем новые технологии и подходы, чтобы предлагать нашим клиентам самые передовые решения.",
    },
    {
        id: 3,
        name: "Клиентский фокус: Наша главная цель - удовлетворить потребности наших клиентов и помочь им достигать успеха.",
    },
    {
        id: 4,
        name: "Поддержка: Мы предоставляем полную поддержку на всех этапах разработки, чтобы убедиться, что ваш проект будет успешным.",
    }
]

const Why: React.FC = () => {
    return (
        <div className={styles.why}>
            <div className={styles.title}>Почему мы:</div>
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

export default Why;