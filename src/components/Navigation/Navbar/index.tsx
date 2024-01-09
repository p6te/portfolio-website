import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

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
    <div className="sticky top-0 z-50">
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
        className="flex justify-between items-center mx-24 "
      >
        <h2 className="font-semibold bg-gradient-primary text-transparent bg-clip-text ">{`<Peter/>`}</h2>
        <div className="flex gap-7 bg-blur-1 backdrop-blur rounded-full px-7 py-4 mt-1">
          <NavbarItem href="Projects" />
          <NavbarItem href="Skills" />
          <NavbarItem href="Experience" />
          <NavbarItem href="Testimonials" />
          <NavbarItem href="Contact" />
        </div>
        <h2 className="invisible">{`<Peter/>`}</h2>
      </motion.nav>
    </div>
  );
}
