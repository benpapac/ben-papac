import { prefix } from "../prefix";
import Image from "next/image";


const Projects = () => {
    return (
        <div className="mt-10 p-4">
             <div className="flex flex-col mb-4 w-full place-items-center">
                 <h2 className={"text-3xl mb-4"}>{"LG Management"}</h2>
                 <a 
                 href={"https://www.lgmanagement.org/talent"}
                 target={"_blank"}
                 rel={"noopener noreferrer"}
                 >
                <Image 
                src={`${prefix}/LG`} 
                alt={"a picture of the talent page on LG Managment's website."}
                width={"500"}
                height={"500"}
                className={"hover:scale-105 transition-all rounded-lg"}
                />
                </a>
          
                <p className={"w-1/2 p-4"}>{"A sleek single-page React App, with a server application and AWS S3 asset storage for a  boutique talent management company.  "}
                    <span className={"underline"}>
                        <a 
                        href={"https://www.lgmanagement.org/talent"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"hover:text-blue-900"}
                        >
                            {"Visit the site."}
                        </a>
                    </span>
                </p>
        
            </div>
            <div className="flex mb-4 flex-col w-full place-items-center">
                <h2 className={"text-3xl text-center mb-4"}>{"Onitama"}</h2>
                 <a 
                 href={"https://benpapac.github.io/Onitama"}
                 target={"_blank"}
                 rel={"noopener noreferrer"}
                 >
                <Image 
                src={`${prefix}/Onitama`} 
                alt={"a picture of the board, with pieces in their starting positions, in the Onitama simulation"}
                width={"500"}
                height={"500"}
                className={"hover:scale-105 transition-all rounded-lg"}
                />
                </a>
                <p className={"p-4 w-1/2"}>{"Pure html, css and javascript. This project features a simulation of the popular board game Onitama.  "}

                    <span className={"underline"}>
                        <a 
                        href={"https://benpapac.github.io/Onitama"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"hover:text-blue-900"}
                        >
                                {"Visit the site."}
                        </a>
                    </span>
                </p>
            </div>

        </div>
    )
};

export default Projects;