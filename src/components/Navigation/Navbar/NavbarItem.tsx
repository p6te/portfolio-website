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
      className="text-sm transition-all ease-in-out hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent lg:text-base"
    >
      {href}
    </Link>
  );
}
