"use client";
import React from "react";

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
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    if (isLoading) {
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
            <div className={styles.title}>Одностраничник (Langing Page)</div>
            <Description/>
            <Technology/>
            <ImageList/>
        </div>
    )
}

export default PortfolioId;