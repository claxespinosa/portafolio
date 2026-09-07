"use client";

import { useEffect, useRef, useState } from "react";
import { ENFOQUE_DATA } from "@/lib/constants";
import { 
  CodeXml, 
  Database, 
  Globe, 
  Cpu, 
  Rocket, 
  Layers 
} from "lucide-react";
import { ArrowRight } from "lucide-react";

// Datos de las tarjetas
const cards = [
  { title: "Desarrollo Frontend", icon: <CodeXml size={28} /> },
  { title: "Salesforce & Fonteva", icon: <Database size={28} /> },
  { title: "CMS & Headless Platforms", icon: <Globe size={28} /> },
  { title: "Arquitectura de Software", icon: <Cpu size={28} /> },
  { title: "Marketing Automation & Data", icon: <Rocket size={28} /> },
  { title: "UX/UI & Diseño Web", icon: <Layers size={28} /> },
];

export default function Enfoque() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodologia" className="py-24 bg-white pb-0">
      {/* Fondo con gradiente fijo (Inmune a Dark Mode forzado) */}
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Columna de Texto */}
          <div className={`reveal-on-scroll ${isVisible ? 'reveal-active' : ''}`}>
            <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-[#dee1ff] rounded-full text-xs font-bold text-slate-600 tracking-widest uppercase">
                  Versatilidad Transversal
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-head-obs">
              {ENFOQUE_DATA.title}
              <span>
                {ENFOQUE_DATA.titleHighlight}
              </span>
            </h2>
            <div className="space-y-6 text-lg text-light leading-relaxed max-w-xl">
              {ENFOQUE_DATA.description.map((para, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: para }} 
                  className="[&>b]: [&>b]:font-bold [&>span]: [&>span]:font-bold"
                />
              ))}
            </div>
          </div>

          {/* Columna Visual: El Grid de Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:shadow-xl hover:border-[#3F00FF] group service-card-reveal service-card-active ${
                  isVisible ? 'reveal-active' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icono */}
                <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-[#3F00FF] group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-[#3F00FF] transition-colors">
                  {card.title}
                </h3>

                {/* Efecto de luz ambiental */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </div>

        {/* Cierre de sección / Call to Action */}
      <div className="bg-call pt-10 pb-10 mt-16">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
          <p className="w-full text-2xl text-head-obs font-bold tracking-4">
            ¿Necesitas una solución a medida? 
          </p>
          <a 
            href="#contacto"
            className="c-contacto w-full md:w-sm px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 group"
          >
            Contáctame
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Esferas de luz decorativas */}
      <div className=" top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}