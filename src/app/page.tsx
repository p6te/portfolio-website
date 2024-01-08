import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Testimonials from "@/components/Sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
