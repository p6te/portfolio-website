import React from "react";
import SectionLayout from "./SectionLayout";
import Testimonial from "../Testimonial";

const testimonials = [
  {
    text: `Piotr is the best example of person who strives to self-development. We has been working together on two projects and during that time Piotr has grown extremely! He started as trainee but grasped the processes really fast. His hard skills became better and better with each task and in few months he was promoted to junior level and has not stopped improving them. In addition to this he has excellent soft skills (always brought fresh ideas how we can improve different things in SDLC).
  Piotr is always open for new technologies and able to get used to them extremely quickly!
  I can definitely recommend Piotr! He is great addition to every team! I enjoyed working with him!`,
    author: "Illia Malashchuk",
    position: "Front-End Tech Leader",
  },
  {
    text: "During our cooperation, Piotr has shown excellent results at work. Desire to grow and develop his technical skills. He always tries to do his work on time and according to priorities with high quality. Piotr is an easy-going person, ready to support colleagues and collaborate; it was a pleasure to work together!",
    author: "Anna Makarova",
    position: "Project Manager",
  },

  {
    text: `Piotr started his career as Frontend Engineer in our team and has evolved significantly. He developed his skills in working with a wide range of technologies and libraries: React, Typescript, Redux, Redux Saga, Jest, Cypress, Nx etc. He had the opportunity to participate in two interesting projects and follow the best coding practices and progressive technologies. He is always looking for different ways of problem solving and optimisation. His biggest strength is that he is always ready for new challenges and approaches. Piotr shows a desire for further learning and development. He is a good team member with excellent soft skills. It was a pleasure working with you, Piotr Matlak.`,
    author: "Oleksandra Tkachuk",
    position: "Web Developer",
  },
];
export default function Testimonials() {
  return (
    <SectionLayout title="Testimonials">
      <div className="mb-40 mt-20 flex gap-4">
        {testimonials.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </div>
    </SectionLayout>
  );
}
