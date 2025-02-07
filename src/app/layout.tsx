import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { prefix } from '../app/prefix';
import Nav from "./Nav";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
          className={`${raleway.variable} antialiased bg-green-500 text-gray-700`}
          >
            <Nav/>
            {children}
           <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-10">
       
            </footer>
        </body>
    </html>
  );
}
