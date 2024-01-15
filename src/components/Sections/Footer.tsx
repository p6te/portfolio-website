import React from "react";
import EmailIcon from "@/assets/icons/email.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import GithubIcon from "@/assets/icons/github.png";
import ContactButton from "../ContactButton";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center pb-10 ">
      <div className="mb-4 flex gap-6">
        <ContactButton
          href="mailto: piotr.matlak.contact@gmail.com "
          src={EmailIcon}
          isMail
        />
        <ContactButton
          href="https://www.linkedin.com/in/piotr-matlak/"
          src={LinkedInIcon}
          isMail
        />
        <ContactButton href="https://github.com/p6te" src={GithubIcon} isMail />
      </div>
      <small className="font-extralight">
        &copy; Copyright 2024, Piotr Matlak
      </small>
    </footer>
  );
};

export default Footer;
