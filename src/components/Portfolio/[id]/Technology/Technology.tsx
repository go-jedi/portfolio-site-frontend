import React from "react";

import {FaGolang} from "react-icons/fa6";
import {FaDocker, FaPython, FaReact} from "react-icons/fa";
import {IoLogoJavascript, IoLogoVue} from "react-icons/io5";
import {TbBrandNextjs} from "react-icons/tb";
import {DiRedis} from "react-icons/di";

import styles from "@/components/Portfolio/[id]/Technology/Technology.module.scss";

const Technology: React.FC = () => {
    return (
        <div className={styles.technology}>
            <div className={styles.title}>
                <FaGolang className={styles.icon}/>
                <FaPython className={styles.icon}/>
                <IoLogoJavascript className={styles.icon}/>
                <FaDocker className={styles.icon}/>
                <FaReact className={styles.icon}/>
                <IoLogoVue className={styles.icon}/>
                <TbBrandNextjs className={styles.icon}/>
                <DiRedis className={styles.icon}/>
                Используемые технологии:
            </div>
            <div className={styles.text}>
                Golang + Fiber + PostgreSQL + Docker + migrations Goose + air
            </div>
        </div>
    )
}

export default Technology;