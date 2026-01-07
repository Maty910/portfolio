import { useLanguage } from '../context/LanguageContext';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
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
      className="snap-start min-h-screen w-full flex flex-col justify-center relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#6353f2]/10 border border-[#6353f2]/20 text-[#6353f2]">
              <Mail size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('contact.title')}
            </h2>
          </div>
          <p className="text-[#a7a9be] text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('contact.sub')}
          </p>
        </div>

        {/* Grid de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          
          {/* Card Principal: Email */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6353f2]/20 to-[#8b5cf6]/5 border border-[#6353f2]/30 p-6 md:p-8 transition-all duration-300 hover:border-[#6353f2]/50 hover:shadow-[0_0_30px_rgba(99,83,242,0.15)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Let's work together</h3>
                <p className="text-[#a7a9be] text-sm">Have a project in mind? Send me a message.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <a 
                  href="mailto:matychacong@gmail.com"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6353f2] text-white font-bold hover:bg-[#5243d6] transition-colors shadow-lg shadow-[#6353f2]/20"
                >
                  <Mail size={18} />
                  Send Email
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
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
            className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-[#0a66c2]/20 text-[#0a66c2] group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <ArrowUpRight size={20} className="text-[#a7a9be] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
            <p className="text-[#a7a9be] text-xs">Connect professionally & view profile</p>
          </a>

          {/* Card: GitHub */}
          <a 
            href="https://github.com/Maty910"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <ArrowUpRight size={20} className="text-[#a7a9be] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
            <p className="text-[#a7a9be] text-xs">Check out my code & contributions</p>
          </a>

        </div>

      </div>
    </section>
  );
}