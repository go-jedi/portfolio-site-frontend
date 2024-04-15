'use client';
import React from "react";

import {IoSendOutline} from 'react-icons/io5';

import styles from "@/components/Review/Form/Form.module.scss";

import FormSkeleton from "@/components/Review/Form/FormSkeleton/FormSkeleton";
import StarRate from "@/instruments/StarRate/StarRate";

const Form: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [rating, setRating] = React.useState<number>(0);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className={styles.form}>
            {
                loading ? (
                    <FormSkeleton/>
                ) : (
                    <>
                        <div className={styles.block}>
                            <div className={styles.row}>
                                <input className={styles.input} type="text" placeholder="E-mail"/>
                            </div>
                            <div className={styles.row}>
                                <StarRate rating={rating} onSetRate={(e: number) => setRating(e)}/>
                            </div>
                        </div>
                        <div className={styles.textarea}>
                            <textarea placeholder="Сообщение..."></textarea>
                            <button className={styles.btn}>
                                <IoSendOutline className={styles.icon}/>
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Form;