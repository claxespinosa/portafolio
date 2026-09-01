"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES_DATA } from "@/lib/constants";

export default function Services() {
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
    <section id="servicios" className="relative pt-25 pb-25 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 text-white">
            Servicios <span className="text-[#DAB2FF]">Estratégicos</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto text-white">
            Soluciones diseñadas bajo el rigor técnico y la visión de negocio necesaria para escalar.
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
        >
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between min-h-[180px] reveal-on-scroll reveal-active ${
                isVisible ? "service-card-active" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-purple-300 group-hover:text-white transition-colors duration-300">
                <service.icon size={38} />
              </div>
              <h3 className="text-xl font-bold text-white mt-6 tracking-tight">
                {service.title}
              </h3>
              <p className="text-white/80 text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}