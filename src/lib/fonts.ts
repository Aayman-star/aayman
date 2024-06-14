import {
  Noto_Kufi_Arabic,
  Space_Grotesk,
  Poppins,
  Megrim,
  Montserrat,
} from "next/font/google";

export const noto_kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const space_g = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const megrim = Megrim({
  subsets: ["latin"],
  weight: "400",
});
export const monty = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
