export default function Copy ({children}) {
    return <p className={` text-md md:text-lg max-w-3xl w-[90%] md:w-full text-justify`}>{...children}</p>
};

export function CardCopy ({children}) {
    return <p className={` text-sm md:text-lg max-w-2xl w-[95%] md:w-full place-self-start text-justify`}>{...children}</p>
};