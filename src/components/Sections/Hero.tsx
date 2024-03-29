import React from "react";
import Button from "../common/Button";
import Astronaut from "../../assets/lottie/astronaut.json";
import LottieAnimation from "../common/AnimationLottie";
import FadeComponent from "../FadeComponent";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center pt-10 md:pt-20">
      <div className="flex flex-col gap-14">
        <FadeComponent triggerOnce direction="left">
          <div>
            <h1 className=" bg-gradient-primary bg-clip-text text-5xl  font-semibold text-transparent md:text-8xl ">
              Hello, I&apos;m Peter.
            </h1>
            <h1 className="bg-gradient-to-b from-white to-transparent bg-clip-text text-5xl font-semibold text-transparent md:text-8xl ">
              Creative web developer
            </h1>
          </div>
        </FadeComponent>
        <FadeComponent
          triggerOnce
          delay={200}
          direction="left"
          className="md:w-2/3"
        >
          <h5 className="text-xs font-extralight tracking-wide md:text-base ">
            Welcome to my digital space! I&apos;m Web Developer on a journey to
            create impactful and immersive online experiences. Armed with a love
            for coding and a keen eye for design, I transform ideas into dynamic
            and user-friendly websites. Join me on this exciting coding
            adventure, where innovation meets functionality, and let&apos;s
            build the web of tomorrow together!
          </h5>
        </FadeComponent>
        <FadeComponent triggerOnce delay={500} direction="left">
          <div className="flex flex-wrap gap-3">
            <Link href={"#Contact"} scroll>
              <Button>Contact me</Button>
            </Link>

            <Link href={"#Projects"} scroll>
              <Button outline>View all my works</Button>
            </Link>
          </div>
        </FadeComponent>
      </div>
      <FadeComponent triggerOnce direction="right">
        <div className="relative hidden w-1/3 xl:block">
          <div className="relative z-[-1] flex place-items-center  contrast-200 grayscale filter after:absolute after:bottom-5 after:left-7 after:-z-20 after:h-[300px] after:w-[400px] after:bg-gradient-radial after:from-sky-200 after:via-blue-200 after:blur-3xl  after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff]  after:dark:opacity-20 ">
            <LottieAnimation
              animationData={Astronaut}
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </FadeComponent>
    </div>
  );
}
