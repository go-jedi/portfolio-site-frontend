import React from 'react';

import styles from "@/components/Home/Introduce/Picture/Picture.module.scss"

const Picture: React.FC = () => {
    return (
        <div>
            <div className={styles.img}>
                <div className={styles.text}>Картинка</div>
            </div>
        </div>
    )
}

export default Picture;