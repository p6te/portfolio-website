import React from "react";
import FadeComponent from "../FadeComponent";

interface Props {
  text: string;
  author: string;
  position: string;
}
function Testimonial({ author, position, text }: Props) {
  return (
    <div className="h-min flex-1 flex-col justify-center gap-4 rounded-3xl  border-gradient   bg-white  bg-opacity-10 px-8 py-6 backdrop-blur">
      <p className="mb-6 font-extralight">{text}</p>
      <div className=" bg-gradient-primary  bg-clip-text text-xl font-semibold text-transparent">
        {author}
      </div>
      <div className="text-xl font-semibold ">{position}</div>
    </div>
  );
}

export default Testimonial;
