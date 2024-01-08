import React from "react";

interface Props {
  outline?: boolean;
  children?: React.ReactNode;
  otherProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}
export default function Button({ outline, children, otherProps }: Props) {
  return (
    <button
      type="button"
      className={
        outline
          ? "text-white outline outline-1 rounded-full text-m px-5 py-2.5 text-center me-2 mb-2 hover:bg-blur-1 transition"
          : "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  rounded-full text-m px-5 py-2.5 text-center me-2 mb-2 transition"
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}
