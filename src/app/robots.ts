import { userAgent } from "next/server";

const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
  };
};
export default robots;
