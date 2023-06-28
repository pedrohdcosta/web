import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <div className="mx-auto flex h-16 w-full items-center justify-between bg-gradient-to-r from-black via-slate-900 to-slate-950 px-3 text-white">
      <div className="mx-auto">
        <Link href="/">Home</Link>
        <Link href="#gdd" className="ml-5">
          GDD
        </Link>
        <Link href="#equipe" className="ml-5">
          Equipe
        </Link>
      </div>
      <Button>Download</Button>
    </div>
  );
}
