import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, ArrowUpRight, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('matychacong@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact"
      className="contact-section snap-start min-h-screen w-full flex flex-col justify-center relative
                max-[880px]:min-h-[calc(100vh-80px)]"
    >
      <div className="w-full max-w-[850px] px-6 md:px-12 py-12 flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8 max-[880px]:max-w-full">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#6353f2] to-[#8b5cf6] shadow-lg shadow-[#6353f2]/20 text-white">
              <MessageSquare size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-[880px]:text-2xl">
              {t('contact.title')}
            </h2>
          </div>
          <p className="text-[#a7a9be] text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('contact.sub')}
          </p>
        </div>

        {/* Grid de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[880px]:gap-3">
          
          {/* Card Principal: Email */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6353f2]/20 to-[#8b5cf6]/5 border border-[#6353f2]/30 p-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:border-[#6353f2]/50 hover:shadow-xl hover:shadow-[#6353f2]/20 animate-in fade-in slide-in-from-bottom-8 max-[880px]:p-5"
              style={{ animationDelay: '150ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 max-[880px]:text-lg">Let's work together</h3>
                <p className="text-[#a7a9be] text-sm max-[880px]:text-xs">Have a project in mind? Send me a message.</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <a 
                  href="mailto:matychacong@gmail.com"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#6353f2] text-white font-bold hover:bg-[#7c6aff] hover:scale-105 hover:shadow-lg hover:shadow-[#6353f2]/30 transition-all duration-500 group/mail"
                >
                  <Send size={18} className="group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5 transition-transform duration-500" />
                  <span className="max-[880px]:text-sm">Send Email</span>
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500"
                  title="Copy Email"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
            </div>
            {/* Fondo decorativo */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#6353f2]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
          </div>

          {/* Card: LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/matias-chacon-t934/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:from-[#0a66c2]/10 hover:to-[#0a66c2]/5 hover:border-[#0a66c2]/30 hover:scale-105 hover:shadow-xl hover:shadow-[#0a66c2]/20 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: '250ms' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, #0a66c220, transparent 70%)' }} />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0a66c2]/20 to-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#0a66c2] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Linkedin size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
              </div>
              <ArrowUpRight size={18} className="text-[#a7a9be] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 relative z-10 max-[880px]:text-base">LinkedIn</h3>
            <p className="text-[#a7a9be] text-xs relative z-10">Connect professionally</p>
          </a>

          {/* Card: GitHub */}
          <a 
            href="https://github.com/Maty910"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:from-white/[0.08] hover:to-white/[0.04] hover:border-white/30 hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: '350ms' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, #ffffff15, transparent 70%)' }} />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Github size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
              </div>
              <ArrowUpRight size={18} className="text-[#a7a9be] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 relative z-10 max-[880px]:text-base">GitHub</h3>
            <p className="text-[#a7a9be] text-xs relative z-10">View my code & projects</p>
          </a>

        </div>

      </div>
    </section>
  );
}