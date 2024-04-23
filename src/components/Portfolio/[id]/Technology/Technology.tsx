import React from "react";

import {FaGolang} from "react-icons/fa6";
import {FaPython} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";

import styles from "@/components/Portfolio/[id]/Technology/Technology.module.scss";

const Technology: React.FC = () => {
    return (
        <div className={styles.technology}>
            <div className={styles.title}>
                <FaGolang className={styles.icon}/>
                <FaPython className={styles.icon}/>
                <IoLogoJavascript className={styles.icon}/>
                Используемые технологии:
            </div>
            <div className={styles.text}>
                Golang + Fiber + PostgreSQL + Docker + migrations Goose + air
            </div>
        </div>
    )
}

export default Technology;