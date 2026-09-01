"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_DATA, HUMAN_DATA } from "@/lib/constants";
import { Icons } from "@/components/ui/Icons";

export default function About() {
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
    <section id="enfoque" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal-on-scroll ${isVisible ? 'reveal-active' : ''}`}
        >
          
          {/* Columna de Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2f3274] mb-8 leading-tight">
              {ABOUT_DATA.title} <br />
              <span>
                {ABOUT_DATA.titleHighlight}
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-10">
              {ABOUT_DATA.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              {ABOUT_DATA.stats.map((stat, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${stat.color} shadow-sm`}>
                    {stat.icon === "target" && <Icons.target className="w-6 h-6" />}
                    {stat.icon === "shield" && <Icons.shield className="w-6 h-6" />}
                    {stat.icon === "trendingUp" && <Icons.trendingUp className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{stat.label}</h4>
                    <p className="text-slate-500">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Visual: Panel de Diagnóstico */}
          <div className="relative p-8 rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-[12px] md:text-sm font-mono text-purple-200 overflow-x-auto">
                <code>{`
// Proceso de Arquitectura
function diagnose(ecosystem) {
  const gaps = observation.analyze(ecosystem);
  if (gaps.critical) {
    return strategy.refactor(gaps);
  }
  return strategy.optimize(ecosystem);
}
                `}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Sección: Intereses con Propósito */}
        <div className="mt-20 space-y-6 border-l-4 border-purple-500/30 pl-8">
          <h4 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400">
            Intereses con Propósito
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {HUMAN_DATA.map((item, index) => (
              <div key={index}>
                <span className="font-bold text-slate-900 block mb-2">
                  {item.title}
                </span>
                <p className="text-sm text-slate-500 leading-relaxed italic">
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