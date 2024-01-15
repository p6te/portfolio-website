import React from "react";
import SectionLayout from "./SectionLayout";
import EmailForm from "../ContactForm";
import LottieAnimation from "../common/AnimationLottie";
import MessageLottie from "@/assets/lottie/message.json";

export default function Contact() {
  return (
    <SectionLayout title="Contact" id="test1">
      <div className="mb-20 mt-20 flex w-full items-center justify-center">
        <div className="w-1/2">
          <LottieAnimation animationData={MessageLottie} />
        </div>
        <div className="w-1/2">
          <EmailForm />
        </div>
      </div>
    </SectionLayout>
  );
}
