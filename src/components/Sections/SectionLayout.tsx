import React from "react";
import FadeComponent from "../FadeComponent";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="mb-28 flex flex-col items-center">
      {title && (
        <FadeComponent className="bg-gradient-primary bg-clip-text p-3 text-8xl font-semibold text-transparent">
          {title}
        </FadeComponent>
      )}
      {children}
    </div>
  );
}
