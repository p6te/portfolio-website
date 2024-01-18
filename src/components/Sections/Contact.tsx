import React from "react";
import SectionLayout from "./SectionLayout";
import EmailForm from "../ContactForm";
import LottieAnimation from "../common/AnimationLottie";
import MessageLottie from "@/assets/lottie/message.json";
import FadeComponent from "../FadeComponent";

export default function Contact() {
  return (
    <SectionLayout title="Contact" id="test1">
      <FadeComponent triggerOnce direction="up" className="w-full">
        <div className="mb-8 mt-1 flex w-full items-center justify-center md:mt-12 lg:mb-20 ">
          <div className="hidden lg:block lg:w-1/2">
            <LottieAnimation animationData={MessageLottie} />
          </div>
          <div className="w-full  lg:w-1/2">
            <EmailForm />
          </div>
        </div>
      </FadeComponent>
    </SectionLayout>
  );
}
