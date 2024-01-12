"use client";
import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import reactIcon from "@/assets/technologies/reactIcon.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";
import Image from "next/image";

type Skills = { name: string; srcIcon: string | StaticImport }[];

type Technologies = { name: string; skills: Skills }[];

const technologies: Technologies = [
  {
    name: "Core",
    skills: [
      { name: "HTML", srcIcon: reactIcon },
      { name: "Javascript", srcIcon: reactIcon },
      { name: "Typescript", srcIcon: reactIcon },
      { name: "Git", srcIcon: reactIcon },
      { name: "npm/yarn", srcIcon: reactIcon },
      { name: "Git", srcIcon: reactIcon },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "ReactJs", srcIcon: reactIcon },
      { name: "NextJs", srcIcon: reactIcon },
    ],
  },
  {
    name: "UI styling",
    skills: [
      { name: "Css", srcIcon: reactIcon },
      { name: "Sass", srcIcon: reactIcon },
      { name: "Styled Components", srcIcon: reactIcon },
      { name: "Tailwind Css", srcIcon: reactIcon },
      { name: "Material-Ui", srcIcon: reactIcon },
      { name: "Framer Motion", srcIcon: reactIcon },
      { name: "Figma", srcIcon: reactIcon },
    ],
  },
  {
    name: "Libraries",
    skills: [
      { name: "Redux", srcIcon: reactIcon },
      { name: "React Hook Form", srcIcon: reactIcon },
      { name: "Firebase", srcIcon: reactIcon },
      { name: "Axios", srcIcon: reactIcon },
      { name: "StoryBook", srcIcon: reactIcon },
    ],
  },
  {
    name: "IDE",
    skills: [
      { name: "WebStorm", srcIcon: reactIcon },
      { name: "Visual Studio Code", srcIcon: reactIcon },
    ],
  },
  {
    name: "Browser",
    skills: [{ name: "Chrome DevTools", srcIcon: reactIcon }],
  },
  {
    name: "API",
    skills: [{ name: "REST API", srcIcon: reactIcon }],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest/Vitest", srcIcon: reactIcon },
      { name: "Cypress", srcIcon: reactIcon },
    ],
  },
];

export default function Skills() {
  const [hoveredTechnology, setHoveredTechnology] = useState("Testing");

  return (
    <SectionLayout title="Tech stack" id="skills">
      <div className="relative mb-40 mt-10">
        <motion.ul className="flex flex-col items-center justify-center gap-2">
          {technologies.map((technology, index) => {
            return (
              <motion.li
                onHoverStart={() => setHoveredTechnology(technology.name)}
                onHoverEnd={() => setHoveredTechnology("")}
                key={index}
                className="flex w-min items-center justify-center gap-2 rounded-xl  px-4 py-2 "
              >
                {technology.skills.map((skill, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-center gap-2 rounded-xl   bg-white  px-8 py-2  backdrop-blur ${
                        technology.name === hoveredTechnology
                          ? " bg-opacity-40"
                          : "bg-opacity-20"
                      }`}
                      variants={{
                        initial: { background: "rgba(255, 255, 255, 0.2)" },
                        hover: { background: "rgba(255, 255, 255, 0.4)" },
                      }}
                      animate={
                        technology.name === hoveredTechnology
                          ? "hover"
                          : "initial"
                      }
                    >
                      <Image
                        src={skill.srcIcon}
                        alt={skill.name}
                        className="bg-slate-100"
                      />
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.div className="pointer-events-none absolute left-0 top-0 z-[-1] flex h-full w-full items-center justify-center whitespace-nowrap text-9xl font-semibold opacity-60 blur">
          {hoveredTechnology}
        </motion.div>
      </div>
    </SectionLayout>
  );
}
