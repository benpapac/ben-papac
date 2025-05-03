import React from "react";
import { cabin } from "@/app/fonts";

const gridBlock = "border-2 border-double border-blue-800 p-5 rounded-lg flex flex-col";

export default function Highlights ({card}) {
    const {title, copy, role, skills} = card;
    return (
        <React.Fragment>
            <div className={"my-5"}>
                    <span className={`${cabin.variable} text-4xl max-w-[500px]]`}>{title}</span>
                    <p className={"mt-[20px] max-w-[500px]"}>{copy}</p>
                    </div>
                    <div className={"flex flex-row gap-10"}>
                        <div className={gridBlock}>
                            <span className={`text-center ${cabin.variable}`}>{"Role"}</span>
                            <p>{role}</p>
                        </div>
                        <div className={gridBlock}>
                            <span className={"text-center"}>{"Skills"}</span>
                            <p>{skills}</p>
                        </div>
                    </div>
        </React.Fragment>
    );
};