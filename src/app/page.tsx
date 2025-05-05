"use client"

import Image from "next/image";
import { KeyboardControls } from "@react-three/drei";
import { prefix } from "./prefix";
import WorkHistory from "./work-history/page";
import Title from "./typeography/title";
import Copy from "./typeography/copy";

export default function Home() {
  
  return (
     <KeyboardControls
           map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>

    <div className="flex flex-col items-center justify-items-center w-screen min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 place-items-center w-full">
        <div className={"mt-10 md:mt-0 flex flex-col place-items-start md:w-[70%]"}>
              <Image
            className={"rounded-full my-5 border-solid border-black border-1 drop-shadow-lg"}
            src={`${prefix}/Ben Papac Sq.jpg`}
            unoptimized
            alt="Ben's portrait"
            width={100}
            height={100}
            priority
            />
            <Title>{"User focused, quality driven, full stack web development."}</Title>
            <Copy>{"With 3 years of experience in web development and over a decade spent working at the highest levels of the entertainment industry, I execut clean, maintainable code, and communicate clearly with technical and non-technical stakeholders alike. I thrive in fast-paced, agile work environments, and I lead customer research and product planning conversations with empathy and curiosity."}</Copy>
          </div>
   
        <WorkHistory/>
      </main>
    </div>
            </KeyboardControls>
  );
}
