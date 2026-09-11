import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Evolution from "@/components/sections/Evolution";
import Enfoque from "@/components/sections/Enfoque";
import dynamic from 'next/dynamic'
const HeavySection = dynamic(() => import('@/components/sections/HeavySection'), {
  ssr: false,
  loading: () => <div className="py-20 animate-pulse bg-white/5 rounded-lg" />
})

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