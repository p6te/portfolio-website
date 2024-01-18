import React from "react";
import SectionLayout from "./SectionLayout";
import EmailForm from "../ContactForm";
import LottieAnimation from "../common/AnimationLottie";
import MessageLottie from "@/assets/lottie/message.json";

export default function Contact() {
  return (
    <SectionLayout title="Contact" id="test1">
      <div className="mb-8 mt-8 flex w-full items-center justify-center lg:mb-20 lg:mt-20">
        <div className="hidden lg:block lg:w-1/2">
          <LottieAnimation animationData={MessageLottie} />
        </div>
        <div className="w-full  lg:w-1/2">
          <EmailForm />
        </div>
      </div>
    </SectionLayout>
  );
}
