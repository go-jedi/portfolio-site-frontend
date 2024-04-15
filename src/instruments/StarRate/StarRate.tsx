'use client';
import React from "react";

import {FaStar} from 'react-icons/fa';

import styles from "@/instruments/StarRate/StarRate.module.scss";

type StarRateProps = {
    rating: number;
    onSetRate: (e: number) => void;
};

const StarRate: React.FC<StarRateProps> = (props: StarRateProps) => {
    const [hover, setHover] = React.useState<number>(0);

    return (
        <div className={styles.rate}>
            {[...Array(5)].map((_, index: number) => {
                const ratingValue: number = index + 1;
                return (
                    <label key={index}>
                        <input
                            className={styles.input}
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => props.onSetRate(ratingValue)}
                        />
                        <FaStar
                            className={styles.icon}
                            color={ratingValue <= (hover || props.rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseOver={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRate;