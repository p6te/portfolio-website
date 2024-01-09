import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

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
      className="hover:bg-gradient-to-r from-gradient-1 via-gradient-2 via-gradient-3 to-gradient-4 hover:text-transparent hover:bg-clip-text transition-all ease-in-out"
    >
      {href}
    </Link>
  );
}
