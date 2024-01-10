import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Testimonials from "@/components/Sections/Testimonials";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <div id="Hero">
        <Hero />
      </div>
      <Navigation />

      <div id="Projects">
        <Projects />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Testimonials">
        <Testimonials />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}
