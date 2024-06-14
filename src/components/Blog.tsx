"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { noto_kufi, space_g, megrim, monty } from "@/lib/fonts";
import { AboutMe, Skills } from "@/lib/Data";

const Blog = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen md:h-screen md:max-w-5xl md:mx-auto w-full flex-col  bg-zinc-900">
        <header className="h-14 w-full md:max-w-5xl bg-zinc-950/50 fixed backdrop-blur">
          <h1
            className={`${noto_kufi.className} text-4xl text-center py-2 text-zinc-300`}>
            <Link href={"/"}>
              <span className="text-teal-500/70">.</span>ایمن خالد
            </Link>
          </h1>
        </header>
        <main className="w-full md:max-w-5xl h-[90vh] flex-1 flex flex-col md:flex-row md:items-center md:justify-between  py-20 px-5 md:px-10 md:py-28">
          {/* This is the hero div for the image and the content  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className={`${monty.className} md:w-1/2`}>
            <h2 className="text-zinc-300 text-xl font-medium">
              Blog is under development
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className="w-full md:w-1/2">
            {/* Social Links  */}
          </motion.div>
        </main>

        <div className="w-full fixed backdrop-blur md:max-w-5xl h-10 bottom-16">
          <div className="w-[90%] h-full mx-auto  bg-zinc-950/40 rounded-full border-[1px] border-zinc-900/50">
            <div
              className={` ${megrim.className} w-[90%] h-full flex items-center mx-auto justify-between md:justify-around`}>
              <p className="md:p-4  text-teal-500 font-bold ">
                <Link href={"/"}>Home</Link>
              </p>
              <p className="md:p-4  text-teal-500 font-bold ">
                <Link href={"/About"}>About</Link>
              </p>
              <p className="md:p-4  text-teal-500 font-bold">
                {" "}
                <Link href={"/Projects"}>Projects</Link>
              </p>
              <p className="md:p-4  text-teal-500 font-bold">
                <Link href={"/Blog"}>Blog</Link>
              </p>
            </div>
          </div>
        </div>

        <footer className="h-[5vh] w-full md:max-w-5xl md:mx-auto border-t-[1px] border-slate-500/50">
          {" "}
          <p
            className={`${space_g.className} text-zinc-400 font-extralight text-xs text-center pt-1`}>
            copyright © Aayman Khalid
          </p>
        </footer>
      </div>
    </>
  );
};

export default Blog;
