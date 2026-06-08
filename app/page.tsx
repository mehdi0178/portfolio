import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import AISolutions from "@/Components/AISolutions";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <AISolutions />
      <Contact />
      <Footer />
    </>
  );
}