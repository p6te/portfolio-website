import React, { useState } from "react";
import { MotionConfig, motion, useAnimationControls } from "framer-motion";
import Button from "@/components/common/Button";
import Image, { StaticImageData } from "next/image";
import SkillTag from "./SkillTag";
import { Project } from "@/data/projects";
import { useBreakpoints } from "@/hooks/useMediaQueries";

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
  const { isSm, isMd, isLg } = useBreakpoints();
  return (
    <>
      {isLg ? (
        <motion.li
          className={`w-full overflow-hidden rounded-3xl bg-blur-1 px-6 pt-3 backdrop-blur md:px-10 md:py-8   ${
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
              className={`flex w-full  ${!isOpen && "h-[92px]"} gap-12`}
              animate={isOpen ? "open" : "initial"}
            >
              <motion.div className="flex-1 ">
                <motion.h2
                  variants={{
                    initial: { filter: "blur(4px)" },
                    hover: { filter: "none" },
                    open: { filter: "none" },
                  }}
                  animate={isOpen ? "open" : isHover ? "hover" : "initial"}
                  className={`my-4 text-4xl font-semibold  lg:text-6xl ${
                    !isOpen && "blur-sm"
                  }`}
                >
                  {title}
                </motion.h2>
                <motion.p className="my-12 font-extralight tracking-wide ">
                  {description}
                </motion.p>

                <ul className="flex flex-wrap items-center gap-3">
                  {tags.map((tag, index) => {
                    return <SkillTag key={index} name={tag} />;
                  })}
                </ul>

                <div className="mb-5 mt-8">
                  {preview && (
                    <>
                      <Button>
                        <a
                          target="_blank"
                          href={preview}
                          rel="noopener noreferrer"
                        >
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
                className={`mb-5 flex  flex-1  items-center justify-center rounded-2xl ${
                  !isOpen && "translate-y-[300px]"
                }`}
                variants={{
                  initial: { transform: "translateY(+400px)" },
                  hover: { transform: "translateY(+50px)" },
                  open: {
                    transform: "translateY(0)",
                  },
                }}
                animate={isOpen ? "open" : isHover ? "hover" : "initial"}
              >
                <Image src={imgSrc} alt={imgSrc.src} className=" rounded-2xl" />
              </motion.div>
            </motion.div>
          </MotionConfig>
        </motion.li>
      ) : (
        <div>
          <li
            className={`w-full overflow-hidden rounded-3xl bg-blur-1 px-6 pt-3 backdrop-blur md:px-8 md:pt-5   ${
              !isOpen && "hover:cursor-pointer"
            }`}
            onClick={onClick}
          >
            <motion.div layout className={`w-full  ${!isOpen && "h-[160px]"}`}>
              <h2 className={` text-5xl font-semibold md:text-7xl`}>{title}</h2>
              <div
                className={`my-5 flex  flex-1  items-center justify-center rounded-3xl `}
              >
                <Image src={imgSrc} alt={imgSrc.src} className=" rounded-3xl" />
              </div>
              {isOpen && (
                <div>
                  <p className="my-8 text-xs font-extralight  tracking-wide md:text-base ">
                    {description}
                  </p>

                  <ul className="flex flex-wrap items-center gap-2">
                    {tags.map((tag, index) => {
                      return <SkillTag key={index} name={tag} />;
                    })}
                  </ul>

                  <div className="mb-5 mt-8">
                    {preview && (
                      <>
                        <Button>
                          <a
                            target="_blank"
                            href={preview}
                            rel="noopener noreferrer"
                          >
                            Preview
                          </a>
                        </Button>
                        <span className="mx-2"></span>
                      </>
                    )}
                    <Button outline>
                      <a
                        target="_blank"
                        href={github}
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </li>
        </div>
      )}
    </>
  );
}
