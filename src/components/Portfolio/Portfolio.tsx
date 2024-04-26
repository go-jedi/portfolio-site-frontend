"use client";
import React from "react";

import {useAppDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
import {selectorProject} from "@/redux/project/selectors";
import {fetchGet} from "@/redux/project/asyncActions/get";
import {ProjectType} from "@/redux/project/types";

import styles from "@/components/Portfolio/Portfolio.module.scss";

import Empty from "@/components/Portfolio/Empty/Empty";
import Block from "@/components/Portfolio/Block/Block";
import Pagination from "@/instruments/Pagination/Pagination"

const Portfolio: React.FC = () => {
    const dispatch = useAppDispatch()
    const {status, projects, params} = useSelector(selectorProject)

    const [currentPage, setCurrentPage] = React.useState(1)

    const onChangePage = (page: number) => {
        try {
            setCurrentPage(page)
        } catch (error) {
            console.log("error in onChangePage:", error)
        }
    }

    React.useEffect(() => {
        const formData = {
            page: currentPage,
            limit: 5
        }
        dispatch(fetchGet(formData))
    }, [currentPage])

    if (projects.length === 0 && status === "completed") {
        return (
            <div className={styles.portfolio}>
                <div className={styles.title}>Портфолио</div>
                <Empty/>
            </div>
        )
    }

    return (
        <div className={styles.portfolio}>
            <div className={styles.title}>Портфолио</div>
            <div className={styles.project}>
                {projects.map((e: ProjectType) => {
                    return <Block key={e.id} {...e}/>
                })}
            </div>
            <div className={styles.pagination}>
                <Pagination
                    currentPage={currentPage}
                    pageCount={params.page_count}
                    limit={params.limit}
                    status={status}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    )
}

export default Portfolio;