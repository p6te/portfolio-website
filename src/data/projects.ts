import { StaticImageData } from "next/image";
import chat from "./projects/chat-app.png";
import budgetApp from "./projects/budget-app.png";
import githubImg from "./projects/github.png";
import game2048 from "./projects/2048.png";
import notesApp from "./projects/notes.png";
import portfolioWebsite from "./projects/portfolio.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imgSrc: StaticImageData;
  github: string;
  preview: string;
};

export const projects: Project[] = [
  {
    title: "Chat app",
    description:
      "Web application that allows you to chat with your friends! Customizable and responsive interface can be change to fits everyone needs. Support of firebase authentication make sure that your message is safe and private!",
    tags: [
      "ReactJs",
      "TypeScript",
      "Redux",
      "Styled-Components",
      "Firebase",
      "Emoji",
      "Vite",
      "Figma",
    ],
    imgSrc: chat,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio, a dynamic showcase of my journey as a frontend web developer, crafted with precision using Next.js. Experience seamless navigation and captivating design as you explore my projects, skillset, and passion for creating immersive web experiences. Welcome to a glimpse of my world in the realm of frontend development!",
    tags: [
      "NextJs",
      "Typescript",
      "Tailwind CSS",
      "Framer-Motion",
      "Resend",
      "Zod",
      "Sonner",
    ],
    imgSrc: portfolioWebsite,
    github: "https://github.com/p6te/portfolio-website",
    preview: "https://www.peter-dev.site/",
  },
  {
    title: "Budget app",
    description:
      "Welcome to my budget management app, meticulously developed with React.js and enhanced with the sleek styling of Bootstrap. Take control of your finances with this user-friendly application, offering an intuitive interface for tracking expenses, setting budgets, and achieving financial goals.",
    tags: ["ReactJs", "Javascript", "Bootstrap"],
    imgSrc: budgetApp,
    github: "https://github.com/p6te/budget-app",
    preview: "https://p6te.github.io/budget-app/",
  },
  {
    title: "2048 Game",
    description:
      "The famous game 2048, the recreation of which was one of my first projects, is created in pure JavaScript. Check out the app yourself and try to get as many points as possible! Instructions: Use the arrows to move the tiles.",
    tags: ["Javascript", "CSS", "HTML"],
    imgSrc: game2048,
    github: "https://github.com/p6te/2048---game",
    preview: "https://p6te.github.io/2048---game/",
  },
  {
    title: "Note app",
    description:
      "A super useful app designed to take notes. It supports adding tags so you can filter all your notes. Easy editing of added content makes the application very easy to use. Try testing it now and add some of your notes, which will be saved locally on your computer.",
    tags: ["ReactJs", "Bootstrap", "React-Router", "Typescript"],
    imgSrc: notesApp,
    github: "https://github.com/p6te/Note-app",
    preview: "https://p6te.github.io/Note-app/",
  },
  {
    title: "More projects",
    description:
      "Check out my github account to discover more interesting projects!",
    tags: [],
    imgSrc: githubImg,
    github: "https://github.com/p6te/",
    preview: "",
  },
];
