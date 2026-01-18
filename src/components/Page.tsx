import { useEffect, useState, type PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi';
import { ExternalLink, Github, Terminal, Cpu, Database, Download, Mail, MapPin, Check, Copy, GitCommit, GitPullRequest, Layers, Code2 } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiDocker, SiNextdotjs } from 'react-icons/si';
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

// Componente Hora Local
const LocalTime = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Argentina/Buenos_Aires' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  // Usa text-text-primary para adaptarse al tema
  return <span className="font-mono text-xs text-text-primary">{time} AR</span>;
};

export function Page({ children, activeSection = 'home' }: PageProps) {
  const typingText = useTypewriter(['Full-Stack Developer', 'React Enthusiast', 'Creative Coder', 'Pixel Precision'], 100);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('matychacong@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderSidebarContent = () => {
    // Clases adaptadas a variables CSS
    // bg-primary/5 se adapta al color primario
    // bg-text-primary/5 crea un efecto vidrio que sirve para light y dark
    const cardBaseClass = "bg-primary/5 p-4 rounded-2xl border border-primary/20 backdrop-blur-sm w-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 flex flex-col justify-center min-h-[120px]";
    const wrapperClass = "flex flex-col gap-4 w-full animate-in fade-in slide-in-from-left-4 duration-700 max-[880px]:animate-in max-[880px]:fade-in max-[880px]:slide-in-from-top-2";

    if (activeSection === 'projects') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
              <Github size={14} /> GitHub Stats
            </h3>
            
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="flex flex-col bg-text-primary/5 p-2 rounded-lg border border-text-primary/10">
                <div className="flex items-center gap-1.5 text-text-secondary text-[10px] mb-1">
                  <GitCommit size={12} />
                  <span>Contribs.</span>
                </div>
                <span className="text-text-primary font-bold text-sm">500+</span>
                <span className="text-[9px] text-primary">Lifetime</span>
              </div>
              
              <div className="flex flex-col bg-text-primary/5 p-2 rounded-lg border border-text-primary/10">
                <div className="flex items-center gap-1.5 text-text-secondary text-[10px] mb-1">
                  <GitPullRequest size={12} />
                  <span>Public Repos</span>
                </div>
                <span className="text-text-primary font-bold text-sm">15+</span>
                <span className="text-[9px] text-green-500">Active</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-text-primary/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[10px] text-text-secondary">Building: <span className="text-text-primary font-medium">Portfolio V2</span></p>
            </div>
          </div>
        </div>
      );
    } 
    
    if (activeSection === 'skills') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
              <Layers size={14} /> Main Stack
            </h3>
            
            <div className="grid grid-cols-4 gap-2 w-full place-items-center">
              {/* Row 1: Frontend */}
              <div className="p-1.5 bg-[#61dafb]/10 rounded-lg border border-[#61dafb]/20" title="React">
                <SiReact size={16} className="text-[#61dafb]" />
              </div>
              <div className="p-1.5 bg-text-primary/5 rounded-lg border border-text-primary/10" title="Next.js">
                <SiNextdotjs size={16} className="text-text-primary" />
              </div>
              <div className="p-1.5 bg-[#38bdf8]/10 rounded-lg border border-[#38bdf8]/20" title="Tailwind">
                <SiTailwindcss size={16} className="text-[#38bdf8]" />
              </div>
              <div className="p-1.5 bg-[#3178c6]/10 rounded-lg border border-[#3178c6]/20" title="TypeScript">
                <SiTypescript size={16} className="text-[#3178c6]" />
              </div>

              {/* Row 2: Backend & Tools */}
              <div className="p-1.5 bg-[#8cc84b]/10 rounded-lg border border-[#8cc84b]/20" title="Node.js">
                <SiNodedotjs size={16} className="text-[#8cc84b]" />
              </div>
              <div className="p-1.5 bg-[#336791]/10 rounded-lg border border-[#336791]/20" title="PostgreSQL">
                <SiPostgresql size={16} className="text-[#336791]" />
              </div>
              <div className="p-1.5 bg-[#47a248]/10 rounded-lg border border-[#47a248]/20" title="MongoDB">
                <SiMongodb size={16} className="text-[#47a248]" />
              </div>
              <div className="p-1.5 bg-[#2496ed]/10 rounded-lg border border-[#2496ed]/20" title="Docker">
                <SiDocker size={16} className="text-[#2496ed]" />
              </div>
            </div>

            <p className="text-[9px] text-text-secondary text-center mt-3 pt-2 border-t border-text-primary/10">
              Always learning new technologies
            </p>
          </div>
        </div>
      );
    } 
    
    if (activeSection === 'contact') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-primary font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
              <Database size={14} /> Status & Location
            </h3>
            
            <div className="flex flex-col gap-2.5 w-full">
              
              <div className="flex items-center gap-2 bg-green-500/10 p-1.5 px-2 rounded-lg border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[9px] font-bold text-green-500 uppercase tracking-wide">Available for hire</span>
              </div>

              <div className="flex justify-between items-center bg-text-primary/5 p-2 rounded-lg border border-text-primary/10">
                <div className="flex items-center gap-1.5 text-text-secondary text-[10px]">
                  <MapPin size={12} />
                  <span>BA, Argentina</span>
                </div>
                <LocalTime />
              </div>

              <button 
                onClick={handleCopyEmail}
                className="flex items-center justify-between w-full bg-primary/10 hover:bg-primary/20 border border-primary/30 p-2 rounded-lg transition-all group cursor-pointer active:scale-95"
                title="Copiar email"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail size={12} className="text-primary shrink-0" />
                  <span className="text-[10px] text-text-primary font-medium truncate">matychacong@gmail.com</span>
                </div>
                {copied ? <Check size={12} className="text-green-500 shrink-0" /> : <Copy size={12} className="text-text-secondary group-hover:text-text-primary shrink-0" />}
              </button>

            </div>
          </div>
        </div>
      );
    }

    // --- DEFAULT SIDEBAR (Home) ---
    return (
      <div className="flex flex-col items-center w-full gap-6 animate-in fade-in zoom-in-95 duration-700">
        <div className="relative group w-fit mx-auto">
          {/* Anillo del avatar usando variable primaria */}
          <div className="absolute inset-[-3px] max-[880px]:inset-[-2px] bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full opacity-60 blur-sm group-hover:opacity-90 group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite]" />
          
          {/* Fondo del avatar usa bg-bg-base para fundirse con el fondo */}
          <div className="relative w-[110px] h-[110px] max-[880px]:w-[80px] max-[880px]:h-[80px] rounded-full overflow-hidden border-[3px] max-[880px]:border-[2px] border-bg-base bg-bg-base shadow-2xl">
            <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" src="/images/FOTO DE PERFIL.jpg" alt="Profile" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-bg-base px-2 py-0.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/10 transition-transform hover:scale-105 cursor-help whitespace-nowrap z-10">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
            <span className="text-[9px] font-bold text-green-500 tracking-tight">Open to work</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <div className="flex-1 bg-text-primary/5 backdrop-blur-sm px-3 py-2 rounded-xl border border-text-primary/10 hover:border-primary/40 transition-colors group flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-text-primary">3+</p>
              <p className="text-[9px] text-text-secondary uppercase font-semibold">Years</p>
            </div>
            <div className="flex-1 bg-text-primary/5 backdrop-blur-sm px-3 py-2 rounded-xl border border-text-primary/10 hover:border-primary/40 transition-colors group flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-text-primary">10+</p>
              <p className="text-[9px] text-text-secondary uppercase font-semibold">Projects</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-2 pt-2 border-t border-text-primary/10 w-full">
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Connect</p>
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-all group border border-transparent hover:border-text-primary/10">
            <div className="flex items-center gap-2"><Github size={16} /><span>GitHub</span></div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-[#0077b5]/10 transition-all group border border-transparent hover:border-[#0077b5]/30">
            <div className="flex items-center gap-2"><LinkedInIcon style={{ fontSize: 18 }} /><span>LinkedIn</span></div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/80 hover:translate-y-[-2px] transition-all">
            <Download size={16} /><span>Download CV</span>
          </a>
        </div>

        <div className="lg:hidden flex justify-center gap-3 w-full">
           <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="p-2 bg-text-primary/5 rounded-lg text-text-secondary hover:text-text-primary border border-text-primary/10">
             <Github size={16} />
           </a>
           <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0077b5]/10 rounded-lg text-text-secondary hover:text-[#0077b5] border border-[#0077b5]/20">
             <LinkedInIcon style={{ fontSize: 18 }} />
           </a>
        </div>
      </div>
    );
  };

  return (
    // CAMBIO IMPORTANTE: bg-bg-base y text-text-primary
    <div className="page w-full min-h-screen bg-bg-base text-text-primary overflow-x-hidden selection:bg-primary/30 selection:text-white relative transition-colors duration-500">
      
      {/* Fondo Decorativo */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(99,83,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,83,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_top_left,black_40%,transparent_70%)] z-0" />
      
      {/* Mobile Layout */}
      <div className="min-[881px]:hidden w-full flex flex-col items-center pt-6 pb-2 px-4 relative z-20">
        <div className="flex flex-col items-center gap-1 mb-2 w-full text-center">
          <h1 className="flex items-center justify-center gap-2 text-lg font-bold">
            <span className="bg-gradient-to-r from-text-primary via-primary to-text-primary bg-clip-text text-transparent">Matías Chacón</span>
            <FiCode className="text-primary animate-pulse shrink-0" size={18} />
          </h1>
          <p className="text-text-secondary text-[10px] font-mono tracking-wider h-3.5 opacity-80">{typingText}</p>
        </div>
        <div className="w-full max-w-[340px] flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden min-[881px]:block">
        <header className="fixed top-8 left-28 z-20 transition-all duration-300 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="flex items-center gap-3 mb-1 text-2xl font-bold group cursor-default">
            <div className="relative">
              <span className="bg-gradient-to-r from-text-primary via-primary to-text-primary bg-clip-text text-transparent group-hover:via-primary transition-all duration-500">Matías Chacón</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <FiCode className="text-primary animate-pulse" size={24} />
          </h1>
          <p className="text-text-secondary text-xs font-mono tracking-wider pl-1 border-l-2 border-primary/30 ml-1 px-2 h-4">{typingText}</p>
        </header>
        <div className="fixed top-28 left-28 z-20 w-[220px] flex flex-col gap-6 transition-all duration-300 animate-in zoom-in-95 duration-700 delay-150">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Logo Flotante */}
      <div className="fixed top-6 right-8 z-30 animate-in fade-in slide-in-from-top-4 duration-700 delay-500 max-[880px]:top-4 max-[880px]:right-4">
        {/* Nota: Si el logo es negro y estás en modo dark, no se va a ver. 
            Se recomienda tener un logo que sirva para ambos o aplicar un filtro.
            Por ahora lo dejamos igual. */}
        <img className="w-[80px] max-[880px]:w-[35px] object-contain opacity-80 hover:opacity-100 transition-all duration-500" src="/Logo Mati.svg" alt="Matias Logo" />
      </div>

      {/* Contenido Principal */}
      <div className="content-wrapper relative z-10 w-full min-h-screen transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]">
        {children}
      </div>

      <style>{`
        body:has([aria-expanded="true"]) header.fixed,
        body:has([aria-expanded="true"]) .fixed[class*="top-28"] {
          left: 18rem; 
        }
        @media (min-width: 881px) {
          body:has([aria-expanded="true"]) .content-wrapper {
            margin-left: var(--sidebar-expanded);
            width: calc(100% - var(--sidebar-expanded));
          }
        }
        @media (max-width: 880px) {
          .content-wrapper {
            margin-left: 0 !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}