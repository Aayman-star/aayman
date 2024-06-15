import Link from "next/link";
import { megrim } from "@/lib/fonts";

const Navbar = () => {
  return (
    <div className="w-full fixed backdrop-blur md:max-w-5xl h-10 bottom-16 md:bottom-[10rem] lg:bottom-16">
      <div className="w-[90%] h-full mx-auto  bg-zinc-950/40 rounded-full border-[1px] border-zinc-900/50">
        <div
          className={` ${megrim.className} w-[90%] h-full flex items-center mx-auto justify-evenly md:justify-around`}>
          <p className="p-4  text-teal-500 font-bold ">
            <Link href={"/"}>Home</Link>
          </p>
          <p className="p-4  text-teal-500 font-bold ">
            <Link href={"/About"}>About</Link>
          </p>
          <p className="p-4  text-teal-500 font-bold">
            <Link href={"/Projects"}>Projects</Link>
          </p>
          <p className="p-4  text-teal-500 font-bold">
            <Link href={"/Blog"}>Blog</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
