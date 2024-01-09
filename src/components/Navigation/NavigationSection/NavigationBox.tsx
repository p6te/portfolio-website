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
      href={`#${href}`}
      scroll
      className="w-1/6 h-72 bg-gradient-to-b from-blur-1 to-transparent rounded-3xl flex justify-center pt-3 backdrop-blur "
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      {href}
    </Link>
  );
}
