import React from "react";
import FadeComponent from "../FadeComponent";

interface Props {
  text: string;
  author: string;
  position: string;
}
function Testimonial({ author, position, text }: Props) {
  return (
    <div>
      <p className="mb-6 text-justify font-extralight">{text}</p>
      <div className=" bg-gradient-primary  bg-clip-text text-lg font-semibold text-transparent">
        {author}
      </div>
      <div className="text-xl font-semibold ">{position}</div>
    </div>
  );
}

export default Testimonial;
