import React from "react";
import Highlights from "../components/highlights";
import Image from "next/image";
import List from "@/app/typeography/list";
import Title from "@/app/typeography/title";
import { lg } from "../wh-constants";
import { prefix } from "@/app/prefix";
import Details from "@/app/components/details";


export default function LG () {
    return (
        <Details>
            <div className={"w-[300px] h-[150px] bg-gray-800 rounded-xl flex flex-col place-items-bottom"}>
             <Image
                className={""}
                src={`${prefix}/${lg.image}`}
                alt={lg.alt}
                width={300}
                height={300}
                priority
                />
                </div>
            <Highlights card={lg}/>

             <Title>{"Overview"}</Title>
            <p className={"text-lg max-w-xl my-3"}>{"LG Management is a boutique Talent Management company that represents top-of-show talent in the TV, Film, and Theater industries. They needed a simple, clean web app to act as their digital calling card."}</p>

            <Title>{"Goal"}</Title>
            <p className={"text-lg max-w-xl"}>{"To protect the company's brand and online presence, I createed a sleek single-page React app that included a useful admin feature as well."}</p>

            <Title>{"What I did"}</Title>
            <List>
                <li>{"Developed a noSQL api on MongoDB"}</li>
                <li>{"Developed a new api contract that leveraged GraphQL."}</li>
                <li>{"Created AWS S3 storage for images."}</li>
                <li>{"Added pleasing UX to the Talent page, to create a polished look and feel."}</li>
            </List>

            <Title>{"Outcomes"}</Title>
            <List>
                <li>{"Successful brand protection."}</li>
                <li>{"Proven weekly engagement, measured in email submissions via the Contact page."}</li>
            </List>
              
        </Details>
    )
};