import React, { useState } from "react";
import { MotionConfig, motion, useAnimationControls } from "framer-motion";
import Button from "@/components/common/Button";
import Image, { StaticImageData } from "next/image";
import SkillTag from "./SkillTag";
import { Project } from "@/data/projects";

interface Props extends Project {
  title: string;
  imgSrc: StaticImageData;
  onClick: () => void;
  isOpen: boolean;
}
export default function ProjectItem({
  imgSrc,
  isOpen,
  onClick,
  description,
  github,
  preview,
  tags,
  title,
}: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.li
      className={`w-full overflow-hidden rounded-3xl bg-blur-1 px-8 pt-5 backdrop-blur   ${
        !isOpen && "hover:cursor-pointer"
      }`}
      onClick={onClick}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          type: "linear",
        }}
      >
        <motion.div
          layout
          variants={{
            initial: { height: "92px" },
            hover: {},
            open: {
              height: "auto",
              filter: "none",
            },
          }}
          className={`flex w-full  ${!isOpen && "h-[112px]"}`}
          animate={isOpen ? "open" : "initial"}
        >
          <motion.div className="flex-1 pr-4">
            <motion.h2
              variants={{
                initial: { filter: "blur(4px)" },
                hover: { filter: "none" },
                open: { filter: "none" },
              }}
              animate={isOpen ? "open" : isHover ? "hover" : "initial"}
              className={`text-7xl font-semibold   ${!isOpen && "blur-sm"}`}
            >
              {title}
            </motion.h2>
            <motion.p className="my-8 font-extralight tracking-wide ">
              {description}
            </motion.p>

            <ul className="flex flex-wrap items-center gap-2">
              {tags.map((tag, index) => {
                return <SkillTag key={index} name={tag} />;
              })}
            </ul>

            <div className="mb-5 mt-8">
              {preview && (
                <>
                  <Button>
                    <a target="_blank" href={preview} rel="noopener noreferrer">
                      Preview
                    </a>
                  </Button>
                  <span className="mx-2"></span>
                </>
              )}
              <Button outline>
                <a target="_blank" href={github} rel="noopener noreferrer">
                  Github
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={`mb-5 flex  flex-1  items-center justify-center rounded-3xl ${
              !isOpen && "translate-y-[300px]"
            }`}
            variants={{
              initial: { transform: "translateY(+300px)" },
              hover: { transform: "translateY(+50px)" },
              open: {
                transform: "translateY(0)",
              },
            }}
            animate={isOpen ? "open" : isHover ? "hover" : "initial"}
          >
            <Image src={imgSrc} alt={imgSrc.src} className=" rounded-3xl" />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </motion.li>
  );
}
