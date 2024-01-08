"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  animationData: object | string;
  height?: string;
  width?: string;
  props?: React.Component<React.HTMLAttributes<HTMLDivElement>>;
}

const LottieAnimation = ({
  animationData,
  height = "300px",
  width = "300px",
  ...props
}: Props) => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: height, width: width }}
      {...props}
    />
  );
};

export default LottieAnimation;
