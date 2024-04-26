import React from "react";

import {useSelector} from 'react-redux';
import {selectorProject} from "@/redux/project/selectors";

import {FaGolang} from "react-icons/fa6";
import {FaPython} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";

import styles from "@/components/Portfolio/[id]/Technology/Technology.module.scss";

const Technology: React.FC = () => {
    const {project} = useSelector(selectorProject)

    return (
        <div className={styles.technology}>
            <div className={styles.title}>
                <FaGolang className={styles.icon}/>
                <FaPython className={styles.icon}/>
                <IoLogoJavascript className={styles.icon}/>
                Используемые технологии:
            </div>
            <div className={styles.text}>
                {project.technology}
            </div>
        </div>
    )
}

export default Technology;