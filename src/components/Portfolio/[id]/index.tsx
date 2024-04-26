"use client";
import React from "react";

import {useAppDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
import {selectorProject} from "@/redux/project/selectors";
import {fetchGetByID} from "@/redux/project/asyncActions/getByID";

import styles from "@/components/Portfolio/[id]/index.module.scss";

import Back from "@/components/Portfolio/[id]/Back/Back";
import Description from "@/components/Portfolio/[id]/Description/Description";
import Technology from "@/components/Portfolio/[id]/Technology/Technology";
import ImageList from "@/components/Portfolio/[id]/ImageList/ImageList";
import BackSkeleton from "@/components/Portfolio/[id]/Back/BackSkeleton/BackSkeleton";
import IndexSkeleton from "@/components/Portfolio/[id]/IndexSkeleton/IndexSkeleton";
import DescriptionSkeleton from "@/components/Portfolio/[id]/Description/DescriptionSkeleton/DescriptionSkeleton";
import TechnologySkeleton from "@/components/Portfolio/[id]/Technology/TechnologySkeleton/TechnologySkeleton";
import ImageListSkeleton from "@/components/Portfolio/[id]/ImageList/ImageListSkeleton/ImageListSkeleton";

type PropsType = {
    id: string;
}

const PortfolioId: React.FC<PropsType> = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const {status, project} = useSelector(selectorProject)

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        dispatch(fetchGetByID(Number(props.id)))
    }, [])

    if (Object.keys(project).length === 0) {
        return (
            <div className={styles.portfolioid}>
                <BackSkeleton/>
                <IndexSkeleton/>
                <DescriptionSkeleton/>
                <TechnologySkeleton/>
                <ImageListSkeleton/>
            </div>
        )
    }

    return (
        <div className={styles.portfolioid}>
            <Back/>
            <div className={styles.title}>{project.title}</div>
            <Description/>
            <Technology/>
            <ImageList/>
        </div>
    )
}

export default PortfolioId;