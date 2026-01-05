import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import type { Section } from '../types';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

// Definimos las props para poder cambiar de sección
interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="snap-start min-h-screen w-full flex items-center justify-center relative
                transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                pl-[var(--sidebar-collapsed)] max-[880px]:pl-0
                max-[880px]:min-h-[calc(100vh-var(--sidebar-mobile-height))]"
    >
      <div className="w-full max-w-[900px] px-8 md:px-16 py-12 max-[880px]:px-4 max-[880px]:py-8">
        <div className="flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:gap-3">

        {/* H1 Principal (Nombre) */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight m-0 group w-fit cursor-default max-[880px]:text-2xl">
          <div className="relative inline-block">
            {t('header.name')}
            <div className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#6353f2] group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        </h1>

        {/* Subtítulo + Carrusel */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
          
          {/* Subtítulo Violeta */}
          <span className="text-[#6353f2] text-2xl md:text-3xl font-normal whitespace-nowrap max-[880px]:text-base max-[880px]:font-medium">
            Full-Stack Developer
          </span>

          {/* Carrusel (Techs) */}
          <div className="flex-1 min-w-0 w-full md:max-w-[400px] overflow-hidden bg-linear-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group relative py-1.5 max-[880px]:py-2">
            <div className="w-full">
              <div className="flex w-max animate-marquee">
                
                {/* Grupo 1 */}
                <div className="flex items-center gap-6 px-4">
                  <SiReact className="text-[#61dafb]" size={20} />
                  <SiNodedotjs className="text-[#8cc84b]" size={20} />
                  <SiTypescript className="text-[#3178c6]" size={20} />
                  <SiTailwindcss className="text-[#38bdf8]" size={20} />
                  <SiMongodb className="text-[#47a248]" size={20} />
                  <SiPostgresql className="text-[#336791]" size={20} />
                </div>

                {/* Grupo 2 */}
                <div className="flex items-center gap-6 px-4">
                  <SiReact className="text-[#61dafb]" size={20} />
                  <SiNodedotjs className="text-[#8cc84b]" size={20} />
                  <SiTypescript className="text-[#3178c6]" size={20} />
                  <SiTailwindcss className="text-[#38bdf8]" size={20} />
                  <SiMongodb className="text-[#47a248]" size={20} />
                  <SiPostgresql className="text-[#336791]" size={20} />
                </div>
                
                {/* Grupo 3 */}
                <div className="flex items-center gap-6 px-4">
                  <SiReact className="text-[#61dafb]" size={20} />
                  <SiNodedotjs className="text-[#8cc84b]" size={20} />
                  <SiTypescript className="text-[#3178c6]" size={20} />
                  <SiTailwindcss className="text-[#38bdf8]" size={20} />
                  <SiMongodb className="text-[#47a248]" size={20} />
                  <SiPostgresql className="text-[#336791]" size={20} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> 
        <p className="text-[#a7a9be] text-lg leading-relaxed max-w-xl mt-2 max-[880px]:text-sm max-[880px]:leading-relaxed max-[880px]:mt-1">
          {t('header.bio')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4 max-[880px]:w-full max-[880px]:gap-2 max-[880px]:mt-3">
          <button 
            onClick={() => setActiveSection('projects')}
            className="flex items-center gap-2 px-6 py-3 bg-[#6353f2] text-white rounded-lg font-semibold hover:bg-[#5243d6] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#6353f2]/25 cursor-pointer max-[880px]:flex-1 max-[880px]:justify-center max-[880px]:py-2.5 max-[880px]:text-sm active:scale-95"
          >
            Ver Proyectos
            <ArrowRight size={18} className="max-[880px]:w-5 max-[880px]:h-5" />
          </button>
          
          </div>        
        </div>
    </section>
  );
};