"use client";

import NavigationBox from "./NavigationBox";
import React, { useState } from "react";

export default function NavigationSection() {
  const [selectedBox, setSelectedBox] = useState("");

  return (
    <div className="relative mt-40 mb-80">
      <div className=" flex justify-center items-center gap-2">
        <NavigationBox href="Projects" setSelectedBox={setSelectedBox} />
        <NavigationBox href="Skills" setSelectedBox={setSelectedBox} />
        <NavigationBox href="Experience" setSelectedBox={setSelectedBox} />
        <NavigationBox href="Testimonials" setSelectedBox={setSelectedBox} />
        <NavigationBox href="Contact" setSelectedBox={setSelectedBox} />
      </div>
      {selectedBox && (
        <div className="z-[-1] absolute w-full h-full top-0 left-0 flex items-center justify-center text-9xl ">
          {selectedBox}
        </div>
      )}
    </div>
  );
}
