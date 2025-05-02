"use client"

import { useState } from "react";
import Link from "next/link";
import { prefix } from "../prefix";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

    if (window.innerWidth < 500) {
        return (
             <div>
            <div className={"mt-4 flex flex-row space-x-28"}>
                <Link href={"/"} className={"mt-1 ml-4 text-2xl w-1/2 text-start"}>{"Benjamin Papac"}</Link>
                 <button onClick={handleClick} 
    className={"z-10 flex flex-col justify-center items-start w-10 h-10  "}>
                    <span className={`bg-slate-500 block transition-all duration-300 ease-out 
                                    h-1 w-6 rounded-sm ${isOpen ? 
                                        'rotate-45 translate-y-2' : '-translate-y-0.5'
                                    }`} >
                    </span>
                    <span className={`z-10 bg-slate-500 block transition-all duration-300 ease-out 
                                    h-1 w-6 rounded-sm my-0.5 ${isOpen ? 
                                        'opacity-0' : 'opacity-100'
                                    }`} >
                    </span>
                    <span className={`bg-slate-500 block transition-all duration-300 ease-out 
                                    h-1 w-6 rounded-sm ${isOpen ? 
                                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`} >
                    </span>    
                </button>
            </div>
                
                    <div className={`z-1 fixed top-0 left-0 flex flex-col bg-red-200 justify-center items-center w-full h-full text-center text-3xl space-y-4 transition-all ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-96'}`}>                            
                        <Link href={"/"}>{"Home"}</Link>
                        <Link href={"/about"}>{"About"}</Link>
                        <Link href={"/projects"}>{"Projects"}</Link>
                        <Link href={"/contact"}>{"Contact"}</Link>
                        <Link href={`${prefix}/benpapac_resume.pdf`} 
                                    target='_blank' 
                                    rel='noreferrer noopener'
                                    >
                                        {"Resume"}
                        </Link>
                    </div>
               
                </div>
        )
    }

    return (
        <header className={"sticky z-10 p-8 h-10 w-full space-x-10 flex flex-row"}>
            <Link href={"/"} className={"text-lg md:w-1/2 md:text-4xl"}>{"Ben Papac"}</Link>
                <div className={"flex flex-row space-x-10 place-content-end md:w-1/2"}>
            
                      <Link href={"/about"}>{"About"}</Link>
                      <Link href={"/projects"}>{"Projects"}</Link>
                      <Link href={"/contact"}>{"Contact"}</Link>
                      <Link href={`${prefix}/benpapac_resume.pdf`} 
                      target='_blank' 
                      rel='noreferrer noopener'
                      >
                        {"Resume"}
                    </Link>
                </div>
        </header>
    );
};

export default Nav;