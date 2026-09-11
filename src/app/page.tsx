import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Evolution from "@/components/sections/Evolution";
import Enfoque from "@/components/sections/Enfoque";
import dynamic from 'next/dynamic'

// El componente solo se descargará en un chunk separado cuando sea necesario
const ComponentePesado = dynamic(() => import('../components/ComponentePesado'), {
  loading: () => <p>Cargando...</p>,
  ssr: false, // Opcional: desactiva el renderizado en el servidor si usa APIs del navegador (window)
})

export default function Pagina() {
  return (
    <div>
      <h1>Mi Página</h1>
      <ComponentePesado />
    </div>
  )
}


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