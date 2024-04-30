"use client";
import React from "react";

import styles from "@/components/Header/Hamburger/Hamburger.module.scss";

import Menu from "@/components/Header/Hamburger/Menu/Menu";

const Hamburger: React.FC = () => {
    const [isChecked, setIsChecked] = React.useState<boolean>(false)
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onClickHamburger = () => {
        try {
            setIsOpen((prev) => !prev);
            setIsChecked((prev) => !prev);

            if (!isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        } catch (error) {
            console.log("error in onClickHamburger:", error);
        }
    }

    const handleCloseHamburger = (): void => {
        try {
            setIsOpen(false)
            setIsChecked(false)
            document.body.style.overflow = "auto";
        } catch (error) {
            console.log("error in handleCloseHamburger:", error)
        }
    }

    return (
        <div>
            <div className={styles.hamburger}>
                <input
                    className={styles.checkbox}
                    onChange={onClickHamburger}
                    checked={isChecked}
                    type="checkbox"
                    id="hamburger-checkbox"
                />
                <label
                    className={styles.burger}
                    htmlFor="hamburger-checkbox"
                />
            </div>
            {
                isOpen && <Menu
                    handleCloseHamburger={handleCloseHamburger}
                />
            }
        </div>
    )
}

export default Hamburger;