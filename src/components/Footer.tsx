import { space_g } from "@/lib/fonts";

const Footer = () => {
  return (
    <footer className="h-[5vh] w-full  bg-zinc-900">
      <div className="md:max-w-5xl md:mx-auto border-t-[1px] border-slate-500/50">
        {" "}
        <p
          className={`${space_g.className} text-zinc-400 font-extralight text-xs text-center pt-2`}>
          copyright © Aayman Khalid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
