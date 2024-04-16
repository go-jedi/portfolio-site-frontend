import React from "react";

import styles from "@/components/Portfolio/Portfolio.module.scss"

import Empty from "@/components/Portfolio/Empty/Empty"

type ProjectType = {
    id: number;
    title: string;
    description: string;
    img: string[];
    created: string;
}

const projects: ProjectType[] = [
    {
        id: 1,
        title: 'Assassin`s Creed Mirage',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: ['https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg'],
        created: '05.10.23',
    },
    {
        id: 2,
        title: 'Assassin`s Creed Mirage',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: ['https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg'],
        created: '05.10.23',
    },
    {
        id: 3,
        title: 'Assassin`s Creed Mirage',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: ['https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg'],
        created: '05.10.23',
    },
    {
        id: 4,
        title: 'Assassin`s Creed Mirage',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: ['https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg'],
        created: '05.10.23',
    },
    {
        id: 5,
        title: 'Assassin`s Creed Mirage',
        description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
        img: ['https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg'],
        created: '05.10.23',
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
        </div>
    )
}

export default Portfolio;