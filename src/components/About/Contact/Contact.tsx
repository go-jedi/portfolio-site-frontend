import React from "react";

import styles from '@/components/About/Contact/Contact.module.scss';

const Contact: React.FC = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.title}>Контакты:</div>
            <div className={styles.text}>
                Мы рады предложить вам наши услуги и надеемся на долгосрочное сотрудничество.
                Если у вас есть идеи или вопросы, не стесняйтесь связаться с нами.
                Мы всегда готовы помочь и найти наилучшее решение для ваших потребностей.
            </div>
            <div className={styles.text}>
                Если вы хотите узнать больше о том, как мы можем помочь
                вам достичь ваших целей, пожалуйста, свяжитесь с нами через
                <a
                    className={styles.link}
                    target="_blank"
                    href={process.env.NEXT_PUBLIC_TG_LINK}
                >
                    Telegram бот
                </a>.
                Мы с нетерпением ждем возможности работать с вами!
            </div>
        </div>
    )
}

export default Contact;