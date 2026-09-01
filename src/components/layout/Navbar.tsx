"use client";

import { useState, useEffect } from "react";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" 
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
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top text-slate-900">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-purple-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}