import Link from "next/link";
import Button from "./Button";

export default function Header() {
    return(
        <div className="w-full bg-slate-800 h-16 text-white mx-auto justify-between flex items-center px-7">
            <div className="mx-auto">
            <Link href="/" >Home</Link>
            <Link href="#gdd" className="ml-5">GDD</Link>
            <Link href="#equipe" className="ml-5">Equipe</Link>
            </div>
            <Button>Download</Button>
        </div>
    )
}

