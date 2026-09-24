import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Carga diferida para todo lo que está "debajo" de la pantalla inicial
const Evolution = dynamic(() => import("@/components/sections/Evolution"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const Enfoque = dynamic(() => import("@/components/sections/Enfoque"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

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