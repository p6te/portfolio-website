import React from "react";
import FadeComponent from "../FadeComponent";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="mb-10 flex flex-col items-center md:mb-28">
      {title && (
        <FadeComponent className="bg-gradient-primary bg-clip-text p-3 text-5xl font-semibold text-transparent md:text-8xl">
          {title}
        </FadeComponent>
      )}
      {children}
    </div>
  );
}
