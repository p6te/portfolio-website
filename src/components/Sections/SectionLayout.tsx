import React from "react";
import FadeComponent from "../FadeComponent";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center">
      {title && (
        <FadeComponent className="text-8xl font-semibold bg-gradient-primary text-transparent bg-clip-text ">
          {title}
        </FadeComponent>
      )}
      {children}
    </div>
  );
}
