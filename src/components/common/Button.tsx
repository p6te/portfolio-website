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
          ? " mb-2 rounded-full px-5 py-2.5 text-center text-xl text-white outline outline-1 transition hover:bg-blur-1"
          : " mb-2rounded-full bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-xl  font-medium text-white transition hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}
