// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aayman.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://aayman.vercel.app/About",
      lastModified: new Date(),
    },
    {
      url: "https://aayman.vercel.app/Projects",
      lastModified: new Date(),
    },
    {
      url: "https://aayman.vercel.app/Blog",
      lastModified: new Date(),
    },
  ];
}
