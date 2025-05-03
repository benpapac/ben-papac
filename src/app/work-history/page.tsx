"use client"

import Image from "next/image";
import { prefix } from "../prefix";
import Link from "next/link";
import { useState } from "react";
import { cards } from "./wh-constants";
import Card from "./components/card";

export default function WorkHistory() {
  const [isJdHovered, setIsJdHovered] = useState('bg-white');
  const [isAmotionsHovered, setIsAmotionsHovered] = useState('bg-white');

  const handleMouseOver = (e) => {
    e.preventDefault();
    if (e.target.id === 'jd') {
      setIsJdHovered('bg-slate-800 text-gray-100');
    } else {
      setIsAmotionsHovered('bg-slate-800 text-gray-100');
    }
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    if (e.target.id === 'jd') {
      setIsJdHovered('bg-white');
    } else {
      setIsAmotionsHovered('bg-white');
    }
  };

    return (
        <div className={"mt-10 w-screen flex flex-col"}>
          {
            cards.map((card, idx) => 
              <Card 
                alt={card.alt} 
                bg={card.bg}
                copy={card.copy} 
                idx={idx} 
                image={card.image}
                href={card.href} 
                title={card.title} 
                top={card.top}
                key={idx}
              />)
          }
            {/* <div className={"my-10 mx-auto relative md:w-3/4 flex flex-col"}>
                  <div className={`mb-4 flex flex-col md:flex-row h-[500px]`}>
                  <div className={"w-screen h-full absolute left-[-13%] z-0 blur-md jd"}></div>
                  <Image
                        className={"absolute top-0 left-[35%] z-1"}
                        src={`${prefix}/JDLogo.png`}
                        alt="JD Logo"
                        width={300}
                        height={300}
                        priority
                        />
                       
                        <Link href={"/about/deere"}>
                     <div id={"jd"}
                     onMouseEnter={handleMouseOver} 
                     onMouseLeave={handleMouseLeave}
                     className={`flex flex-col p-10 rounded-2xl absolute bottom-0 z-1  w-[99%] h-auto  ${isJdHovered}`}>
                      <span className={"text-4xl self-center"}>{"Autonomy Capable Precision Ag Product"}</span>
                    <p className={"place-items-start p-5 mb-4"}>{"Working within John Deere's Land Manager application, I built several features in support of AutoPath (Boundaries), which paved the way for autonomous farming. See below for a few highlights."}</p>
                    <span className={"underline"}>{"Curious? Learn more about this project."}</span>
                     </div>
                    </Link>
                  </div>

            </div>
        
            <div className={"relative mt-10 mx-auto md:w-3/4 flex flex-col"}>
                  <div className={`mb-4 flex flex-col md:flex-row h-[500px]`}>
                  <div className={"w-screen h-full absolute left-[-13%] z-0 blur-md amotions"}></div>
                    <div className={"mb-4 flex flex-col w-full md:w-2/3 space-x-1 inset-shadow-sm"}>
                     
                      <Image
                        className={"absolute top-1 left-[40%] rounded-lg mb-10"}
                        src={`${prefix}/Amotions.png`}
                        alt="Amotions Logo"
                        width={300}
                        height={300}
                        priority
                        />

                        <Link href={"/about/amotions"}>
                     <div id={"amotions"}
                     onMouseEnter={handleMouseOver} 
                     onMouseLeave={handleMouseLeave}
                     className={`flex flex-col p-10 rounded-2xl absolute bottom-0 z-1  w-[99%] h-auto  ${isAmotionsHovered}`}>
                      <span className={"text-4xl self-center"}>{"AI x Emotional Intelligence"}</span>
                    <p className={"place-items-start p-5 mb-4"}>{"As an intern for Amotions, Inc., I built a Next JS web app that leveraged the power of LLMs to empower HR teams."}</p>
                    <span className={"underline"}>{"Curious? Learn more about this project."}</span>
                     </div>
                    </Link>
                    </div>

                </div>
            </div> */}
        </div>
    )

}