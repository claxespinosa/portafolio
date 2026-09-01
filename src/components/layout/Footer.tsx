"use client";

import { NAVIGATION, CONTACT_DATA } from "@/lib/constants";
import { Icons } from "@/components/ui/Icons";
import { ArrowUp } from "lucide-react";
import { Send, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-2">
            <span className="font-bold text-xl tracking-tighter block mb-4">
              ELIZA<span className="text-primary text-2xl">.</span>
            </span>
            <p className="text-muted-foreground max-w-sm mb-6">
              Arquitecta de Soluciones especializada en ecosistemas digitales escalables y precisión analítica.
            </p>
            <div className="flex gap-4">
                <a href={`mailto:${CONTACT_DATA.email}`} className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={CONTACT_DATA.linkedin} target="_blank" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Icons.linkedin className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Estatus Técnico */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Disponibilidad</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Abierta a Retos Técnicos Q2 2026
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-all mt-8 group"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              Volver al inicio
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Eliza Espinosa — Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Diseñado con precisión analítica y enfoque estratégico.
          </p>
        </div>
      </div>
    </footer>
  );
}