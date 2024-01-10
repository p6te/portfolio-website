import FadeComponent from "@/components/FadeComponent";
import NavigationBox from "./NavigationBox";
import React, { useState } from "react";

export default function NavigationSection() {
  const [selectedBox, setSelectedBox] = useState("");

  return (
    <div className="relative mb-20 mt-40">
      <div className="flex w-full items-center justify-center gap-2">
        <FadeComponent
          direction="up"
          triggerOnce
          cascade
          className="inline-block w-1/6"
          duration={450}
        >
          <NavigationBox href="Projects" setSelectedBox={setSelectedBox} />

          <NavigationBox href="Skills" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Experience" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Testimonials" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Contact" setSelectedBox={setSelectedBox} />
        </FadeComponent>
      </div>
      {selectedBox && (
        <FadeComponent
          duration={700}
          className="absolute left-0 top-0 z-[-1] flex h-full w-full items-center justify-center text-9xl"
        >
          {selectedBox}
        </FadeComponent>
      )}
    </div>
  );
}
