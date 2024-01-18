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
          ? "rounded-full px-5 py-2.5 text-center text-sm text-white outline outline-1  transition hover:bg-blur-1 md:mb-2  md:text-xl "
          : "text-cen-sm ter rounded-full bg-gradient-to-br  from-pink-500 to-orange-400  px-5 py-2.5  text-sm  font-medium text-white transition hover:bg-gradient-to-bl  md:mb-2  md:text-xl "
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}
