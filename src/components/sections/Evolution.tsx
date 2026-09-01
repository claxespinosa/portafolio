"use client";

import { useEffect, useRef, useState } from "react";
import { EVOLUTION_DATA } from "@/lib/constants";

export default function Evolution() {
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
    <section id="sobre-mi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-20 leading-tight text-center">
          Evolución Profesional<br />
          <span className="text-[#6366f1]">de la Estética a la Estructura</span>
        </h2>
        
        <div className="relative max-w-7xl mx-auto">
          
          {/* LÍNEA DISCONTINUA: Solo en Desktop */}
          <div className="hidden md:block absolute top-[2.7rem] left-[16%] right-[16%] border-t-2 border-dotted border-slate-300 z-0" />
          
          <div 
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          >
            {EVOLUTION_DATA.map((item, index) => (
              <div
                key={index}
                className={`text-center evolution-reveal ${isVisible ? 'evolution-active' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Etiqueta superior (Fase) */}
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-3 block">
                  {item.phase}
                </span>

                {/* Título de la Fase con máscara de fondo (Forzamos bg-white) */}
                <div className="relative inline-block mb-4">
                  <h3 className="text-[#6366f1] text-xl md:text-2xl font-bold bg-white px-4 relative z-10">
                    {item.role}
                  </h3>
                </div>

                {/* Descripción (Usamos slate-500 en lugar de muted para evitar el bug del modo oscuro) */}
                <p className="text-l text-slate-500 leading-relaxed max-w-[300px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}