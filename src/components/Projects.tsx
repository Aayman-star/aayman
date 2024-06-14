"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { noto_kufi, space_g, megrim, monty } from "@/lib/fonts";
import { AboutMe, Skills, projects } from "@/lib/Data";

const Projects = () => {
  const [id, setId] = useState(0);
  const ProjectDetails = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
        className={`${monty.className} w-full h-auto py-4 md:py-0 md:w-[30rem] md:h-[30rem] bg-zinc-950/50 rounded-lg shadow-sm border-[1px] border-zinc-800/50  md:m-10 grid place-content-center gap-y-2`}>
        <h3
          className={`${space_g.className} text-zinc-300 text-2xl  font-semibold text-center m-2`}>
          {projects[id].details}
        </h3>
        <a href={projects[id].url} target="_blank">
          <Image
            className="mx-auto rounded-sm transition ease-in delay-150 hover:scale-105"
            src={projects[id].img}
            width={300}
            height={250}
            alt="project-snapshot"
          />
        </a>{" "}
        <p className="text-zinc-300 text-sm w-[300px] mx-auto">
          {projects[id].description}
        </p>
        <div className="w-[300px] mx-auto">
          {" "}
          <p className="text-zinc-300 font-semibold">Stack</p>
        </div>
        <div className="w-[300px] mx-auto">
          <ul className="list-disc ml-6 ">
            {projects[id].Stack?.map((item, i) => (
              <li className="font-extralight text-xs text-zinc-300" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };
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
        <main className="w-full md:max-w-5xl h-[90vh] flex-1 flex flex-col-reverse items-center md:flex-row md:items-center md:justify-around  py-20 px-5 md:px-10 md:py-28">
          {/* This is the hero div for the image and the content  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className={`${monty.className} w-full md:w-1/3`}>
            {projects.map((project, i) => (
              <button key={i} onClick={() => setId(i)}>
                <p
                  className={`${monty.className}  text-teal-500 bg-zinc-950/50 m-2 md:m-4 text-center w-[20rem] h-[3.5rem] py-4 font-semibold rounded-md border-[1px] border-zinc-800/50`}>
                  {project.Title}
                </p>
              </button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
            className="w-full md:w-1/2">
            {/* Social Links  */}
            <ProjectDetails />
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

export default Projects;
