import Link from "next/link";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href: string;
}

export default function NavbarItem({ href }: Props) {
  return (
    <Link
      href={`#${href}`}
      scroll
      className="hover:bg-gradient-primary hover:text-transparent hover:bg-clip-text transition-all ease-in-out"
    >
      {href}
    </Link>
  );
}
