import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Carga diferida (code-splitting) compatible con Server Components
const Evolution = dynamic(() => import("@/components/sections/Evolution"));
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Enfoque = dynamic(() => import("@/components/sections/Enfoque"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Evolution />
      <About />
      <Services />
      <Enfoque />
      <Projects />
      <Contact />
    </main>
  );
}