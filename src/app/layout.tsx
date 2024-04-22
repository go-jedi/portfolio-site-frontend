import React from "react";
import {Lato} from "next/font/google";
import {ReduxProvider} from '@/redux/provider';

import type {Metadata} from "next";

import '@/scss/globals.scss';

import styles from "@/app/layout.module.scss"

import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Code Wave',
    description:
        'Студия программирования Code Wave',
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body className={lato.className}>
        <ReduxProvider>
            <div className={styles.container}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </ReduxProvider>
        </body>
        </html>
    );
};

export default RootLayout;