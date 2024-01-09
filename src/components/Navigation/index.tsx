"use client";
import React, { useEffect, useRef, useState } from "react";
import NavigationSection from "./NavigationSection";
import Navbar from "./Navbar";
import { useInView } from "framer-motion";

export default function Navigation() {
  const ref = useRef(null);
  const isNavigationSection = useInView(ref);

  return (
    <>
      <div ref={ref}>
        <NavigationSection />
      </div>
      <Navbar isNavigationSection={isNavigationSection} />
    </>
  );
}
