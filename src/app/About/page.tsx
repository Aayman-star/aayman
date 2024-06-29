import React from "react";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <About />
    </div>
  );
};

export default page;
