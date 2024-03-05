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
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
      className="flex-1 justify-center"
    >
      {href}
    </Link>
  );
}
