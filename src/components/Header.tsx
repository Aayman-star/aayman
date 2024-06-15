import Link from "next/link";
import { noto_kufi } from "@/lib/fonts";

const Header = () => {
  return (
    <header className=" w-full fixed ">
      <div className="h-full w-full md:max-w-5xl md:mx-auto backdrop-blur  bg-zinc-950/50">
        <h1
          className={`${noto_kufi.className} text-4xl text-center py-2 text-zinc-300`}>
          <Link href={"/"}>
            <span className="text-teal-500/70">.</span>ایمن خالد
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
