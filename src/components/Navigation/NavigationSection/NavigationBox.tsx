import FadeComponent from "@/components/FadeComponent";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href: string;
  setSelectedBox: Dispatch<SetStateAction<string>>;
}

export default function NavigationBox({ href, setSelectedBox }: Props) {
  const handleHover = () => {
    setSelectedBox(href);
  };

  const handleMouseOut = () => {
    setSelectedBox("");
  };
  return (
    <Link
      className="flex h-72 justify-center rounded-3xl bg-gradient-to-b from-blur-1 to-transparent pt-3 backdrop-blur"
      href={`#${href}`}
      scroll
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      {href}
    </Link>
  );
}
