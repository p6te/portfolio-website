import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Testimonials from "@/components/Sections/Testimonials";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Sections/Footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className=" mx-6 md:mx-12  lg:mx-32 ">
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
      <Toaster position="top-center" />
      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
