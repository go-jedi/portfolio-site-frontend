import React from 'react';

import styles from "@/components/Home/Price/Price.module.scss";

const Price: React.FC = () => {
    return (
        <div className={styles.price}>
            <div className={styles.title}>Ценообразование:</div>
            <div className={styles.text}>
                Обсуждение стоимости за проект зависит от его сложности.
                Все прайсы за услугу(и) расчитываются индивидуально
                с каждым заказчиком.
            </div>
        </div>
    )
}

export default Price;