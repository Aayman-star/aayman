import React from "react";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <Blog />
    </div>
  );
};

export default page;
