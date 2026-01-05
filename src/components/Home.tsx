import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Mail, Github, Download } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { Section } from '../types';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  // const { t } = useLanguage();

  // Función auxiliar para resaltar palabras clave en la bio (esto es opcional, podés hacerlo directo en el JSX si preferís)
  // Pero para mantenerlo simple y directo como pediste, vamos a hardcodear la bio con estilos acá mismo
  // Ojo: Si usás traducciones (t), tendrías que ver cómo manejar el HTML dentro del string traducido.
  // Asumiendo que t('header.bio') devuelve un string plano, lo vamos a reemplazar visualmente acá para el efecto.
  
  const bioContent = (
    <>
      Soy Matías Chacón — Desarrollador Full-Stack apasionado por crear <span className="text-[#6353f2] font-semibold">interfaces modernas</span> y servicios backend sólidos. Trabajo principalmente con <span className="text-[#6353f2] font-semibold">React</span> y <span className="text-[#6353f2] font-semibold">Node.js</span>, me enfoco en aplicaciones responsivas y accesibles, y disfruto convertir ideas en proyectos listos para producción.
    </>
  );
  // Nota: Si necesitás soporte multi-idioma real con estilos intercalados, lo ideal es usar una librería como 'react-i18next' con interpolación,
  // o tener componentes de texto separados por idioma. Por ahora, para el ejemplo visual, uso este bloque estático o podrías adaptar tu i18n.

  return (
    <section 
      id="home"
      className="snap-center min-h-screen w-full flex items-center justify-center relative
                transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                pl-[var(--sidebar-collapsed)] max-[880px]:pl-0
                max-[880px]:min-h-[calc(100vh-var(--sidebar-mobile-height))]"
    >
      <div className="w-full max-w-[900px] px-8 md:px-16 py-12 max-[880px]:px-4 max-[880px]:py-8 ml-15">
        
        <div className="flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:gap-3">

          {/* Badge "Open to work" */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6353f2]/15 border border-[#6353f2]/30 text-[#6353f2] text-xs font-medium shadow-[0_0_10px_rgba(99,83,242,0.15)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6353f2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6353f2]"></span>
            </span>
            Available for new opportunities
          </div>

          {/* H1 Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight m-0 group w-fit cursor-default max-[880px]:text-3xl">
            <div className="relative inline-block">
              Building Modern
              <div className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#6353f2] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </h1>

          {/* Subtítulo + Carrusel */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full">
            <span className="text-[#6353f2] text-2xl md:text-3xl font-normal whitespace-nowrap max-[880px]:text-xl max-[880px]:font-medium">
              Web Applications
            </span>

            {/* Carrusel (Techs) */}
            <div className="flex-1 min-w-0 w-full md:max-w-[380px] overflow-hidden bg-linear-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group relative py-1.5 max-[880px]:py-2">
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

          {/* BIO CON ESTILOS MEJORADOS Y TEXTO RESALTADO */}
          <div className="mt-4 max-w-2xl">
            <p className="text-[#a7a9be] text-lg leading-relaxed max-[880px]:text-sm max-[880px]:leading-relaxed">
               {/* Opción A: Si usás el contenido estático definido arriba */}
              {bioContent}
              
              {/* Opción B: Si querés seguir usando t() pero no tenés formato en el i18n, 
                  dejanos el estático por ahora para que veas el efecto violeta. 
                   Si preferís t(), avisame y vemos cómo inyectar HTML. */}
            </p>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4 mt-6 max-[880px]:w-full max-[880px]:gap-2 max-[880px]:mt-4">
            
            {/* Botón CV (Primario - Violeta) */}
            <a 
              href="/CV/CV Matias Chacon.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                        bg-linear-to-r from-[#8b5cf6] to-[#6353f2] text-white font-bold
                        shadow-[0_4px_14px_rgba(139,92,246,0.4)]
                        hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95
                        transition-all duration-300 group/btn
                        max-[880px]:flex-1 max-[880px]:py-2.5 max-[880px]:text-sm no-underline"
            >
              {/* Efecto Brillo */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/30 to-transparent z-10" />
              
              <Download size={18} className="max-[880px]:w-5 max-[880px]:h-5 relative z-20" />
              <span className="relative z-20">Descargar CV</span>
            </a>

            {/* Botón Proyectos (Secundario - Oscuro) */}
            <button 
              onClick={() => setActiveSection('projects')}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                        bg-white/5 border border-white/10 text-white font-medium
                        hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px]
                        transition-all duration-300 active:scale-95 cursor-pointer
                        max-[880px]:flex-1 max-[880px]:py-2.5 max-[880px]:text-sm"
            >
              Ver Proyectos
              <ArrowRight size={18} className="max-[880px]:w-5 max-[880px]:h-5" />
            </button>
            
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/5 w-full max-w-xl max-[880px]:mt-4 max-[880px]:pt-4">
            <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="text-[#a7a9be] hover:text-white transition-colors transform hover:scale-110">
              <Github size={24} className="max-[880px]:w-6 max-[880px]:h-6" />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-[#a7a9be] hover:text-[#0a66c2] transition-colors transform hover:scale-110">
              <LinkedInIcon style={{ fontSize: 28 }} className="max-[880px]:!text-[24px]" />
            </a>
            <a href="mailto:tuemail@gmail.com" className="text-[#a7a9be] hover:text-[#6353f2] transition-colors transform hover:scale-110">
              <Mail size={24} className="max-[880px]:w-6 max-[880px]:h-6" />
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes shimmer { 
          100% { transform: translateX(100%); } 
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};