import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Aayman Khalid",
  metadataBase: new URL("https://aayman.vercel.app/"),
  title: { default: "Aayman Khalid", template: "%s  |  Aayman Khalid" },
  keywords: [
    "aayman",
    "Aayman",
    "Aayman Khalid",
    "aayman khalid",
    "Software Engineer",
    "Software Developer",
    "Nextjs Developer",
  ],
  description: "Software Engineer and Developer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
