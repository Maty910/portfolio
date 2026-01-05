import { useEffect, useState, type PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi';
import { ExternalLink, Github, Terminal, Cpu, Database, Download, Mail } from 'lucide-react';
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
  const typingText = useTypewriter(['Full-Stack Developer', 'React Enthusiast', 'Creative Coder', 'Designer', 'Pixel Precision', 'Gamer'], 100);

  // Renderizado condicional del Sidebar
  const renderSidebarContent = () => {
    // Clases de animación: En desktop entra de izquierda, en mobile solo fade-in suave
    const animClasses = "flex flex-col gap-4 w-full animate-in duration-500 fade-in slide-in-from-left-4 max-[880px]:slide-in-from-left-0 max-[880px]:animate-none max-[880px]:gap-2";

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

    // Default (Home) - Perfil Standard
    return (
      <>
        {/* Foto de perfil */}
        <div className="relative group w-fit mx-auto">
          <div className="absolute inset-[-3px] max-[880px]:inset-[-2px] bg-gradient-to-r from-[#6353f2] via-purple-500 to-[#6353f2] rounded-full opacity-60 blur-sm group-hover:opacity-90 group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite]" />
          <div className="relative w-[110px] h-[110px] max-[880px]:w-[80px] max-[880px]:h-[80px] rounded-full overflow-hidden border-[3px] max-[880px]:border-[2px] border-[#0f0e17] bg-[#0f0e17] shadow-2xl">
            <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" src="/images/FOTO DE PERFIL.jpg" alt="Profile" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6353f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:-right-4 flex items-center gap-1.5 max-[880px]:gap-1 bg-[#0f0e17] px-2.5 py-1 max-[880px]:px-2 max-[880px]:py-0.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/10 transition-transform hover:scale-105 cursor-help">
            <span className="relative flex h-2 w-2 max-[880px]:h-1.5 max-[880px]:w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 max-[880px]:h-1.5 max-[880px]:w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[9px] max-[880px]:text-[8px] font-bold text-green-400 tracking-tight whitespace-nowrap">Available</span>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden lg:flex flex-col gap-2 mt-4 w-full">
          <div className="flex gap-2">
            <div className="flex-1 bg-gradient-to-br from-[#6353f2]/10 to-[#6353f2]/5 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#6353f2]/20 hover:border-[#6353f2]/60 transition-all duration-300 group flex flex-col items-center justify-center">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-[#6353f2] to-purple-400 bg-clip-text text-transparent">3+</p>
              <p className="text-[9px] text-[#a7a9be] uppercase tracking-wider font-semibold mt-0.5">Years</p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#6353f2]/10 to-[#6353f2]/5 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#6353f2]/20 hover:border-[#6353f2]/60 transition-all duration-300 group flex flex-col items-center justify-center">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-[#6353f2] to-purple-400 bg-clip-text text-transparent">10+</p>
              <p className="text-[9px] text-[#a7a9be] uppercase tracking-wider font-semibold mt-0.5">Projects</p>
            </div>
          </div>
        </div>

        {/* Quick Links (Desktop Only) */}
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
          <a href="mailto:matychacong@gmail.com">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#a7a9be] hover:text-white hover:bg-[#6353f2]/10 transition-all group border border-transparent hover:border-[#6353f2]/30">
              <div className="flex items-center gap-2"><Mail size={16} /><span>Email</span></div>
            </div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Quick Links (Mobile Compacto - Debajo del nombre) */}
        <div className="lg:hidden flex justify-center gap-3 mt-3 w-full max-w-[200px]">
           <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-[#a7a9be] hover:text-white border border-white/10">
             <Github size={16} />
           </a>
           <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0077b5]/10 rounded-lg text-[#a7a9be] hover:text-[#0077b5] border border-[#0077b5]/20">
             <LinkedInIcon style={{ fontSize: 18 }} />
           </a>
        </div>
      </>
    );
  };

  return (
    <div className="page container relative min-h-screen bg-[#0f0e17] text-white overflow-x-hidden selection:bg-[#6353f2]/30 selection:text-white">
      
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(99,83,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,83,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_top_left,black_40%,transparent_70%)] fixed" />
      
      {/* LAYOUT MOBILE PRINCIPAL 
         En mobile (max-[880px]), usamos un contenedor flex vertical centrado (w-full, items-center).
         Esto evita los saltos laterales y centra el contenido naturalmente.
      */}
      <div className="min-[881px]:hidden w-full flex flex-col items-center pt-8 pb-4 px-4 relative z-20">
        
        {/* Header Mobile */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-gradient-to-r from-white via-[#a7a0eb] to-white bg-clip-text text-transparent">
              Matías Chacón
            </span>
            <FiCode className="text-[#6353f2] animate-pulse" size={20} />
          </h1>
          <p className="text-[#a7a9be] text-xs font-mono tracking-wider h-4">
            {typingText}
          </p>
        </div>

        {/* Sidebar Content (Foto, Links, etc) Mobile */}
        <div className="w-full flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-700">
          {renderSidebarContent()}
        </div>

      </div>

      {/* LAYOUT DESKTOP PRINCIPAL 
         Mantenemos la estructura fixed lateral que te gustaba para desktop.
         Oculto en mobile con 'hidden min-[881px]:block'.
      */}
      <div className="hidden min-[881px]:block">
        {/* Header Desktop */}
        <header className="fixed top-8 left-28 z-20 transition-all duration-300 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="flex items-center gap-3 mb-1 text-2xl font-bold group cursor-default">
            <div className="relative">
              <span className="bg-gradient-to-r from-white via-[#a7a0eb] to-white bg-clip-text text-transparent group-hover:via-[#6353f2] transition-all duration-500">
                Matías Chacón
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6353f2] group-hover:w-full transition-all duration-500" />
            </div>
            <FiCode className="text-[#6353f2] animate-pulse" size={24} />
          </h1>
          <p className="text-[#a7a9be] text-xs font-mono tracking-wider pl-1 border-l-2 border-[#6353f2]/30 ml-1 px-2 h-4">
            {typingText}
          </p>
        </header>

        {/* Sidebar Desktop */}
        <div className="fixed top-28 left-28 z-20 w-[220px] flex flex-col gap-6 transition-all duration-300 animate-in zoom-in-95 duration-700 delay-150">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Logo Flotante (Ajustado posición mobile para no tapar) */}
      <div className="absolute top-6 right-8 z-20 animate-in fade-in slide-in-from-top-4 duration-700 delay-500 max-[880px]:top-4 max-[880px]:right-4">
        <img className="w-[80px] max-[880px]:w-[35px] object-contain opacity-80 hover:opacity-100 transition-all duration-500 fixed right-8 max-[880px]:right-4" src="/Logo Mati.svg" alt="Matias Logo" />
      </div>

      {/* Contenido Principal */}
      {/* En mobile sacamos el padding top exagerado */}
      <div className="relative z-10 w-full min-h-screen transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]">
        {children}
      </div>

      <style>{`
        /* Ajustes Desktop Sidebar Expansión */
        body:has([aria-expanded="true"]) header.fixed,
        body:has([aria-expanded="true"]) .fixed[class*="top-28"] {
          left: 18rem; 
        }
      `}</style>
    </div>
  );
}