import React from "react";

import {CiCircleInfo} from "react-icons/ci";

import styles from "@/components/Portfolio/[id]/Description/Description.module.scss";

const Description: React.FC = () => {
    return (
        <div className={styles.description}>
            <div className={styles.title}>
                <CiCircleInfo
                    className={styles.icon}
                />
                Описание:
            </div>
            <div className={styles.text}>
                Информационный сервис: Получайте актуальные новости, обновления и информацию о мероприятиях прямо в
                вашем чате.
            </div>
            <div className={styles.text}>
                Уведомления: Не пропустите важные звонки или сообщения, подписывайтесь на уведомления о пропущенных
                звонках и важных событиях.
            </div>
            <div className={styles.text}>
                Программа лояльности: Регистрируйтесь в программе лояльности, отслеживайте свой баланс бонусов и
                получайте информацию о доступных промокодах.
            </div>
            <div className={styles.text}>
                Консультации: Получайте ответы на ваши вопросы 24/7, будь то покупательские запросы или информация о
                товарах.
            </div>
        </div>
    )
}

export default Description;