"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS_DATA } from "@/lib/constants";
import { Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ordenar proyectos por prioridad
  const sortedProjects = [...PROJECTS_DATA].sort((a, b) => a.priority - b.priority);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 } // Se activa antes para que la experiencia sea fluida
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="casos-de-exito" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-head-obs">
            Casos <span className="text-[#6366f1]">de Éxito</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Soluciones integrales de diseño, desarrollo y arquitectura para diversos sectores industriales.
          </p>
        </div>

        <div ref={sectionRef} className="space-y-12">
          {sortedProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row bg-white rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden project-card-reveal ${
                isVisible ? "project-card-active" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Lado Izquierdo: Imagen */}
             <div className="relative lg:w-[38%] h-[200px] lg:h-auto lg:min-h-[320px] overflow-hidden bg-slate-100">
                {/*<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>*/}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Badge de Categoría */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/95 backdrop-blur-sm text-[#4f46e5] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Lado Derecho: Contenido */}
              <div className="lg:w-[62%] p-8 md:p-12 flex flex-col justify-center">
                
                <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-2">
                  {project.title}
                </h3>

                <p className="text-[#6366f1] font-bold text-sm mb-6 tracking-wide uppercase">
                  {project.roles}
                </p>

                {/* Resumen Estratégico */}
                <div className="border-l-4 border-[#4f46e5] pl-6 mb-10 bg-slate-50/50 py-4 pr-4 rounded-r-xl">
                  <p className="text-slate-600 italic text-lg leading-relaxed">
                    "{project.summary}"
                  </p>
                </div>

                {/* Grid de Reto, Estrategia, Resultado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* RETO */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest">
                      <AlertTriangle size={14} className="text-orange-500" /> El Reto
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-500">
                      {project.challenge}
                    </p>
                  </div>

                  {/* ESTRATEGIA */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest">
                      <Lightbulb size={14} className="text-purple-500" /> Estrategia
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-500">
                      {project.strategy}
                    </p>
                  </div>

                  {/* RESULTADO */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest">
                      <CheckCircle2 size={14} className="text-emerald-500" /> Resultado
                    </div>
                    <ul className="space-y-2">
                      {project.results?.map((res, i) => (
                        <li key={i} className="text-[12px] text-slate-500 flex items-start gap-2 leading-snug">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-100">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-600 uppercase tracking-tight">
                        {tag}
                      </span>
                    ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}