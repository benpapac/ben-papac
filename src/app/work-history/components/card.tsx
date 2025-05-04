"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { prefix } from "@/app/prefix";
import Title from "@/app/typeography/title";
import {CardCopy} from "@/app/typeography/copy";



export default function Card({alt, bg, idx, image, href, title, top, copy}) {
      const [isHovered, setIsHovered] = useState('bg-white');

  const handleMouseOver = (e) => {
    e.preventDefault();
    setIsHovered('bg-slate-800 text-gray-100');
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered('bg-white');
  };
    return (
        <div className={"my-10 mx-auto relative w-full max-w-7xl flex flex-col"}>
                  <div className={`mb-4 flex flex-col md:flex-row h-[500px]`}>
                  <div className={`w-full h-full absolute z-0 blur-sm ${bg}`}></div>
                  <Image
                        className={`absolute ${top} left-[10%] md:left-[35%] z-1`}
                        src={`${prefix}/${image}`}
                        alt={alt}
                        width={300}
                        height={300}
                        priority
                        />
                       
                        <Link href={href}>
                     <div id={idx}
                     onMouseEnter={handleMouseOver} 
                     onMouseLeave={handleMouseLeave}
                     className={`flex flex-col w-[90%] md:w-full p-1 rounded-2xl absolute bottom-0 left-[5%] md:left-0 z-1 h-auto  ${isHovered} transition-all`}>
                      <Title>{title}</Title>
                    <CardCopy>{copy}</CardCopy>
                    <span className={"underline"}>{"Curious? Learn more about this project."}</span>
                     </div>
                    </Link>
                  </div>

            </div>
    );
};