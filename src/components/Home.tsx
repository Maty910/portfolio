import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import type { Section } from '../types';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();

  const bioContent = (
    <>
      {t('header.bio')}
    </>
  );

  return (
    <section 
      id="home"
      className="snap-center min-h-screen w-full flex flex-col justify-center relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* En desktop agregamos margen izquierdo para evitar el sidebar */
                 min-[881px]:pl-[280px]
                 /* En mobile usamos min-height para permitir scroll si no entra */
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor principal con márgenes seguros */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 mx-auto flex flex-col justify-center h-full
                      /* MOBILE: Reducimos padding top (pt-4) y aseguramos padding bottom (pb-32) para la navbar */
                      max-[880px]:px-5 max-[880px]:pt-4 max-[880px]:pb-32 max-[880px]:justify-start">
        
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 max-[880px]:gap-5">

          {/* Badge "Open to work" */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm transition-transform hover:scale-105 cursor-default
                          max-[880px]:px-3 max-[880px]:py-1 max-[880px]:text-[10px] max-[880px]:self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="ml-1">{t('header.available')}</span>
          </div>

          {/* HEADLINE PRINCIPAL */}
          <div className="flex flex-col gap-2 w-full max-[880px]:gap-1">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight group cursor-default max-[880px]:text-2xl relative z-10">
              <div className="relative inline-block">
                <span className="font-sans font-bold tracking-tight leading-[1.08] drop-shadow-[0_0_15px_rgba(99,83,242,0.4)] animate-pulse-slow selection:text-transparent selection:bg-clip-text selection:bg-gradient-to-r selection:from-primary selection:to-purple-400">
                  {t('header.headlinePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-text-gradient bg-[length:200%_auto] font-bold">{t('header.headlineHighlight')}</span>
                </span>
                <div className="absolute -bottom-2 left-0 w-1/3 h-[4px] bg-primary rounded-full group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 w-full">
              {/* Carrusel (Techs) */}
              <div className="hidden md:flex flex-1 items-center max-w-[300px] h-12 overflow-hidden relative mask-linear-fade border-l-2 border-text-primary/10 pl-6 ml-2">
                 <div className="flex w-max animate-marquee items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-6">
                        <SiTypescript className="text-[#3178c6]" size={24} />
                        <SiReact className="text-[#61dafb]" size={24} />
                        <SiNodedotjs className="text-[#8cc84b]" size={24} />
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
          <div className="mt-2 max-w-2xl border-l-2 border-primary/30 pl-4 md:pl-6
                          max-[880px]:pl-4 max-[880px]:mt-2 max-[880px]:border-l-[3px]">
            <p className="text-text-secondary text-lg leading-relaxed 
                          max-[880px]:text-base max-[880px]:leading-relaxed">
              {bioContent}
            </p>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-wrap gap-4 mt-4 w-full 
                          max-[880px]:flex-col max-[880px]:gap-3 max-[880px]:mt-4">

            {/* Botón CV (Primario) - Full width en mobile */}
            <a 
              href="/CV/CV Matias Chacon.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl 
                        bg-gradient-to-r from-primary to-purple-600 text-white font-bold tracking-wide
                        shadow-[0_0_20px_rgba(99,83,242,0.3)]
                        hover:shadow-[0_0_30px_rgba(99,83,242,0.5)] hover:scale-[1.02] active:scale-95
                        transition-all duration-300 group/btn no-underline
                        max-[880px]:w-full max-[880px]:py-4 max-[880px]:text-base cursor-pointer"
            >
              <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <Download size={20} className="relative z-20 max-[880px]:w-5 max-[880px]:h-5" />
              <span className="relative z-20">{t('header.downloadCv')}</span>
            </a>

            {/* Botón Ver Proyectos (Secundario) - Full width en mobile */}
            <button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl
                        bg-text-primary/5 border border-text-primary/10 text-text-primary font-medium
                        hover:bg-text-primary/10 hover:border-text-primary/30 hover:translate-y-[-2px]
                        transition-all duration-300 active:scale-95 cursor-pointer
                        max-[880px]:w-full max-[880px]:py-4 max-[880px]:text-base"
            >
              {t('home.viewProjects')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform max-[880px]:w-5 max-[880px]:h-5" />
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
        @keyframes pulse-slow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(99,83,242,0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(99,83,242,0.7)); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-text-gradient {
          animation: text-gradient 4s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};