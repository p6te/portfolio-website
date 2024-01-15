"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  src: string | StaticImport;
  href: string;
  isMail?: boolean;
}
const ContactButton = ({ href, src, isMail }: Props) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
      }}
    >
      <Link
        href={href}
        rel={isMail ? "" : "noopener noreferrer"}
        target={isMail ? "" : "_blank"}
      >
        <Image src={src} alt="contact" height={64} />
      </Link>
    </motion.button>
  );
};

export default ContactButton;
