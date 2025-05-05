"use client"

import { useState } from "react";
import Link from "next/link";
import { prefix } from "../prefix";
import { catamaran } from "../fonts";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = (e) => {
    e.preventDefault();
      setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  }

    if (window.innerWidth < 500) {
        return (
            <div>
                <div className={"absolute top-0 left-0 w-screen mt-4 flex flex-row space-x-28 z-50"}>
                    <Link href={"/"} className={"mt-1 pl-10 text-2xl w-1/2 text-start"}>{"Benjamin Papac"}</Link>
                    <button onClick={handleClick} 
        className={"z-10 flex flex-col justify-center items-start w-10 h-10  "}>
                        <span className={`bg-slate-500 block transition-all duration-300 ease-out 
                                        h-1 w-6 rounded-sm ${isOpen ? 
                                            'rotate-45 translate-y-2' : '-translate-y-0.5'
                                        }`} >
                        </span>
                        <span className={`z-1 bg-slate-500 block transition-all duration-300 ease-out 
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
                
                <div className={`z-99 fixed top-0 left-0 flex flex-col bg-gray-800 justify-center items-center w-full h-full text-center text-3xl space-y-4 transition-all ease-in-out  text-gray-100 duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-96'}`}>                            
                    <Link href={"/"} onClick={close}
                    >{"Home"}</Link>
                    <Link href={"/work-history"} onClick={close}
                    >{"My Work"}</Link>
                    <Link href={"/contact"} onClick={close}
                    >{"Contact"}</Link>
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
        <header className={"absolute top-0 z-50 p-8 h-10 w-full space-x-10 flex flex-row"}>
            <Link href={"/"} className={`${catamaran.variable} text-lg md:w-1/2 md:text-4xl`}>{"Benjamin Papac"}</Link>
                <div className={"flex flex-row space-x-10 place-content-end md:w-1/2"}>
            
                      <Link href={"/work-history"}>{"My Work"}</Link>
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