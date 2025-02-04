
import Image from "next/image";
import { prefix } from "../prefix";

export default function About() {
    return (
        <div className={"mt-10 flex flex-col"}>
            <div className={"my-10 mx-auto md:w-3/4 flex flex-col text-xl"}>
                  <h2 className={"mb-2 text-3xl font-bold text-center"}>{"Learn More About What I've built."}</h2>
        
                  <div className={"mb-4 flex flex-col md:flex-row w-full place-items-center"}>
                    <div className={"flex flex-col w-full md:w-2/3 space-x-1"}>
                      <Image
                        className={"rounded-lg"}
                        src={`${prefix}/JDLogo.png`}
                        alt="JD Logo"
                        width={300}
                        height={300}
                        priority
                        />
                      <div className={"ml-2 mb-4 flex flex-col md:flex-row w-full place-items-center md:space-x-4 text-lg"}>
                        <p className={"font-bold"}>{"John Deere ISG"}</p>
                        <p className={"font-semibold"}>{"Mar 2023 - Nov 2024"}</p>
                      </div>
                    </div>
                    <p className={"place-items-start mb-4 w-full"}>{"Primarily working on John Deere's Land Manager application, I built several features in support of their new AutoPath (Boundaries) product, which paves the way for autonomous farming. See below a few highlights."}</p>
                  </div>
        
        
                    <ol className={"ml-4 list-disc md:w-3/4 space-y-1"}>
                      <li>{"Created a preview of AutoPath using the in-app map, yielding up to 25% user engagement, or users who used the older product, called Guidance Lines. (measured using Adobe Analytics)"}</li>
                      <li>{"Updated UX features supporting AutoPath Headlands to improve user experience, reducing click count by 8 to 10 clicks"}</li>
                      <li>{"Updated api contract for AutoPath Headlands feature, improving separation between two types of data, Boundaries and AutoPath"}</li>
                    </ol>
            </div>
        
                <div className={"mt-10 mx-auto md:w-3/4 flex flex-col text-xl"}>
                  <div className={"mb-4 flex flex-col md:flex-row w-full place-items-start"}>
                    <div className={"mb-4 flex flex-col w-full md:w-2/3 space-x-1"}>
                      <Image
                        className={"rounded-lg mb-10"}
                        src={`${prefix}/Amotions.png`}
                        alt="Amotions Logo"
                        width={300}
                        height={300}
                        priority
                        />
                      <div className={"ml-2 mb-4 flex flex-col md:flex-row w-full place-items-center md:space-x-4 text-lg"}>
                        <p className={"font-bold"}>{"Amotions Inc."}</p>
                        <p className={"font-semibold"}>{"Jan 2023 - Mar 2023"}</p>
                      </div>
                    </div>
                    <p className={"mb-4 w-full"}>{"At Amotions, I built out a self-evaluation survey to help users identify key strengths and weaknesses I also refactored code, and developed and implemented new technical training for interns."}</p>
                  </div>
        
        
                    <ol className={"ml-4 list-disc md:w-3/4 space-y-1"}>
                      <li>{"Leveraged the dynamic routing of Next JS to create a seemless UX."}</li>
                      <li>{"Updated code, reducing code weight by 10%."}</li>
                      <li>{"Provided technical training and contributed to training documentation."}</li>
                    </ol>
                </div>
                </div>
    )
}