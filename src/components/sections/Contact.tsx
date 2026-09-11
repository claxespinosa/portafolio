"use client";

import { useState, useEffect, useRef } from "react";
import { Turnstile } from '@marsidev/react-turnstile';
import { CONTACT_DATA } from "@/lib/constants";
import { Send, Mail } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export default function Contact() {
  // 1. Estado de los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "default",
    message: "",
    honeypot: ""
  });

  // 2. Estados de la interfaz para el envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // 3. Estados de animación (Scroll)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Función que procesa el envío
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de seguridad antes de procesar
    if (!turnstileToken) {
      setStatus({ type: 'error', message: 'Por favor, espera la verificación de seguridad.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Enviamos los datos del formulario junto con el token de Cloudflare
        body: JSON.stringify({ ...formData, turnstileToken }), 
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Diagnóstico enviado con éxito. Te contactaré pronto.' });
        setFormData({ name: '', email: '', projectType: 'default', message: '', honeypot: '' }); // Limpia los campos
        setTurnstileToken(null); // Resetea el token tras el envío
      } else {
        setStatus({ type: 'error', message: 'Ocurrió un error en el servidor. Por favor, intenta nuevamente.' });
      }
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión. Revisa tu internet y vuelve a intentar.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Fondo con Gradiente Fijo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-0" />
      
      {/* Esfera de luz decorativa */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200 tracking-widest">
              Contacto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Tienes un <span className="text-purple-300">Reto Técnico</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {CONTACT_DATA.subtitle}
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          
          {/* Columna Izquierda: Metodología */}
          <div className={`space-y-8 reveal-on-scroll ${isVisible ? 'reveal-active' : ''}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Metodología de Trabajo
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "Diagnóstico", desc: "Análisis profundo de flujos y dependencias." },
                  { title: "Diseño", desc: "Arquitectura técnica escalable y segura." },
                  { title: "Implementación", desc: "Ejecución precisa con pruebas continuas." },
                  { title: "Optimización", desc: "Mejora continua y escalabilidad técnica." }
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 shadow-lg shadow-purple-600/20">
                      {i + 1}
                    </div>
                    <div>
                      <strong className="text-white block text-lg mb-1">{step.title}</strong>
                      <span className="text-white/80 text-gray-400 leading-relaxed">{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-4 pl-4">
              <a href={`mailto:${CONTACT_DATA.email}`} 
              aria-label={`Enviar correo electrónico a ${CONTACT_DATA.email}`} 
              className="flex items-center gap-3 text-purple-300 hover:text-white transition-colors text-lg">
                <Mail size={20} /> {CONTACT_DATA.email}
              </a>
              <a href={CONTACT_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visitar perfil profesional de LinkedIn en una nueva pestaña" 
              className="flex items-center gap-3 text-purple-300 hover:text-white transition-colors text-lg">
                <Icons.linkedin className="w-5 h-5" /> Perfil Profesional
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className={`p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl reveal-on-scroll ${isVisible ? 'reveal-active' : ''}`} style={{ transitionDelay: '200ms' }}>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground mb-2 block">Nombre / Empresa</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder:text-gray-400" 
                    placeholder="Tu nombre o empresa" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground mb-2 block">Correo electrónico</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder:text-gray-400" 
                    placeholder="tucorreo@mail.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="text-xs uppercase font-bold text-muted-foreground mb-2 block">Tipo de Solución</label>
                <div className="relative">
                  <select 
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-all appearance-none cursor-pointer text-white"
                  >
                    <option value="default" className="bg-slate-900">Selecciona una opción</option>
                    <option value="Arquitectura Web / Sistemas Complejos" className="bg-slate-900">Arquitectura Web / Sistemas Complejos</option>
                    <option value="Presencia Digital Ágil" className="bg-slate-900">Presencia Digital Ágil</option>
                    <option value="Rescate Técnico / Auditoría" className="bg-slate-900">Rescate Técnico / Auditoría</option>
                    <option value="Consultoría Técnica" className="bg-slate-900">Consultoría Técnica</option>
                    <option value="Otro" className="bg-slate-900">Otro</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Icons.chevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground mb-2 block">Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none text-white placeholder:text-gray-400" 
                  placeholder="Describe brevemente el reto técnico..." 
                />
              </div>

              {/* Trampa de Miel (Honeypot) - Invisible para usuarios */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Widget de Cloudflare Turnstile */}
              <div className="flex justify-center py-2">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ 
                    theme: 'dark',
                    appearance: 'interaction-only'
                  }}
                />
              </div>

              {/* Banner de Notificación (Éxito o Error) */}
              {status.type && (
                <div className={`p-4 rounded-xl text-sm font-medium border backdrop-blur-sm ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-300 border-green-500/20' 
                    : 'bg-red-500/10 text-red-300 border-red-500/20'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Botón Dinámico */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 disabled:bg-purple-600/50 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-purple-200" /> 
                    Enviar Diagnóstico
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}