import panaverse from "/public/image/panaverse.png";
import taskwise from "/public/image/taskwise-screenshot.png";
import portfolio from "/public/image/portfolio-dark.png";
import timetracker from "/public/image/timetracker-screenshot.png";
import pf from "/public/image/portfolio-screenshot.png";

export const projects = [
  {
    id: 1,
    Title: "The Time Tracker",
    details: "Timer & Stopwatch together with a memory!",
    img: timetracker,
    description:
      "Timer & Stopwatch components together giving you the freedom of choice.",
    Stack: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "shadcn ui",
      "clerk",
      "postgres",
    ],
    url: "https://thetimetracker.vercel.app/",
  },
  {
    id: 2,
    Title: "TaskWise",
    details: "Remix of a simple todo app",
    img: taskwise,
    description:
      "A simple Todo app with basic CRUD operations and an added feature of uncheching the checked tasks.Now reveamped with clerk auth.",
    Stack: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Shadcn ui",
      "clerk",
      "postgres",
    ],
    url: "https://task-wise-alpha.vercel.app/",
  },
  {
    id: 3,
    Title: "Panaverse Dao Website",
    details: "Panaverse Landing Page",
    img: panaverse,
    description: "Landing page for Panaverse Dao.",
    Stack: ["Nextjs", "Typescript", "Tailwindcss", "react-reveal"],
    url: "https://panaversetailwind-aayman-star.vercel.app/",
  },

  {
    id: 4,
    Title: "Simple",
    details: "A simple hassle free portfolio template",
    img: portfolio,
    description:
      "A portfolio/resume template to create your digital signature instantly!",
    url: "https://portfolio-template-v1.vercel.app/",
    Stack: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "shadcn ui",
      "framer-motion",
    ],
  },
  {
    id: 5,
    Title: "Personal Portfolio",
    details: "Personal Portfolio made with Nextjs",
    img: pf,
    description: "Personal Portfolio Project built with Nextjs",
    url: "https://aayman.vercel.app/",
    Stack: ["Nextjs", "Typescript", "Tailwindcss"],
  },
];

export const AboutMe = `I have a Bachelors in Computer Engineering.This is where I developed my love for coding and software.The fascinating part of programming for me is logic development,  a trait that forces one to slow down and focus on the real problems.
At present,my skillset comprises of fullstack development with Nextjs.
In the future I plan to use python for backend development because of it's diverse capabilites in the domains of API development,data science and now Generative AI models as well.
Future plans include expanding my skill-set to Generative AI so that I can create much cooler and useful apps for the people around me and myself.

`;
export const Skills = [
  "HTML",
  "CSS",
  "Nextjs",
  "Reactjs",
  "Typescript",
  "javascript",
  "Python",
  "Tailwindcss",
];
