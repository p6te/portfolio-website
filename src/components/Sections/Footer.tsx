import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center py-10 ">
      <div className="mb-4 flex gap-4">
        <span>github</span>
        <span>linkedin</span>
        <span>email</span>
      </div>
      <small className="font-extralight">
        &copy; Copyright 2024, Piotr Matlak
      </small>
    </footer>
  );
};

export default Footer;
