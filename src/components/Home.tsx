import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, FileText, Mail, Github } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
      className="absolute right-8 bottom-8 md:right-16 md:bottom-16 w-[min(900px,60%)] h-[72vh] 
                overflow-y-auto overflow-x-hidden py-0 px-2
                mask-[linear-gradient(to_top,black_3%,black_97%,transparent_100%)]
                 /* Mobile responsive */
                max-[880px]:relative max-[880px]:inset-auto max-[880px]:w-full max-[880px]:h-auto 
                max-[880px]:overflow-visible max-[880px]:[mask-image:none] 
                max-[880px]:mb-28 max-[880px]:px-6 max-[880px]:pt-4"
    >
      <div className="flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 pt-2 pb-24">
        
        {/* Badge "Open to work" */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6353f2]/15 border border-[#6353f2]/30 text-[#6353f2] text-xs font-medium shadow-[0_0_10px_rgba(99,83,242,0.15)] max-[880px]:px-4 max-[880px]:py-2 max-[880px]:text-sm">
          <span className="relative flex h-2 w-2 max-[880px]:h-2.5 max-[880px]:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6353f2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6353f2] max-[880px]:h-2.5 max-[880px]:w-2.5"></span>
          </span>
          Available for new opportunities
        </div>

        {/* H1 Principal (Nombre) */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight m-0 group w-fit cursor-default max-[880px]:text-3xl">
          <div className="relative inline-block">
            {t('header.name')}
            <div className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#6353f2] group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        </h1>

        {/* Subtítulo + Carrusel */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
          
          {/* Subtítulo Violeta */}
          <span className="text-[#6353f2] text-2xl md:text-3xl font-normal whitespace-nowrap max-[880px]:text-xl">
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
        
        <p className="text-[#a7a9be] text-lg leading-relaxed max-w-xl mt-2 max-[880px]:text-base max-[880px]:leading-loose">
          {t('header.bio')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4 max-[880px]:w-full">
          <button 
            onClick={() => setActiveSection('projects')}
            className="flex items-center gap-2 px-6 py-3 bg-[#6353f2] text-white rounded-lg font-semibold hover:bg-[#5243d6] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#6353f2]/25 cursor-pointer max-[880px]:flex-1 max-[880px]:justify-center max-[880px]:py-3.5 max-[880px]:text-base active:scale-95"
          >
            Ver Proyectos
            <ArrowRight size={18} className="max-[880px]:w-5 max-[880px]:h-5" />
          </button>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all hover:-translate-y-0.5 no-underline max-[880px]:flex-1 max-[880px]:justify-center max-[880px]:py-3.5 max-[880px]:text-base active:scale-95"
          >
            <FileText size={18} className="max-[880px]:w-5 max-[880px]:h-5" />
            Descargar CV
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/5 w-full max-w-xl max-[880px]:justify-center max-[880px]:gap-8 max-[880px]:mt-8 max-[880px]:pt-8">
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="text-[#a7a9be] hover:text-white transition-colors transform hover:scale-110 active:scale-95 max-[880px]:p-2">
            <Github size={24} className="max-[880px]:w-7 max-[880px]:h-7" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-[#a7a9be] hover:text-[#0a66c2] transition-colors transform hover:scale-110 active:scale-95 max-[880px]:p-2">
            <LinkedInIcon style={{ fontSize: 28 }} className="max-[880px]:text-[32px]" />
          </a>
          <a href="mailto:tuemail@gmail.com" className="text-[#a7a9be] hover:text-[#6353f2] transition-colors transform hover:scale-110 active:scale-95 max-[880px]:p-2">
            <Mail size={24} className="max-[880px]:w-7 max-[880px]:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};