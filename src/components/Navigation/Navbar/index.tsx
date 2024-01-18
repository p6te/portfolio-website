import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  isNavigationSection: boolean;
}
export default function Navbar({ isNavigationSection }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (scrollY.get() > 800) {
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsHidden(true);
    }
  });

  return (
    <div className="pointer-events-none sticky top-3 z-50 hidden w-full  md:block">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={isHidden || isNavigationSection ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="flex items-center justify-between  "
      >
        <Link
          href="#Hero"
          scroll
          className="pointer-events-auto rounded-full border border-transparent border-opacity-50 bg-gradient-primary bg-clip-text px-2 py-1 text-lg font-semibold text-transparent hover:border-white md:px-4 md:py-2 lg:text-3xl "
        >{`<Peter/>`}</Link>
        <div className=" pointer-events-auto  flex gap-2 rounded-full bg-blur-1 px-7 py-4 backdrop-blur lg:gap-7">
          <NavbarItem href="Projects" />
          <NavbarItem href="Skills" />
          <NavbarItem href="Experience" />
          <NavbarItem href="Testimonials" />
          <NavbarItem href="Contact" />
        </div>
        <div className="w-[45px] lg:w-[53px]" />
      </motion.nav>
    </div>
  );
}
