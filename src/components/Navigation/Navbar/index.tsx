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
    <div className="pointer-events-none sticky top-3 z-50 mr-40 ">
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
        className=" mx-24 flex items-center justify-between"
      >
        <Link
          href="#Hero"
          scroll
          className="pointer-events-auto rounded-full border border-transparent border-opacity-50 bg-gradient-primary bg-clip-text px-4 py-2 text-3xl font-semibold  text-transparent hover:border-white "
        >{`<Peter/>`}</Link>
        <div className=" pointer-events-auto  flex gap-7 rounded-full bg-blur-1 px-7 py-4 backdrop-blur">
          <NavbarItem href="Projects" />
          <NavbarItem href="Skills" />
          <NavbarItem href="Experience" />
          <NavbarItem href="Testimonials" />
          <NavbarItem href="Contact" />
        </div>
        <h2></h2>
      </motion.nav>
    </div>
  );
}
