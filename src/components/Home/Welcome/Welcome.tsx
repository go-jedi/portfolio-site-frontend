import React from 'react';

import styles from "@/components/Home/Welcome/Welcome.module.scss";

const Welcome: React.FC = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.text}>
                Добро пожаловать на главную страницу нашей студии программирования!
                Мы специализируемся на разработке программного обеспечения,
                используя Golang, Python, JavaScript - мощные и гибкие языки программирования, которые
                позволяет нашим разработчикам быстро и эффективно создавать различные типы приложений.
            </div>
        </div>
    )
}

export default Welcome;