import React from "react";
import { cabin } from "@/app/fonts";
import Copy from "@/app/typeography/copy";
import Title from "@/app/typeography/title";

const gridBlock = "border-2 border-double border-blue-800 p-5 rounded-lg flex flex-col";

export default function Highlights ({card}) {
    const {title, copy, role, skills} = card;
    return (
        <div className={"md:my-10"}>
            <div className={"my-5"}>
                    <Title>{title}</Title>
                    <Copy>{copy}</Copy>
            </div>
            <div className={"flex flex-col md:flex-row gap-10 w-5/6 place-self-center md:w-full place-items-stretch justify-center"}>
                <div className={gridBlock}>
                    <span className={`text-center ${cabin.variable}`}>{"Role"}</span>
                    <p className={"place-self-center"}>{role}</p>
                </div>
                <div className={gridBlock}>
                    <span className={"text-center"}>{"Skills"}</span>
                    <p className={"place-self-center"}>{skills}</p>
                </div>
            </div>
        </div>
    );
};