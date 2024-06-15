"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { noto_kufi, space_g, megrim, monty } from "@/lib/fonts";
import { AboutMe, Skills } from "@/lib/Data";

const About = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen md:h-screen md:max-w-5xl md:mx-auto w-full flex-col  bg-zinc-900">
        {/* <header className="h-14 w-full md:max-w-5xl bg-zinc-950/50 fixed backdrop-blur">
          <h1
            className={`${noto_kufi.className} text-4xl text-center py-2 text-zinc-300`}>
            <Link href={"/"}>
              <span className="text-teal-500/70">.</span>ایمن خالد
            </Link>
          </h1>
        </header> */}
        <main className="w-full lg:max-w-5xl h-[90vh] flex-1 flex flex-col md:flex-row md:items-center md:justify-between  py-20 px-5 md:px-10 md:py-28">
          {/* This is the hero div for the image and the content  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className={`${monty.className} md:w-1/2`}>
            <h2 className="text-[2rem] font-medium text-zinc-300 underline decoration-teal-500 decoration-4 md:px-4 mb-4">
              About Me
            </h2>
            <p className={`  text-zinc-300 text-justify font-light md:px-4`}>
              {AboutMe}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className="w-full md:w-1/2">
            <h2
              className={`${monty.className} text-zinc-300 underline decoration-teal-500 decoration-4 text-[2rem] font-medium my-4 md:my-0 md:mb-4 md:px-4`}>
              My Skills
            </h2>
            <div
              className={`${space_g.className} w-full h-auto flex flex-wrap`}>
              {Skills.map((skill, i) => (
                <p
                  className="font-medium text-xl text-zinc-300 bg-zinc-950/50 p-2 my-2 mr-3  md:p-3 md:m-3 rounded-lg border-[1px] border-teal-500/50 shadow-md"
                  key={i}>
                  {skill.toUpperCase()}
                </p>
              ))}
            </div>
            {/* Social Links  */}
          </motion.div>
        </main>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};

export default About;
