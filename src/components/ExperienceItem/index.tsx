import React from "react";
import FadeComponent from "../FadeComponent";

interface Props {
  time: string;
  company: string;
  position: string;
  description: string;
  enviroment: string[];
  technologies: string[];
  isRightSide?: boolean;
}
function ExperienceItem({
  company,
  description,
  enviroment,
  position,
  technologies,
  time,
  isRightSide,
}: Props) {
  return (
    <FadeComponent
      direction={isRightSide ? "right" : "left"}
      delay={300}
      triggerOnce
    >
      <div
        className={`flex flex-col    gap-2    rounded-3xl from-blur-1 to-transparent px-8 py-10 backdrop-blur ${
          isRightSide ? " bg-gradient-to-r" : " bg-gradient-to-l"
        }`}
      >
        <h3 className="text-2xl">{time}</h3>
        <h4 className="text-xl">{company}</h4>
        <h2 className="mt-3 bg-gradient-primary  bg-clip-text text-5xl font-semibold text-transparent">
          {position}
        </h2>

        <p className="font-extralight">{description}</p>
        <h6 className="mt-3 font-semibold">Environment</h6>
        <div>
          {enviroment.map((item, index) =>
            index === 0 ? (
              <span className="font-extralight" key={index}>
                {item}
              </span>
            ) : (
              <span
                className="font-extralight"
                key={index}
              >{` - ${item}`}</span>
            ),
          )}
        </div>
        <h6 className="mt-3 font-semibold">Technologies</h6>
        <div>
          {technologies.map((item, index) =>
            index === 0 ? (
              <span className="font-extralight" key={index}>
                {item}
              </span>
            ) : (
              <span
                className="font-extralight"
                key={index}
              >{` - ${item}`}</span>
            ),
          )}
        </div>
      </div>
    </FadeComponent>
  );
}

export default ExperienceItem;
