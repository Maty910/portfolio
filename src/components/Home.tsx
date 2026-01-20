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
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Padding consistente con otras secciones */
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor principal con márgenes seguros */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col
                      max-[880px]:px-4 max-[880px]:py-8">
        
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:gap-4 max-[880px]:mb-6">

          {/* Badge "Open to work" */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 cursor-default
                          max-[880px]:px-2.5 max-[880px]:py-1 max-[880px]:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="ml-1">{t('header.available')}</span>
          </div>

          {/* HEADLINE PRINCIPAL */}
          <div className="flex flex-col gap-3 w-full max-[880px]:gap-2">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight group cursor-default max-[880px]:text-4xl">
              <div className="relative inline-block">
                <span className="font-heading font-bold tracking-tight leading-[1.08]">
                  {t('header.headlinePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t('header.headlineHighlight')}</span>
                </span>
                <div className="absolute -bottom-2 left-0 w-1/4 h-[3px] bg-primary rounded-full group-hover:w-full transition-all duration-700 ease-out max-[880px]:h-[2px]" />
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
                          max-[880px]:pl-3 max-[880px]:mt-1 max-[880px]:border-l-2">
            <p className="text-text-secondary text-lg leading-relaxed 
                          max-[880px]:text-sm max-[880px]:leading-relaxed">
              {bioContent}
            </p>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-wrap gap-4 mt-4 w-full 
                          max-[880px]:flex-col max-[880px]:gap-3 max-[880px]:mt-3 max-[880px]:mb-16">

            {/* Botón CV (Primario) - Full width en mobile */}
            <a 
              href="/CV/CV Matias Chacon.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl 
                        bg-gradient-to-r from-primary to-purple-600 text-white font-bold tracking-wide
                        shadow-lg shadow-primary/20
                        hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]
                        transition-all duration-300 ease-out group/btn no-underline
                        max-[880px]:w-full max-[880px]:py-3.5 max-[880px]:text-sm cursor-pointer"
            >
              <Download size={20} className="relative z-20 max-[880px]:w-5 max-[880px]:h-5" />
              <span className="relative z-20">{t('header.downloadCv')}</span>
            </a>

            {/* Botón Ver Proyectos (Secundario) - Full width en mobile */}
            <button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl
                        bg-text-primary/5 border border-text-primary/10 text-text-primary font-medium
                        hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1
                        transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer
                        max-[880px]:w-full max-[880px]:py-3.5 max-[880px]:text-sm"
            >
              {t('home.viewProjects')}
              <ArrowRight size={20} className="transition-transform max-[880px]:w-5 max-[880px]:h-5" />
            </button>
            
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};