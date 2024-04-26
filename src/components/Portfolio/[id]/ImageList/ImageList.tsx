import React from "react";

import {useSelector} from 'react-redux';
import {selectorProject} from "@/redux/project/selectors";
import {ImageType} from "@/redux/project/types";

import {Image} from 'antd';
import {CiImageOn} from "react-icons/ci";

import styles from "@/components/Portfolio/[id]/ImageList/ImageList.module.scss";

const ImageList: React.FC = () => {
    const {project} = useSelector(selectorProject)

    return (
        <div className={styles.list}>
            <div className={styles.title}>
                <CiImageOn
                    className={styles.icon}
                />
                Изображения:
            </div>
            <div className={styles.images}>
                {project.paths.map((e: ImageType) => {
                    return <Image
                        key={e.id}
                        width={220}
                        height={220}
                        src={`${process.env.NEXT_PUBLIC_API_URL}file-server/${e.filename}`}
                        alt={'image'}
                    />
                })}
            </div>
        </div>
    )
}

export default ImageList;