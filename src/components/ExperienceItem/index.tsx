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
        className={`flex flex-col  gap-1  rounded-3xl    from-blur-1 to-transparent px-4 py-5 backdrop-blur md:gap-2 md:px-8 md:py-10 ${
          isRightSide ? " bg-gradient-to-r" : " bg-gradient-to-l"
        }`}
      >
        <h3 className="text-xl md:text-2xl">{time}</h3>
        <h4 className="text-l md:text-xl">{company}</h4>
        <h2 className="mt-2 bg-gradient-primary bg-clip-text  text-2xl font-semibold text-transparent md:mt-3 md:text-5xl">
          {position}
        </h2>

        <p className="font-extralight">{description}</p>
        <h6 className="mt-2 font-semibold md:mt-3">Environment</h6>
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
        <h6 className="mt-2 font-semibold md:mt-3">Technologies</h6>
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
