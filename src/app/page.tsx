"use client"

import Image from "next/image";
import { KeyboardControls } from "@react-three/drei";

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

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row gap-8 row-start-2 items-center sm:items-start">
        <Image
        className={"rounded-lg"}
          src="/Ben Papac.jpg"
          alt="Ben's portrait"
          width={250}
          height={250}
          priority
          />
        <div className={"flex flex-col"}>

          <h2 className={"mb-20 text-xl md:text-3xl"}>
            {"My name is Ben. I’m a customer centric full-stack software engineer with a background in acting and community organizing."}
          </h2>

          <label htmlFor="skills" className={"text-2xl font-bold mb-2"}>{"What I do:"}</label>
          <ol id="skills" className={"text-xl space-y-2 mb-10"}>
              <li><span className={"font-bold"}>{"I execute"}</span>{" thanks to 2+ years experience in React, Javascript / Typescript, Google Maps API, and I’m comfortable in Python."}</li>
              <li><span className={"font-bold"}>{"I thrive"}</span>{" in fast-paced, constantly shifting work environments, as I did when I was a Field Organizer for the Democratic Party of Georgia in 2020."}</li>
              <li><span className={"font-bold"}>{"I lead"}</span>{" customer research conversations with empathy, curiosity, and active listening. This was an asset when doing customer research at John Deere."}</li>
          </ol>

          <h2 className={"text-xl md:text-2xl mb-2"}>{"Languages, Frameworks and Technologies"}</h2>
          <div className={"flex flex-row w-full flex-wrap place-items-center space-x-1"}>
            <Image
        className={"rounded-lg"}
          src="/javascript.png"
          alt="Ben's portrait"
          width={68}
          height={50}
          priority
          />
          <Image
        className={"rounded-lg"}
          src="/typescript.png"
          alt="Ben's portrait"
          width={68}
          height={50}
          priority
          />
          <Image
        className={"rounded-lg"}
          src="/python.png"
          alt="Ben's portrait"
          width={58}
          height={50}
          priority
          />
          <Image
        className={"rounded-lg"}
          src="/react.png"
          alt="Ben's portrait"
          width={58}
          height={50}
          priority
          />
          <Image
        className={"rounded-lg"}
          src="/aws.png"
          alt="Ben's portrait"
          width={58}
          height={50}
          priority
          />
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
            </KeyboardControls>
  );
}
