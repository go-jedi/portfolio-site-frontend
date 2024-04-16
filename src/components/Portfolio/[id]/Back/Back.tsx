"use client";
import React from "react";
import {useRouter} from 'next/navigation'

import {Button} from "antd";
import {AiOutlineRollback} from "react-icons/ai";

import styles from "@/components/Portfolio/[id]/Back/Back.module.scss";

const Back: React.FC = () => {
    const router = useRouter();

    const handleClick = (): void => {
        try {
            router.back()
        } catch (error) {
            console.error("error in Back component:", error);
        }
    }

    return (
        <Button
            className={styles.btn}
            size={'small'}
            onClick={handleClick}
        >
            Назад
            <AiOutlineRollback className={styles.icon}/>
        </Button>
    )
}

export default Back;