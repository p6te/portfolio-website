"use client";
import React, { useState } from "react";
import FadeComponent from "../FadeComponent";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";

function ProjectsList() {
  const [openedProjectIndex, setOpenedProjectIndex] = useState(0);

  return (
    <ul className="mt-1 flex w-full flex-col gap-4 md:mt-12 md:gap-8">
      {projects.map((project, index) => (
        <FadeComponent key={index} direction="left" delay={300} triggerOnce>
          <ProjectItem
            isOpen={openedProjectIndex === index}
            onClick={() => setOpenedProjectIndex(index)}
            {...project}
          />
        </FadeComponent>
      ))}
    </ul>
  );
}

export default ProjectsList;
