import React from "react";

import {Image} from 'antd';
import {CiImageOn} from "react-icons/ci";

import styles from "@/components/Portfolio/[id]/ImageList/ImageList.module.scss";

const images: string[] = [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
]

const ImageList: React.FC = () => {
    return (
        <div className={styles.list}>
            <div className={styles.title}>
                <CiImageOn
                    className={styles.icon}
                />
                Изображения:
            </div>
            <div className={styles.images}>
                {images.map((e: string, index: number) => {
                    return <Image
                        key={index + 1}
                        width={220}
                        height={220}
                        src={e}
                        alt={'image'}
                    />
                })}
            </div>
        </div>
    )
}

export default ImageList;