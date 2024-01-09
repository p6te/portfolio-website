"use client";

import { Fade, FadeProps } from "react-awesome-reveal";

interface Props extends FadeProps {
  children: React.ReactNode;
}

export default function FadeComponent({ children, ...props }: Props) {
  return <Fade {...props}>{children}</Fade>;
}
