"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import project1 from "@/assets/projects/project1.png";
import FadeComponent from "../FadeComponent";

const projects = [
  {
    name: "project1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt ducimus reprehenderit amet expedita delectus illum consequuntur. Dignissimos, iure recusandae?",
    tags: ["tag1", "tag2", "tag3", "tag"],
    imgSrc: project1,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
  {
    name: "project1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt ducimus reprehenderit amet expedita delectus illum consequuntur. Dignissimos, iure recusandae?",
    tags: ["tag1", "tag2", "tag3", "tag"],
    imgSrc: project1,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
  {
    name: "project1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt ducimus reprehenderit amet expedita delectus illum consequuntur. Dignissimos, iure recusandae?",
    tags: ["tag1", "tag2", "tag3", "tag"],
    imgSrc: project1,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
  {
    name: "project1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt ducimus reprehenderit amet expedita delectus illum consequuntur. Dignissimos, iure recusandae?",
    tags: ["tag1", "tag2", "tag3", "tag"],
    imgSrc: project1,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
  {
    name: "project1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt ducimus reprehenderit amet expedita delectus illum consequuntur. Dignissimos, iure recusandae?",
    tags: ["tag1", "tag2", "tag3", "tag"],
    imgSrc: project1,
    github: "https://github.com/p6te/Chat-app",
    preview: "https://wall-chat-69c60.web.app/",
  },
];

function ProjectsList() {
  const [openedProjectIndex, setOpenedProjectIndex] = useState(0);

  return (
    <ul className="mt-20 flex w-full flex-col gap-8 px-20">
      {projects.map((project, index) => (
        <FadeComponent key={index} direction="left" delay={300} triggerOnce>
          <ProjectItem
            title={project.name}
            imgSrc={project.imgSrc}
            isOpen={openedProjectIndex === index}
            onClick={() => setOpenedProjectIndex(index)}
          />
        </FadeComponent>
      ))}
    </ul>
  );
}

export default ProjectsList;
