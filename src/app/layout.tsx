import React from "react";
import type {Metadata} from "next";
import {Lato} from "next/font/google";

import '@/scss/globals.scss';

import styles from "@/app/layout.module.scss"

import Header from '@/components/Header/Header';

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'YouPlay - Аренда игр',
    description:
        'Игровой магазин GamesRent',
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={lato.className}>
            <div className={styles.container}>
                <Header/>
                {children}
            </div>
            </body>
        </html>
    );
};

export default RootLayout;