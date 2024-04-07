import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} grid h-screen grid-cols-12 grid-rows-12 overflow-hidden`}>
                <div className="col-span-2 row-span-12">
                    <Sidebar />
                </div>
                <div className="col-span-10 row-span-1 border-b">
                    <Navbar />
                </div>
                <div className="col-span-10 row-span-11">{children}</div>
            </body>
        </html>
    );
}
