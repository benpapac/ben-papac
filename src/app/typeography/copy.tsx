export default function Copy ({children}) {
    return <p className={`m:1 md:m-5 text-md max-w-2xl w-[95%] md:w-full md:place-self-end text-justify`}>{...children}</p>
};

export function CardCopy ({children}) {
    return <p className={`m-1 md:m-5 text-sm md:text-md max-w-2xl w-[95%] md:w-full place-self-start text-justify`}>{...children}</p>
};