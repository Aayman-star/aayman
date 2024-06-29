import React from "react";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <Projects />
    </div>
  );
};

export default page;
