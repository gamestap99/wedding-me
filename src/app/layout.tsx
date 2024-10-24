import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {svnMotherCarmel} from "@/app/fonts";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Wedding | Đinh Nam - Trâm Anh",
    description: "Hãy xem trang web này để biết thêm về đám cưới của Đinh Nam - Trâm Anh nhé!!!",
    openGraph:{
        type:"website",
        url:"https://wedding-me-iota.vercel.app/",
        siteName:"Wedding | Đinh Nam - Trâm Anh",
        title: 'Wedding | Đinh Nam - Trâm Anh',
        description: 'Hãy xem trang web này để biết thêm về đám cưới của Đinh Nam - Trâm Anh nhé!!!',
    }
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${svnMotherCarmel.variable} antialiased`}
        >
        <AntdRegistry>{children}</AntdRegistry>
        </body>
        </html>
    );
}
