"use client"

import Image from "next/image";
import { KeyboardControls } from "@react-three/drei";
import { prefix } from "./prefix";
import WorkHistory from "./work-history/page";

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
        <div className={"flex flex-col place-items-start w-[70%]"}>
              <Image
            className={"rounded-full object-top my-5 grayscale"}
            src={`${prefix}/Ben Papac Sq.jpg`}
            unoptimized
            alt="Ben's portrait"
            width={100}
            height={100}
            priority
            />
            <span className={"text-4xl font-bold w-full my-5"}>{"User focused, quality driven, full stack web development."}</span>
            <p>{"With 3 years of experience in web development and over a decade spent working at the highest levels of the entertainment industry, I execut clean, maintainable code, and communicate clearly with technical and non-technical stakeholders alike. I thrive in fast-paced, agile work environments, and I lead customer research and product planning conversations with empathy and curiosity."}</p>
          </div>
   
          {/* <h2 className={"text-xl md:text-2xl mb-2 font-bold"}>{"Languages, Frameworks and Technologies"}</h2>
          <div className={"mb-10 flex flex-row w-full flex-wrap place-items-center space-x-1"}>
            <Image
        className={"rounded-lg"}
        src={`${prefix}/javascript.png`}
        alt="JS"
        width={68}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/typescript.png`}
        alt="TS"
        width={68}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/python.png`}
        alt="Python"
        width={58}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/react.png`}
        alt="React"
        width={58}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/aws.png`}
        alt="AWS"
        width={58}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/rtl.png`}
        alt="RTL"
        width={58}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/apollo.png`}
        alt="Apollo"
        width={58}
        height={50}
        priority
        />
          <Image
        className={"rounded-lg"}
        src={`${prefix}/graphql.png`}
        alt="GraphQL"
        width={58}
        height={50}
        priority
        />
          
          </div> */}
        <WorkHistory/>
      </main>
    </div>
            </KeyboardControls>
  );
}
