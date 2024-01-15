import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { icons } from "./SkillsIcons";
export type Skills = { name: string; srcIcon?: string | StaticImport }[];

export type Technologies = { name: string; skills: Skills }[];

export const technologies: Technologies = [
  {
    name: "Core",
    skills: [
      { name: "HTML", srcIcon: icons.html },
      { name: "Javascript", srcIcon: icons.javascript },
      { name: "Typescript", srcIcon: icons.typescript },
      { name: "Git", srcIcon: icons.git },
      { name: "npm/yarn", srcIcon: icons.npm },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "ReactJs", srcIcon: icons.react },
      { name: "NextJs", srcIcon: icons.nextJs },
    ],
  },
  {
    name: "UI styling",
    skills: [
      { name: "Css", srcIcon: icons.css },
      { name: "Sass", srcIcon: icons.sass },
      { name: "Styled Components", srcIcon: icons.styledComponents },
      { name: "Tailwind Css", srcIcon: icons.tailwindCSS },
      { name: "Material-Ui", srcIcon: icons.materialUi },
      { name: "Framer Motion", srcIcon: icons.framerMotion },
      { name: "Figma", srcIcon: icons.figma },
    ],
  },
  {
    name: "Libraries",
    skills: [
      { name: "Redux", srcIcon: icons.redux },
      { name: "React Hook Form", srcIcon: icons.rtl },
      { name: "Firebase", srcIcon: icons.firebase },
      { name: "Axios", srcIcon: icons.axios },
      { name: "StoryBook", srcIcon: icons.storybook },
    ],
  },
  {
    name: "IDE",
    skills: [
      { name: "WebStorm", srcIcon: icons.webstrom },
      { name: "Visual Studio Code", srcIcon: icons.vsc },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", srcIcon: icons.jest },
      { name: "Vitest", srcIcon: icons.vitest },
      { name: "Cypress", srcIcon: icons.cypress },
    ],
  },
];
