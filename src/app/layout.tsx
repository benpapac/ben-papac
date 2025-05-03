"use client"

import type { Metadata } from "next";

import "./globals.css";

import dynamic from 'next/dynamic'
import { raleway } from "./fonts";
 
const Nav = dynamic(
  () => import('./components/Nav'),
  { ssr: false }
)



const metadata: Metadata = {
  title: "Ben's Portfolio Page",
  description: "A Next.js Single Page Application highlighting a Ben Papac's web development work",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body
          className={`${raleway.variable} antialiased bg-gray-200 text-gray-700`}
          >
            <Nav/>
            {children}
           <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-10">
       
            </footer>
        </body>
    </html>
  );
}
