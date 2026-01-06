import { useEffect, useState, type PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi';
import { ExternalLink, Github, Cpu, Database, Mail, MapPin, Check, Copy, GitCommit, GitPullRequest } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';
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
  return <span className="font-mono text-xs text-white">{time} AR</span>;
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
    const cardBaseClass = "bg-[#6353f2]/5 p-4 rounded-2xl border border-[#6353f2]/20 backdrop-blur-sm w-full transition-all duration-300 hover:bg-[#6353f2]/10 hover:border-[#6353f2]/30 flex flex-col justify-center min-h-[120px]";
    const wrapperClass = "flex flex-col gap-4 w-full animate-in fade-in slide-in-from-left-4 duration-700 max-[880px]:animate-in max-[880px]:fade-in max-[880px]:slide-in-from-top-2";

    if (activeSection === 'projects') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-[#6353f2] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Github size={16} /> Dev Activity
            </h3>
            
            {/* GitHub Stats Mock - Números genéricos pero realistas */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col bg-white/5 p-2 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-[#a7a9be] text-[10px] mb-1">
                  <GitCommit size={12} />
                  <span>Commits</span>
                </div>
                <span className="text-white font-bold text-sm">450+</span>
                <span className="text-[9px] text-[#6353f2]">Last Year</span>
              </div>
              
              <div className="flex flex-col bg-white/5 p-2 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-[#a7a9be] text-[10px] mb-1">
                  <GitPullRequest size={12} />
                  <span>PRs</span>
                </div>
                <span className="text-white font-bold text-sm">32</span>
                <span className="text-[9px] text-green-400">Merged</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[10px] text-[#a7a9be]">Building: <span className="text-white">Portfolio V2</span></p>
            </div>
          </div>
        </div>
      );
    } 
    
    if (activeSection === 'skills') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-[#6353f2] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Cpu size={16} /> Tech Ecosystem
            </h3>
            
            {/* Tech Categorizada - Sin porcentajes, solo facts */}
            <div className="flex flex-col gap-3 w-full">
              
              {/* Frontend Row */}
              <div className="flex items-center gap-2">
                <div className="bg-[#61dafb]/10 p-1.5 rounded-lg border border-[#61dafb]/20">
                  <SiReact size={14} className="text-[#61dafb]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">React</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">Tailwind</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">Next.js</span>
                </div>
              </div>

              {/* Backend Row */}
              <div className="flex items-center gap-2">
                <div className="bg-[#8cc84b]/10 p-1.5 rounded-lg border border-[#8cc84b]/20">
                  <SiNodedotjs size={14} className="text-[#8cc84b]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">Node</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">Express</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">API REST</span>
                </div>
              </div>

              {/* Core/Data Row */}
              <div className="flex items-center gap-2">
                <div className="bg-[#3178c6]/10 p-1.5 rounded-lg border border-[#3178c6]/20">
                  <SiTypescript size={14} className="text-[#3178c6]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">TypeScript</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#a7a9be]">SQL</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    } 
    
    if (activeSection === 'contact') {
      return (
        <div className={wrapperClass}>
          <div className={cardBaseClass}>
            <h3 className="text-[#6353f2] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Database size={16} /> Status & Location
            </h3>
            
            <div className="flex flex-col gap-3 w-full">
              
              {/* 1. Available for Hire (Recuperado) */}
              <div className="flex items-center gap-2 bg-green-500/10 p-2 rounded-lg border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Available for hire</span>
              </div>

              {/* 2. Location & Time */}
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                <div className="flex items-center gap-2 text-[#a7a9be] text-xs">
                  <MapPin size={14} />
                  <span>BA, Arg</span>
                </div>
                <LocalTime />
              </div>

              {/* 3. Copy Email */}
              <button 
                onClick={handleCopyEmail}
                className="flex items-center justify-between w-full bg-[#6353f2]/10 hover:bg-[#6353f2]/20 border border-[#6353f2]/30 p-2 rounded-lg transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#6353f2]" />
                  <span className="text-[10px] text-white font-medium">matychacong@gmail.com</span>
                </div>
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-[#a7a9be] group-hover:text-white" />}
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
          <div className="absolute inset-[-3px] max-[880px]:inset-[-2px] bg-gradient-to-r from-[#6353f2] via-purple-500 to-[#6353f2] rounded-full opacity-60 blur-sm group-hover:opacity-90 group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite]" />
          <div className="relative w-[110px] h-[110px] max-[880px]:w-[80px] max-[880px]:h-[80px] rounded-full overflow-hidden border-[3px] max-[880px]:border-[2px] border-[#0f0e17] bg-[#0f0e17] shadow-2xl">
            <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" src="/images/FOTO DE PERFIL.jpg" alt="Profile" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6353f2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0f0e17] px-2 py-0.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/10 transition-transform hover:scale-105 cursor-help whitespace-nowrap z-10">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
            <span className="text-[9px] font-bold text-green-400 tracking-tight">Open to work</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <div className="flex-1 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 hover:border-[#6353f2]/40 transition-colors group flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-white">3+</p>
              <p className="text-[9px] text-[#a7a9be] uppercase font-semibold">Years</p>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 hover:border-[#6353f2]/40 transition-colors group flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-white">10+</p>
              <p className="text-[9px] text-[#a7a9be] uppercase font-semibold">Projects</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-2 pt-2 border-t border-white/5 w-full">
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

        <div className="lg:hidden flex justify-center gap-3 w-full">
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-[#a7a9be] hover:text-white border border-white/10">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0077b5]/10 rounded-lg text-[#a7a9be] hover:text-[#0077b5] border border-[#0077b5]/20">
            <LinkedInIcon style={{ fontSize: 18 }} />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="page w-full min-h-screen bg-[#0f0e17] text-white overflow-x-hidden selection:bg-[#6353f2]/30 selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(99,83,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,83,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_top_left,black_40%,transparent_70%)] z-0" />
      
      {/* Mobile Layout */}
      <div className="min-[881px]:hidden w-full flex flex-col items-center pt-6 pb-2 px-4 relative z-20">
        <div className="flex flex-col items-center gap-1 mb-2 w-full text-center">
          <h1 className="flex items-center justify-center gap-2 text-lg font-bold">
            <span className="bg-gradient-to-r from-white via-[#a7a0eb] to-white bg-clip-text text-transparent">Matías Chacón</span>
            <FiCode className="text-[#6353f2] animate-pulse shrink-0" size={18} />
          </h1>
          <p className="text-[#a7a9be] text-[10px] font-mono tracking-wider h-3.5 opacity-80">{typingText}</p>
        </div>
        <div className="w-full max-w-[340px] flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden min-[881px]:block">
        <header className="fixed top-8 left-28 z-20 transition-all animate-in fade-in slide-in-from-top-4 duration-700">
          <p className="text-[#a7a9be] text-xs font-mono tracking-wider pl-1 border-l-2 border-[#6353f2]/30 ml-1 px-2 h-4">{typingText}</p>
        </header>
        <div className="fixed top-28 left-28 z-20 w-[220px] flex flex-col gap-6 transition-all animate-in zoom-in-95 duration-700 delay-150">
          {renderSidebarContent()}
        </div>
      </div>

      <div className="fixed top-6 right-8 z-30 animate-in fade-in slide-in-from-top-4 duration-700 delay-500 max-[880px]:top-4 max-[880px]:right-4">
        <img className="w-[80px] max-[880px]:w-[35px] object-contain opacity-80 hover:opacity-100 transition-all duration-500" src="/Logo Mati.svg" alt="Matias Logo" />
      </div>

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