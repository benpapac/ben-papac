import React from "react";
import { amotions } from "../wh-constants";
import { prefix } from "@/app/prefix";
import Highlights from "../components/highlights";
import Image from "next/image";
import List from "@/app/typeography/list";
import Title from "@/app/typeography/title";
import Copy from "@/app/typeography/copy";

export default function Amotions () {

    return (
        <div className={"mx-auto flex flex-col place-items-center"}>
             <Image
                className={"mt-24"}
                src={`${prefix}/${amotions.image}`}
                alt={amotions.alt}
                width={300}
                height={300}
                priority
            />
            <Highlights card={amotions}/>

             <Title>{"Overview"}</Title>
            <Copy>{"Amotions, Inc. is a startup focused on combining the power of AI with emotional intelligence. They focus on products such as HR upskilling, live sales video call assistance, and empathy-based coaching."}</Copy>

            <Title>{"Goal"}</Title>
            <Copy>{"I worked at Amotions in its infancy. At the time, the organization was building out prototypes for its different products, and soliciting early adopters."}</Copy>

            <Title>{"What I did"}</Title>
            <List>
                <li>{"Built out an Emotional Intelligence Quiz UI flow."}</li>
                <li>{"Updated and expanded documentation for future interns."}</li>
                <li>{"Leveraged existing api contracts with an AWS backend."}</li>
            </List>

            <Title>{"Outcomes"}</Title>
            <List>
                <li>{"Creation of a sleek, easy-to-use quiz product that improved user learning experience."}</li>
                <li>{"Improved knowledge sharing and onboarding for new interns."}</li>
            </List>
              
        </div>
    )
};