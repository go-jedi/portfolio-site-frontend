"use client";
import React from "react";

import {useSelector} from 'react-redux';
import {selectorProject} from "@/redux/project/selectors";

import {CiCircleInfo} from "react-icons/ci";

import styles from "@/components/Portfolio/[id]/Description/Description.module.scss";

const Description: React.FC = () => {
    const {project} = useSelector(selectorProject)

    return (
        <div className={styles.description}>
            <div className={styles.title}>
                <CiCircleInfo
                    className={styles.icon}
                />
                Описание:
            </div>
            <div className={styles.text}>
                {project.description}
            </div>
        </div>
    )
}

export default Description;