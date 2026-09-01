"use client";

import { useEffect, useState } from "react";
import { HERO_DATA, INDUSTRIES_DATA } from "@/lib/constants";
import { Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden pt-24 lg:pt-32">
      
      {/* Luces de fondo (Forzamos -z-10 y pointer-events-none) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center ${mounted ? 'hero-entrance' : ''}`}>
          
          {/* Badge de Rol */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-purple-300 text-[11px] font-mono tracking-widest border border-white/10 backdrop-blur-md uppercase font-bold">
              <Terminal size={14} className="text-purple-400" /> {HERO_DATA.role}
            </span>
          </div>

          {/* Título Principal: Usamos colores fijos para evitar Dark Mode bugs */}
          <h1 className="grid text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-[0.95]">
            <span>{HERO_DATA.title}</span>
            <span className="text-lg md:text-xl font-medium text-purple-200 italic tracking-wide mt-2">{HERO_DATA.subtile}</span>
          </h1>
          
          {/* Predescripción */}
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            {HERO_DATA.predescription}
          </h2>

          {/* Descripción Detallada: Cambiamos a slate-400 para mayor contraste */}
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12">
            {HERO_DATA.description}
          </p>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 group"
            >
              {HERO_DATA.ctaMain}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#casos-de-exito"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all duration-300 text-center"
            >
              {HERO_DATA.ctaSecondary}
            </a>
          </div>

          {/* Sección de Industrias (Experiencia Multisectorial) */}
          <div className="pt-20 pb-10">
            <p className="text-center text-xs uppercase text-muted-foreground tracking-[0.4em] mb-12">
              Impacto Multisectorial
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
              {INDUSTRIES_DATA.map((industry, index) => (
                <span
                  key={index}
                  className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter opacity-70 transition-opacity cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}