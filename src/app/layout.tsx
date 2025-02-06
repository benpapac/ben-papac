import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { prefix } from '../app/prefix';


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
            <header className={"sticky z-10 p-8 h-10 w-full space-x-10 flex flex-row"}>
                    <Link href={"/"} className={"text-lg md:w-1/2 md:text-4xl"}>{"Ben Papac"}</Link>
                    <div className={"flex flex-row space-x-10 place-content-end md:w-1/2"}>
            
                      <Link href={"/about"}>{"About"}</Link>
                      <Link href={"/projects"}>{"Projects"}</Link>
                      <Link href={"/contact"}>{"Contact"}</Link>
                      <Link href={`${prefix}/benpapac_resume.pdf`} 
                      target='_blank' 
                      rel='noreferrer noopener'
                      >
                        {"Resume"}
                    </Link>
                        </div>
                  </header>
          {children}
           <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-10">
       
            </footer>
        </body>
    </html>
  );
}
