import React from 'react';
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import './ui/globals.css';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio",
};

const Layout = ({children}) => {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
};

export default Layout;