import Title from "@/app/typeography/title";
import Highlights from "../components/highlights";
import { jd } from "../wh-constants";
import { prefix } from "@/app/prefix";
import Image from "next/image";
import List from "@/app/typeography/list";
import Copy from "@/app/typeography/copy";

export default function Deere (){
    return (
        <div className={"mt-[150px] mx-auto w-full max-w-7xl flex flex-col place-items-center"}>
            <Image
                className={""}
                src={`${prefix}/${jd.image}`}
                alt={jd.alt}
                width={300}
                height={300}
                priority
            />
            <Highlights card={jd}/>

           <Title>{"Overview"}</Title>
           <Copy>{"John Deere ISG is an industry leader in the Precision Ag space. To maintain their benchmark products, ISG began work on autonomous farming operations a few years ago. A foundational element of any farming operation is the Headland: the space around the perimeter of a field that has to be covered in a separate pass of the equipment. "}</Copy>

           <Title>{"Goal"}</Title>
           <Copy>{"ISG's Autopath(Boundaries) product allows farmers to create autonomous work plans for their fields. Including Headlands in this work plan was proving cumbersome. Farmers had to make changes to a separate piece of data that represented the Headland, then check out their Autopath plan to see if it would work. I was tasked with updating our Autopath api and front end app to let users include the Headland within the Autopath itself. This would speed things up for farmers tremendously."}</Copy>

           <Title>{"What I did"}</Title>
           <List>
                <li>{"Coordinated with our back end team, UX, and Product Owner."}</li>
                <li>{"Developed a new api contract."}</li>
                <li>{"Built a new React UI feature, per UX designs / feedback."}</li>
                <li>{"Added unit, integration and acceptance tests for the new api contract and UI feature."}</li>
           </List>

           <Title>{"Outcomes"}</Title>
           <List>
                <li>{"20% Increase in DAUs of Autopath(Boundaries)"}</li>
                <li>{"Improved user experience, by reducing user input time by 50%"}</li>
           </List>
        </div>
    );
};