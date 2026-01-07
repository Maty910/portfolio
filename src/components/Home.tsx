import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import type { Section } from '../types';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  // const { t } = useLanguage();

  const bioContent = (
    <>
      Soy <span className="text-white font-semibold">Matías Chacón</span> — Desarrollador Full-Stack apasionado por crear <span className="text-[#6353f2] font-semibold relative inline-block">
        interfaces modernas
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6353f2]/30 rounded-full"></span>
      </span> y servicios backend sólidos. Trabajo principalmente con <span className="text-[#6353f2] font-semibold">React</span> y <span className="text-[#6353f2] font-semibold">Node.js</span>, me enfoco en aplicaciones responsivas y accesibles, y disfruto convertir ideas en proyectos listos para producción.
    </>
  );

  return (
    <section 
      id="home"
      className="snap-center min-h-screen w-full flex flex-col justify-center relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* En mobile usamos todo el alto disponible menos el header */
                 max-[880px]:min-h-[calc(100vh-120px)]
                 /* En desktop agregamos margen izquierdo para evitar el sidebar */
                 min-[881px]:pl-[280px]"
    >
      {/* Contenedor principal con márgenes seguros */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:pt-8">
        
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 max-[880px]:gap-4">

          {/* Badge "Open to work" */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6353f2]/10 border border-[#6353f2]/20 text-[#6353f2] text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm transition-transform hover:scale-105 cursor-default
                          max-[880px]:px-2.5 max-[880px]:py-1 max-[880px]:text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6353f2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6353f2]"></span>
            </span>
            Available for new opportunities
          </div>

          {/* HEADLINE PRINCIPAL */}
          <div className="flex flex-col gap-2 w-full max-[880px]:gap-1.5">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight group cursor-default max-[880px]:text-3xl">
              <div className="relative inline-block">
                Building Modern
                <div className="absolute -bottom-2 left-0 w-1/3 h-[4px] bg-[#6353f2] rounded-full group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6353f2] to-[#a8a1ff] text-3xl md:text-5xl font-bold tracking-tight max-[880px]:text-xl animate-text-gradient bg-[length:200%_auto]">
                Web Applications
              </span>
              
              {/* Carrusel (Techs) - Oculto en mobile muy chico para limpiar la vista */}
              <div className="hidden md:flex flex-1 items-center max-w-[300px] h-12 overflow-hidden relative mask-linear-fade border-l-2 border-white/5 pl-6 ml-2">
                 <div className="flex w-max animate-marquee items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-6">
                        <SiReact className="text-[#61dafb]" size={24} />
                        <SiNodedotjs className="text-[#8cc84b]" size={24} />
                        <SiTypescript className="text-[#3178c6]" size={24} />
                        <SiTailwindcss className="text-[#38bdf8]" size={24} />
                        <SiMongodb className="text-[#47a248]" size={24} />
                        <SiPostgresql className="text-[#336791]" size={24} />
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div className="mt-2 max-w-2xl border-l-2 border-[#6353f2]/30 pl-4 md:pl-6
                          max-[880px]:pl-3 max-[880px]:mt-1">
            <p className="text-[#a7a9be] text-lg leading-relaxed max-[880px]:text-sm max-[880px]:leading-relaxed">
              {bioContent}
            </p>
          </div>

          {/* BOTONES DE ACCIÓN (Sin redes sociales) */}
          <div className="flex flex-wrap gap-4 mt-4 w-full max-[880px]:gap-2.5 max-[880px]:mt-3">
            
            {/* Botón CV (Primario) */}
            <a 
              href="/CV/CV Matias Chacon.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl 
                         bg-[#6353f2] text-white font-bold tracking-wide
                         shadow-[0_0_20px_rgba(99,83,242,0.3)]
                         hover:shadow-[0_0_30px_rgba(99,83,242,0.5)] hover:scale-[1.02] active:scale-95
                         transition-all duration-300 group/btn no-underline
                         max-[880px]:flex-1 max-[880px]:text-xs max-[880px]:px-4 max-[880px]:py-2.5 cursor-pointer"
            >
              <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <Download size={20} className="relative z-20 max-[880px]:w-4 max-[880px]:h-4" />
              <span className="relative z-20 max-[880px]:text-xs">Descargar CV</span>
            </a>

            {/* Botón Proyectos (Secundario) */}
            <button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl
                         bg-transparent border border-[#a7a9be]/30 text-white font-medium
                         hover:bg-white/5 hover:border-white/50 hover:text-white
                         transition-all duration-300 active:scale-95 cursor-pointer
                         max-[880px]:flex-1 max-[880px]:text-xs max-[880px]:px-4 max-[880px]:py-2.5 max-[880px]:gap-1.5"
            >
              <span className="max-[880px]:text-xs">Ver Proyectos</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform max-[880px]:w-4 max-[880px]:h-4" />
            </button>
            
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer { 
          100% { transform: translateX(100%); } 
        }
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-text-gradient {
          animation: text-gradient 4s ease infinite;
        }
        
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};