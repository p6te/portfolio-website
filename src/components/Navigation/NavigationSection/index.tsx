import FadeComponent from "@/components/FadeComponent";
import NavigationBox from "./NavigationBox";
import React, { useState } from "react";

export default function NavigationSection() {
  const [selectedBox, setSelectedBox] = useState("");

  return (
    <div className=" mb-20 mt-40 hidden lg:block">
      <div className="relative flex w-full items-center justify-center gap-2">
        <FadeComponent
          direction="up"
          triggerOnce
          cascade
          duration={450}
          className="flex h-72 flex-1 rounded-3xl bg-gradient-to-b  from-blur-1 to-transparent text-center  backdrop-blur"
        >
          <NavigationBox href="Projects" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Skills" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Experience" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Testimonials" setSelectedBox={setSelectedBox} />
          <NavigationBox href="Contact" setSelectedBox={setSelectedBox} />
        </FadeComponent>
        {selectedBox && (
          <FadeComponent
            duration={700}
            className="absolute left-0 top-0 z-[-1] flex h-full w-full items-center justify-center text-9xl"
          >
            {selectedBox}
          </FadeComponent>
        )}
      </div>
    </div>
  );
}
