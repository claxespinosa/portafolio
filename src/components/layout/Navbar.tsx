"use client";

import { useState, useEffect } from "react";
import { NAVIGATION, CONTACT_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Send, Mail } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cards = [
  { title: "Desarrollo Frontend"},
  { title: "Salesforce & Fonteva"},
  { title: "CMS & Headless Platforms"},
  { title: "Arquitectura de Software"},
  { title: "Marketing Automation & Data"},
  { title: "UX/UI & Diseño Web"},
];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clase base para los textos que cambian de color
  const textColor = isScrolled ? "text-slate-900" : "text-white";
  const hoverColor = isScrolled ? "hover:text-purple-600" : "hover:text-purple-300";
  

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled 
        ? "bg-white backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#inicio">
        <span className={cn(
          "font-bold text-xl tracking-tighter transition-colors duration-300",
          textColor
        )}>
          ELIZA<span className="text-purple-500 text-2xl">.</span>
        </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                textColor,
                hoverColor
              )}
            >
              {item.name}
            </a>
          ))}
          
          {/* Botón CTA Dinámico */}
          <a 
            href="#contacto" 
            className={cn(
              "px-8 py-3 rounded-lg font-medium transition-all duration-300 border",
              isScrolled 
                ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800" 
                : "bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
            )}
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden transition-colors", textColor)} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-[100vh] bg-white border-b border-slate-200 py-2 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top text-slate-900 text-right overflow-hidden">
          <div className="p-8 flex flex-col gap-4">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-medium hover:text-purple-600"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "px-8 py-3 mt-4 w-fit rounded-xl font-medium transition-all duration-300 border bg-slate-900 text-2xl text-white border-slate-900 hover:bg-purple-600 hover:border-purple-600 text-right self-end"
            )}
          >
            Hablemos
          </a>
          </div>
          <div className="p-8 pl-0 border-t border-t-slate-200 flex flex-col items-end text-right w-full">        
            <p className="text-x md:text-x font-medium mb-2 text-slate-00 max-w-2xl leading-tight">
              Enfoque multidisciplinario y soluciones a medida para cada proyecto
            </p>
            <div className="relative inline-block justify-end gap-x-2 gap-y-1 max-w-2xl text-slate-600 text-xs font-medium">
              {cards.map((card, index) => (
                <span 
                  key={index}
                  className="after:content-['·'] after:mx-2"
                >
                  {card.title}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 pb-0 pl-0 border-t border-t-slate-200 flex flex-col items-end text-right w-full">
            <div className="flex gap-4">
                <a href={`mailto:${CONTACT_DATA.email}`} className="p-2 rounded-full border border-border text-slate-600 hover:border-primary hover:text-purple-300 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={CONTACT_DATA.linkedin} target="_blank" className="p-2 rounded-full border border-border text-slate-600 hover:border-primary hover:text-purple-300 transition-all">
                <Icons.linkedin className="w-5 h-5" />
                </a>
            </div>
          </div>

        </div>
      )}
    </nav>
  );
}