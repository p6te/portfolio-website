import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outline?: boolean;
  children?: React.ReactNode;
}
export default function Button({ outline, children, ...otherProps }: Props) {
  return (
    <button
      type="button"
      className={
        outline
          ? "mb-1 rounded-full px-3 py-1.5 text-center text-sm  text-white outline outline-1  transition hover:bg-blur-1 md:mb-2 md:px-5 md:py-2.5 md:text-xl "
          : " mb-1 rounded-full bg-gradient-to-br from-pink-500  to-orange-400 px-3 py-1.5 text-center text-sm  font-medium text-white transition hover:bg-gradient-to-bl  md:mb-2 md:px-5 md:py-2.5 md:text-xl "
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}
