"use client";
import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/data/skills";

export default function Skills() {
  const [hoveredTechnology, setHoveredTechnology] = useState("Testing");

  return (
    <SectionLayout title="Tech stack" id="skills">
      <div className="relative  mt-2 md:mt-10">
        <motion.ul className="flex flex-col items-center justify-center gap-2">
          {technologies.map((technology, index) => {
            return (
              <motion.li
                onHoverStart={() => setHoveredTechnology(technology.name)}
                onHoverEnd={() => setHoveredTechnology("")}
                key={index}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="block font-extralight lg:hidden">
                    {technology.name}
                  </div>
                  <div className="flex  flex-wrap items-center justify-center  gap-2 rounded-xl px-4 py-2">
                    {technology.skills.map((skill, index) => {
                      return (
                        <motion.div
                          key={index}
                          className={`flex items-center justify-center gap-2 rounded-xl   bg-white  px-4 py-1 backdrop-blur lg:px-8 lg:py-2 ${
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
                          {skill.srcIcon && (
                            <Image
                              src={skill.srcIcon}
                              alt={skill.name}
                              height={32}
                            />
                          )}
                          <span className="whitespace-nowrap">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.div className="pointer-events-none absolute left-0 top-0 z-[-1] hidden h-full  w-full items-center justify-center whitespace-nowrap text-[200px] font-semibold opacity-20 blur-sm lg:flex">
          {hoveredTechnology}
        </motion.div>
      </div>
    </SectionLayout>
  );
}
