import React from "react";
import Button from "../common/Button";
import Astronaut from "../../assets/lottie/astronaut.json";
import LottieAnimation from "../common/AnimationLottie";
import FadeComponent from "../FadeComponent";

export default function Hero() {
  return (
    <div className="flex justify-center px-40  pt-20">
      <div className="flex flex-col gap-20">
        <FadeComponent>
          <div>
            <h1 className=" bg-gradient-primary bg-clip-text text-8xl font-semibold text-transparent ">
              Hello, I am Peter,
            </h1>
            <h1 className="bg-gradient-to-b from-white to-transparent bg-clip-text text-8xl font-semibold text-transparent ">
              creative web developer
            </h1>
          </div>
        </FadeComponent>
        <h5 className="w-2/3  font-extralight tracking-wide">
          Web Developer with a strong design background. I am a quick learner,
          highly motivated to grow both as a web developer and as an individual.
          I have worked extensively with financial, web3, and crypto
          technologies.
        </h5>
        <div>
          <Button>Contact me</Button>
          <span className="mx-2"></span>
          <Button outline>View all my works</Button>
        </div>
      </div>
      <div className="relative w-1/3">
        <div className="relative z-[-1] flex place-items-center  contrast-200 grayscale filter after:absolute after:bottom-5 after:left-7 after:-z-20 after:h-[300px] after:w-[400px] after:bg-gradient-radial after:from-sky-200 after:via-blue-200 after:blur-3xl  after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-20 ">
          <LottieAnimation
            animationData={Astronaut}
            width="500px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}
