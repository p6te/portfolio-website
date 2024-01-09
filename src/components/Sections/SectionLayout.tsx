import React from "react";
import FadeComponent from "../FadeComponent";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}
export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center  ">
      {title && (
        <FadeComponent className="text-8xl font-semibold bg-gradient-to-r from-gradient-1 via-gradient-2 via-gradient-3 to-gradient-4 text-transparent bg-clip-text ">
          {title}
        </FadeComponent>
      )}
      {children}
    </div>
  );
}
