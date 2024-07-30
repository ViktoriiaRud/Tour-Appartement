import React from 'react';
import type { Metadata } from "next";
import './ui/globals.css';

export const metadata: Metadata = {
    title: "Portfolio",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
};

export default Layout;