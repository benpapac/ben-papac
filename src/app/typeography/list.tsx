export default function List ({children}) {
    return <ul className={"list-disc text-lg w-[90%] md:w-full"}>{...children}</ul>
}