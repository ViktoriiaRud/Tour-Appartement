import React from "react";
import {Metadata} from "next";
import './assets/styles/globals.css'

export const metadata: Metadata = {
    title: "tour-apartment",
    description: "tour-apartment project - rental apartments",
    keywords: 'rental, find rentals',
};

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}