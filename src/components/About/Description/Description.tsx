import React from 'react';

import styles from "@/components/About/Description/Description.module.scss";

const Description: React.FC = () => {
    return (
        <div className={styles.description}>
            <div className={styles.text}>
                Программная студия Code Wave - Мы рады представить вам нашу новую студию,
                которая только что открыла свои двери. Наша студия - это место, где ваши идеи становятся реальностью,
                а ваши проекты превращаются в успешные продукты.
            </div>
            <div className={styles.text}>
                У нас команда профессионалов в области разработки
                программного обеспечения, стремящаяся предоставлять высококачественные решения
                для наших клиентов.
            </div>
            <div className={styles.text}>
                Наша студия отличается инновационным подходом к разработке, стремлением к
                постоянному совершенствованию и высоким качеством работы.
                Мы верим в то, что каждый проект - это уникальная задача, требующая индивидуального подхода.
            </div>
        </div>
    )
}

export default Description;