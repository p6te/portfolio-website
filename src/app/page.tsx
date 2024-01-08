import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import NavigationSection from "@/components/Sections/NavigationSection";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Testimonials from "@/components/Sections/Testimonials";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavigationSection />
      <div id="Projects">
        <Projects />
      </div>

      <div id="Skills">
        <Skills />
      </div>
      <div>
        <Experience id="section-1" />
      </div>
      <Testimonials />
      <Contact />
      <div id="ostatni"></div>
    </div>
  );
}
