"use client";
import React from "react";

import styles from "@/components/Header/Hamburger/Hamburger.module.scss";

import Menu from "@/components/Header/Hamburger/Menu/Menu";

const Hamburger: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onClickHamBurger = () => {
        try {
            setIsOpen((prev) => !prev);

            if (!isOpen) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "auto"
            }
        } catch (error) {
            console.log("error in onClickHamBurger", error);
        }
    }

    return (
        <div>
            <div className={styles.hamburger}>
                <input
                    className={styles.checkbox}
                    onClick={onClickHamBurger}
                    type="checkbox"
                    id="hamburger-checkbox"
                />
                <label
                    className={styles.burger}
                    htmlFor="hamburger-checkbox"
                />
            </div>
            {
                isOpen && <Menu/>
            }
        </div>
    )
}

export default Hamburger;