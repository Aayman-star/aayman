"use client";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import ProfilePic from "/public/image/ProfilePicture-4.jpeg";
import { noto_kufi, space_g, megrim, monty } from "@/lib/fonts";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen md:h-screen  md:max-w-5xl md:mx-auto w-full flex-col   bg-zinc-900">
        <header className="h-14 w-full md:max-w-5xl bg-zinc-950/50 fixed backdrop-blur">
          <h1
            className={`${noto_kufi.className} text-4xl text-center py-2 text-zinc-300`}>
            <Link href={"/"}>
              <span className="text-teal-500/70">.</span>ایمن خالد
            </Link>
          </h1>
        </header>
        <main className="w-full h-[90vh]  md:max-w-5xl   flex-1 flex flex-col md:flex-row md:items-center md:justify-between  py-20 px-10 md:py-28">
          {/* This is the hero div for the image and the content  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className=" ">
            <Image
              className="rounded-full mx-auto md:hidden"
              width={250}
              height={250}
              src={ProfilePic}
              alt="hero-image"
            />
            <Image
              className="rounded-full  hidden md:block"
              width={325}
              height={325}
              src={ProfilePic}
              alt="hero-image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className="w-full max-h-full md:w-1/2">
            <p
              className={`${space_g.className} text-zinc-300 text-sm font-light md:px-4`}>
              Hello, I am
            </p>
            <h1
              className={`${monty.className} text-[2.5rem] md:text-[3.25rem] font-semibold italic text-teal-600  md:px-4`}>
              Aayman Khalid
            </h1>
            <div className="flex items-center gap-x-1 px-4">
              <hr className="w-1/3 text-zinc-300" />
              <p
                className={`${megrim.className} text-zinc-200 text-lg tex-center`}>
                & I am a
              </p>
              <hr className="w-1/3 text-zinc-300" />
            </div>

            <div className=""></div>
            <h4
              className={`${space_g.className} text-[1.75rem] md:text-[2rem] font-semibold text-zinc-300 md:px-4`}>
              Software Engineer
            </h4>
            <p
              className={`${monty.className} my-4  text-justify text-zinc-200 font-extralight md:px-4`}>
              Someone who loves to play with code to develop useful and fun
              applications. Currently working with full-stack web development
              using{" "}
              <span className="font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                Nextjs
              </span>
              ,
              <span className="font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                Typescript
              </span>{" "}
              and{" "}
              <span className="font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text">
                tailwindcss
              </span>
              . Aspiring to be a cloud native applied generative AI engineer
              capable of developing gen-ai apps on the cloud.
            </p>

            {/* Social Links  */}
            <div className="flex items-center  md:my-10  md:px-2  w-3/4 ">
              <div className="border-[1px] border-zinc-500 p-2 rounded-lg mx-2">
                <a
                  href="https://github.com/Aayman-star"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="text-zinc-400 text-xl " />
                </a>
              </div>
              <div className="border-[1px] border-zinc-500 p-2 rounded-lg mx-2">
                <a href="#">
                  <FaXTwitter className="text-zinc-400 text-xl" />
                </a>
              </div>
              <div className="border-[1px] border-zinc-500 p-2 rounded-lg mx-2">
                <a
                  href="https://www.linkedin.com/in/aayman-khalid/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin className="text-zinc-400 text-xl" />
                </a>
              </div>

              <div className="border-[1px] border-zinc-500 p-2 rounded-lg mx-2">
                <a
                  href="mailto:emailto:aayman.khalid1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <MdEmail className="text-zinc-400 text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </main>

        <div className="w-full fixed backdrop-blur md:max-w-5xl h-10 bottom-16">
          <div className="w-[90%] h-full mx-auto  bg-zinc-950/40 rounded-full border-[1px] border-zinc-900/50">
            <div
              className={` ${megrim.className} w-[90%] h-full flex items-center mx-auto justify-between md:justify-around`}>
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

        <footer className="h-[5vh] w-full md:max-w-5xl md:mx-auto border-t-[1px] border-slate-500/50">
          <p
            className={`${space_g.className} text-zinc-400 font-extralight text-xs text-center pt-1`}>
            copyright © Aayman Khalid
          </p>
        </footer>
      </div>
    </>
  );
};

export default Hero;
