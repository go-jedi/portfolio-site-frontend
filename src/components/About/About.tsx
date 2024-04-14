import React from "react"

import styles from "@/components/About/About.module.scss";

import Description from "@/components/About/Description/Description";
import Service from "@/components/About/Service/Service";
import Technology from "@/components/About/Technology/Technology";
import Why from "@/components/About/Why/Why"

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <div className={styles.title}>Привет, это (Название) 👋🏼</div>
            <Description/>
            <Service/>
            <Technology/>
            <Why/>
        </div>
    )
}

export default About;