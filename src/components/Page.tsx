import { useEffect, useState, type PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi';
import { Download, ExternalLink, Github, Terminal, Cpu, Database } from 'lucide-react';
import { SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { Section } from '../types';

interface PageProps extends PropsWithChildren {
  activeSection?: Section;
}

const useTypewriter = (words: string[], speed = 150, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : speed, parseInt(Math.random() * 350 + '')));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
};

export function Page({ children, activeSection = 'home' }: PageProps) {
  const typingText = useTypewriter(['Full-Stack Developer', 'React Enthusiast', 'Creative Coder'], 100);

  // Renderizado condicional del Sidebar
  const renderSidebarContent = () => {
    // Clases de animación: En desktop entra de izquierda, en mobile entra suave desde arriba
    const animClasses = "flex flex-col gap-4 w-full animate-in duration-500 fade-in slide-in-from-left-4 max-[880px]:slide-in-from-left-0 max-[880px]:slide-in-from-top-2 max-[880px]:gap-2";

    if (activeSection === 'projects') {
      return (
        <div className={animClasses}>
          <div className="bg-[#6353f2]/10 p-4 max-[880px]:p-3 rounded-xl border border-[#6353f2]/20">
            <h3 className="text-[#6353f2] font-bold mb-2 flex items-center gap-2 max-[880px]:text-xs max-[880px]:mb-1.5">
              <Terminal size={16} className="max-[880px]:w-3.5 max-[880px]:h-3.5" /> Stack Highlights
            </h3>
            <div className="flex flex-wrap gap-2 max-[880px]:gap-1.5">
              {['React', 'Node.js', 'TypeScript', 'Tailwind', 'SQL'].map(tech => (
                <span key={tech} className="text-[10px] max-[880px]:text-[9px] px-2 py-1 max-[880px]:px-1.5 max-[880px]:py-0.5 bg-white/5 rounded border border-white/10 text-[#a7a9be]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (activeSection === 'skills') {
      return (
        <div className={animClasses}>
          <div className="bg-[#6353f2]/10 p-4 max-[880px]:p-3 rounded-xl border border-[#6353f2]/20">
            <h3 className="text-[#6353f2] font-bold mb-1 flex items-center gap-2 max-[880px]:text-xs">
              <Cpu size={16} className="max-[880px]:w-3.5 max-[880px]:h-3.5" /> Skill Overview
            </h3>
            <p className="text-[11px] max-[880px]:text-[10px] text-[#a7a9be]">Exploring my technical expertise</p>
          </div>
        </div>
      );
    } else if (activeSection === 'contact') {
      return (
        <div className={animClasses}>
          <div className="bg-[#6353f2]/10 p-4 max-[880px]:p-3 rounded-xl border border-[#6353f2]/20">
            <h3 className="text-[#6353f2] font-bold mb-1 flex items-center gap-2 max-[880px]:text-xs">
              <Database size={16} className="max-[880px]:w-3.5 max-[880px]:h-3.5" /> Get in Touch
            </h3>
            <p className="text-[11px] max-[880px]:text-[10px] text-[#a7a9be]">Let's connect and collaborate</p>
          </div>
        </div>
      );
    }

    // Default (Home) - Optimizado para mobile con diseño card horizontal
    return (
      <>
        {/* Card de Perfil Compacto Mobile */}
        <div className="w-full max-[880px]:bg-gradient-to-br max-[880px]:from-[#6353f2]/5 max-[880px]:to-transparent max-[880px]:p-3 max-[880px]:rounded-2xl max-[880px]:border max-[880px]:border-[#6353f2]/10">
          {/* Foto de perfil - Más compacta en mobile */}
          <div className="relative group w-fit mx-auto lg:mx-0">
            <div className="absolute inset-[-3px] max-[880px]:inset-[-2px] bg-gradient-to-r from-[#6353f2] via-purple-500 to-[#6353f2] rounded-full opacity-60 blur-sm group-hover:opacity-90 group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite]" />
            <div className="relative w-[110px] h-[110px] max-[880px]:w-[70px] max-[880px]:h-[70px] rounded-full overflow-hidden border-[3px] max-[880px]:border-[2px] border-[#0f0e17] bg-[#0f0e17] shadow-2xl">
              <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" src="/images/FOTO DE PERFIL.jpg" alt="Profile" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6353f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:-right-4 flex items-center gap-1.5 max-[880px]:gap-0.5 bg-[#0f0e17] px-2.5 py-1 max-[880px]:px-1.5 max-[880px]:py-0.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/10 transition-transform hover:scale-105 cursor-help">
              <span className="relative flex h-2 w-2 max-[880px]:h-1.5 max-[880px]:w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 max-[880px]:h-1.5 max-[880px]:w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[9px] max-[880px]:text-[7px] font-bold text-green-400 tracking-tight whitespace-nowrap">Available</span>
            </div>
          </div>

          {/* Stats - Compactos horizontales en mobile */}
          <div className="flex flex-col gap-2 mt-4 max-[880px]:mt-2.5 w-full">
            <div className="flex gap-2 max-[880px]:gap-1.5">
              <div className="flex-1 bg-gradient-to-br from-[#6353f2]/10 to-[#6353f2]/5 backdrop-blur-sm px-3 py-2.5 max-[880px]:px-2 max-[880px]:py-1.5 rounded-xl max-[880px]:rounded-lg border border-[#6353f2]/20 hover:border-[#6353f2]/60 transition-all duration-300 group flex flex-col items-center justify-center">
                <p className="text-2xl max-[880px]:text-base font-extrabold bg-gradient-to-r from-[#6353f2] to-purple-400 bg-clip-text text-transparent">3+</p>
                <p className="text-[9px] max-[880px]:text-[7px] text-[#a7a9be] uppercase tracking-wider font-semibold mt-0.5 max-[880px]:mt-0">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Desktop */}
        <div className="hidden lg:flex flex-col gap-2 pt-4 border-t border-white/5 w-full">
          <p className="text-[10px] text-[#6353f2] font-bold uppercase tracking-widest mb-1">Connect</p>
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#a7a9be] hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
            <div className="flex items-center gap-2"><Github size={16} /><span>GitHub</span></div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#a7a9be] hover:text-white hover:bg-[#0077b5]/10 transition-all group border border-transparent hover:border-[#0077b5]/30">
            <div className="flex items-center gap-2"><LinkedInIcon style={{ fontSize: 18 }} /><span>LinkedIn</span></div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Quick Actions Mobile - Botones horizontales compactos */}
        <div className="lg:hidden flex gap-1.5 mt-2 w-full">
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] text-[#a7a9be] bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95 active:bg-white/15">
            <Github size={12} />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] text-[#a7a9be] bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/30 transition-all active:scale-95 active:bg-[#0077b5]/25">
            <LinkedInIcon style={{ fontSize: 12 }} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </>
    );
  };

  return (
    <div className="page container relative min-h-screen bg-[#0f0e17] text-white overflow-x-hidden selection:bg-[#6353f2]/30 selection:text-white">
      
      {/* Fondo */}
      <div className="inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(99,83,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,83,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_top_left,black_40%,transparent_70%)] fixed" />
      
      {/* Header Izquierdo / Superior Mobile */}
      <header className="min-[881px]:fixed top-8 left-28 z-20 transition-all animate-in fade-in slide-in-from-top-4 duration-700
                        max-[880px]:relative max-[880px]:w-full max-[880px]:pt-3 max-[880px]:pb-2 max-[880px]:px-4">
        
        <h1 className="flex items-center gap-3 mb-1 text-2xl font-bold max-[880px]:text-lg max-[880px]:gap-2 max-[880px]:justify-center group cursor-default">
          <FiCode className="text-[#6353f2] animate-pulse max-[880px]:w-4 max-[880px]:h-4" size={24} />
          <div className="relative">
            <span className="bg-gradient-to-r from-white via-[#a7a0eb] to-white bg-clip-text text-transparent group-hover:via-[#6353f2] transition-all duration-500">
              Matías Chacón
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6353f2] group-hover:w-full transition-all duration-500" />
          </div>
        </h1>
        <p className="text-[#a7a9be] text-xs max-[880px]:text-[10px] font-mono tracking-wider pl-1 border-l-2 border-[#6353f2]/30 ml-1 px-2 h-4
                      max-[880px]:text-center max-[880px]:border-none max-[880px]:pl-0 max-[880px]:ml-0 max-[880px]:px-0 max-[880px]:h-auto max-[880px]:leading-relaxed">
          {typingText}
        </p>
      </header>

      {/* Sidebar Dinámico (Perfil / Datos) */}
      <div className="min-[881px]:fixed top-28 left-28 z-20 w-[220px] flex flex-col gap-6 transition-all duration-300 
                      max-[880px]:relative max-[880px]:w-full max-[880px]:px-4 max-[880px]:mb-6 max-[880px]:gap-2.5 max-[880px]:mt-2">
        {renderSidebarContent()}
      </div>

      {/* Logo Flotante */}
      <div className="absolute top-6 right-8 z-20 animate-in fade-in slide-in-from-top-4 duration-700 delay-500 
                      max-[880px]:right-3 max-[880px]:top-2">
        <img className="w-[80px] max-[880px]:w-[35px] object-contain opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(99,83,242,0.5)] transition-all duration-500 max-[880px]:hover:drop-shadow-[0_0_10px_rgba(99,83,242,0.4)]" src="/Logo Mati.svg" alt="Matias Logo" />
      </div>

      {/* FAB Download CV - Mobile */}
      {/* <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" 
         className="lg:hidden fixed bottom-5 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#6353f2] to-[#5243d6] text-white shadow-xl shadow-[#6353f2]/30 hover:shadow-[#6353f2]/50 active:scale-90 transition-all animate-in slide-in-from-bottom-8 duration-500 delay-700">
        <Download size={18} />
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
        </span>
      </a> */}

      {/* Contenido Principal */}
      <div className="content-wrapper relative z-10 w-full min-h-screen max-[880px]:pt-0 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]">
        {children}
      </div>

      <style>{`
        /* Ajustes de layout específicos para desktop cuando el sidebar se expande */
        body:has([aria-expanded="true"]) header.min-\\[881px\\]\\:fixed,
        body:has([aria-expanded="true"]) .min-\\[881px\\]\\:fixed[class*="top-28"] {
          left: 18rem; 
        }
        
        /* Desplazar contenido principal cuando sidebar está expandido */
        body:has([aria-expanded="true"]) .content-wrapper {
          margin-left: var(--sidebar-expanded);
          width: calc(100% - var(--sidebar-expanded));
        }
        
        /* Ajustar el contenedor page también */
        body:has([aria-expanded="true"]) .page {
          margin-left: var(--sidebar-collapsed);
        }
        
        /* En mobile no aplicar estos cambios */
        @media (max-width: 880px) {
          body:has([aria-expanded="true"]) .content-wrapper {
            margin-left: 0 !important;
            width: 100% !important;
          }
          body:has([aria-expanded="true"]) .page {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}