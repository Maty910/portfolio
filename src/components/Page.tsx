import type { PropsWithChildren } from 'react';
import { FiCode, FiGithub, FiMail, } from 'react-icons/fi';
import { Download, ExternalLink, Github } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page container relative min-h-screen bg-[#0f0e17] text-white overflow-x-hidden selection:bg-[#6353f2]/30 selection:text-white">
      
      {/* --- 1. FONDO DECORATIVO --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(99,83,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,83,242,0.1)_1px,transparent_1px)] bg-size-50px_50px mask[radial-gradient(ellipse_at_top_left,black_40%,transparent_70%)]" />
      
      {/* --- 2. HEADER IZQUIERDO (Identidad) --- */}
      <header className="min-[881px]:fixed top-8 left-28 z-20 transition-all max-[880px]:relative max-[880px]:left-0 max-[880px]:top-0 max-[880px]:mb-6 max-[880px]:px-6 max-[880px]:pt-6 max-[880px]:pb-2 animate-in fade-in slide-in-from-top-4 duration-100">
        <h1 className="flex items-center gap-2 mb-1 text-2xl font-bold max-[880px]:text-xl group cursor-default">
          <div className="relative">
            <span className="bg-linear-to-r from-white via-[#a7a0eb] to-white bg-clip-text text-transparent group-hover:via-[#6353f2] transition-all duration-500">
              Matías Chacón
            </span>
            {/* Subrayado animado */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.2 bg-[#6353f2] group-hover:w-full transition-all duration-500" />
          </div>
          <FiCode className="text-[#6353f2] text-lg animate-pulse" />
        </h1>
        <p className="text-[#a7a9be] text-xs font-medium tracking-wide pl-1 border-l-2 border-[#6353f2]/30 ml-1 px-2">
          Full-Stack Developer
        </p>
      </header>

      {/* --- 3. SIDEBAR / PERFIL (Desktop Fijo) --- */}
      <div className="min-[881px]:fixed top-24 left-28 z-20 transition-all duration-300 max-[880px]:relative max-[880px]:left-0 max-[880px]:top-0 max-[880px]:mb-6 max-[880px]:mx-auto max-[880px]:w-fit animate-in zoom-in-95">
        
        {/* FOTO DE PERFIL */}
        <div className="relative group">
          <div className="absolute justify-self-center -inset-0.75 bg-linear-to-r from-[#6353f2] via-purple-500 to-[#6353f2] rounded-full opacity-60 blur-sm group-hover:opacity-90 group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite] w-31.5 h-31.5 max-[880px]:w-28 max-[880px]:h-28" />
          <div className="relative w-30 h-30 max-[880px]:w-[105px] max-[880px]:h-[105px] justify-self-center rounded-full overflow-hidden border-2 border-purple-600/20 shadow-xl">
            <img 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
              src="/images/FOTO DE PERFIL.jpg" 
              alt="Foto de perfil de Matías" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#6353f2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute bottom-0 left-18 flex items-center gap-1.5 bg-[#0f0e17]/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-green-500/30 shadow-lg shadow-green-500/20 animate-bounce duration-500 max-[880px]:left-16 max-[880px]:px-2 max-[880px]:py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-green-400 whitespace-nowrap max-[880px]:text-[9px]">Open to work</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-2 mt-4 w-55">

          {/* Quick Stats Grid */}
          <div className="flex gap-2">
            
            {/* 1. Years Card */}
            <div className="flex-0 w-12 h-15 bg-linear-to-br mb-5 from-[#6353f2]/10 to-[#6353f2]/5 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#6353f2]/20 hover:border-[#6353f2]/60 hover:shadow-lg hover:shadow-[#6353f2]/10 transition-all duration-300 group flex flex-col items-center justify-center">
              <p className="text-2xl font-extrabold bg-linear-to-r from-[#6353f2] to-purple-400 bg-clip-text text-transparent">2+</p>
              <p className="text-[9px] text-[#a7a9be] uppercase tracking-wider font-semibold mt-0.5">Years</p>
            </div>

            
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="hidden lg:flex flex-col gap-2 pt-4 border-t border-white/5 w-full">
          <p className="text-[10px] text-[#6353f2] font-bold uppercase tracking-widest mb-1">Connect</p>
          
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#a7a9be] hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
            <div className="flex items-center gap-2">
              <Github size={16} />
              <span>GitHub</span>
            </div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#a7a9be] hover:text-white hover:bg-[#0077b5]/10 transition-all group border border-transparent hover:border-[#0077b5]/30">
            <div className="flex items-center gap-2">
              <LinkedInIcon style={{ fontSize: 18 }} />
              <span>LinkedIn</span>
            </div>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" 
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#6353f2] text-white text-sm font-semibold shadow-lg shadow-[#6353f2]/20 hover:bg-[#5243d6] hover:translate-y-[-2px] transition-all">
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>

      </div>

      {/* --- 4. LOGO FLOTANTE --- */}
      <div className="absolute top-6 right-8 z-20 max-[880px]:right-4 max-[880px]:top-4 animate-in fade-in slide-in-from-top-4 duration-700 delay-500">
        <img 
          className="w-[90px] max-[880px]:w-[60px] object-contain transition-all duration-300 hover:scale-110 hover:rotate-3 hover:drop-shadow-[0_0_15px_rgba(99,83,242,0.5)]" 
          src="/Logo Mati.svg" 
          alt="Logo de Matías" 
        />
      </div>

      {/* --- 5. FABs MOBILE --- */}
      <div className="lg:hidden fixed bottom-[calc(var(--sidebar-mobile-height)+1rem)] right-6 z-50 flex flex-col gap-3 animate-in slide-in-from-bottom-8 duration-500 delay-700">
        <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" 
          className="w-12 h-12 bg-[#16161e] border border-white/10 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-all hover:scale-110">
          <FiGithub className="text-white text-xl" />
        </a>
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" 
          className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-all hover:scale-110">
          <LinkedInIcon style={{ fontSize: 20 }} />
        </a>
        <a href="mailto:matias@email.com" 
          className="w-14 h-14 bg-[#6353f2] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#6353f2]/30 active:scale-95 transition-all hover:scale-110">
          <FiMail className="text-white text-xl" />
        </a>
      </div>

      {/* --- 6. CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
      <style>
        {/* Custom Scrollbar Styles */}
        {
          `
          body:has([aria-expanded="true"]) header.min-\\[881px\\]\\:fixed,
          body:has([aria-expanded="true"]) .min-\\[881px\\]\\:fixed[class*="top-24"] {
            left: 16rem;
          }
          `
        }
      </style>
    </div>
  )
}