import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../assets/styles/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "tour-apartment",
    description: "tour-apartment project - rental apartments",
    keywords: 'rental, find rentals',
};

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}