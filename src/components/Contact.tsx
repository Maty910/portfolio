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
      className="contact-section snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Padding consistente con otras secciones */
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-500 shadow-lg shadow-primary/20 text-white">
              <MessageSquare size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight max-[880px]:text-2xl">
              {t('contact.title')}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('contact.sub')}
          </p>
        </div>

        {/* Grid de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[880px]:gap-3 pb-8 max-[880px]:pb-26">
          
          {/* Card Principal: Email */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-6 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-8 max-[880px]:p-5"
              style={{ animationDelay: '150ms' }}>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-text-primary mb-1 max-[880px]:text-lg">Let's work together</h3>
                <p className="text-text-secondary text-sm max-[880px]:text-xs">Have a project in mind? Send me a message.</p>
              </div>
              
              {/* Botones */}
              <div className="flex gap-2 w-full md:w-auto max-[880px]:flex-row">
                <a 
                  href="mailto:matychacong@gmail.com"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 group/mail no-underline"
                >
                  <Send size={18} className="group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5 transition-transform duration-500" />
                  <span className="max-[880px]:text-sm whitespace-nowrap">Send Email</span>
                </a>
                
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-primary hover:bg-text-primary/10 hover:border-text-primary/20 hover:scale-105 transition-all duration-500 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Fondo decorativo */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
          </div>

          {/* Card: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/matias-chacon-t934/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col max-[880px]:flex-row max-[880px]:items-center gap-4 max-[880px]:gap-3 p-5 max-[880px]:p-4 rounded-2xl bg-gradient-to-br from-text-primary/5 to-text-primary/2 border border-text-primary/10 hover:from-[#0a66c2]/10 hover:to-[#0a66c2]/5 hover:border-[#0a66c2]/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#0a66c2]/20 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 cursor-pointer no-underline"
            style={{ animationDelay: '250ms' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, #0a66c220, transparent 70%)' }} />

            {/* Icono */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0a66c2]/20 to-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#0a66c2] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10 max-[880px]:shrink-0 max-[880px]:mr-3">
              <Linkedin size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 mt-2 max-[880px]:mt-0 max-[880px]:flex-1">
              <h3 className="text-lg font-bold text-text-primary mb-1 max-[880px]:text-sm max-[880px]:mb-0.5">LinkedIn</h3>
              <p className="text-text-secondary text-xs max-[880px]:text-[10px]">Connect professionally</p>
            </div>

            {/* Arrow (colocado al final, usa ml-auto en mobile) */}
            <div className="ml-auto max-[880px]:ml-0 max-[880px]:shrink-0">
              <ArrowUpRight size={18} className="text-text-secondary group-hover:text-text-primary transition-all duration-500 max-[880px]:w-4 max-[880px]:h-4" />
            </div>
          </a>

          {/* Card: GitHub */}
          <a
            href="https://github.com/Maty910"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col max-[880px]:flex-row max-[880px]:items-center gap-4 max-[880px]:gap-3 p-5 max-[880px]:p-4 rounded-2xl bg-gradient-to-br from-text-primary/5 to-text-primary/2 border border-text-primary/10 hover:from-text-primary/10 hover:to-text-primary/5 hover:border-text-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-text-primary/10 transition-all ease-[cubic-bezier(0.25,0.1,0.25,1.0)] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 cursor-pointer no-underline"
            style={{ animationDelay: '350ms' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-text-primary/5" />

            {/* Icono */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-text-primary/10 to-text-primary/5 border border-text-primary/20 text-text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10 max-[880px]:shrink-0 max-[880px]:mr-3">
              <Github size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 mt-2 max-[880px]:mt-0 max-[880px]:flex-1">
              <h3 className="text-lg font-bold text-text-primary mb-1 max-[880px]:text-sm max-[880px]:mb-0.5">GitHub</h3>
              <p className="text-text-secondary text-xs max-[880px]:text-[10px]">View my code & projects</p>
            </div>

            {/* Arrow */}
            <div className="ml-auto max-[880px]:ml-0 max-[880px]:shrink-0">
              <ArrowUpRight size={18} className="text-text-secondary group-hover:text-text-primary transition-all duration-500 max-[880px]:w-4 max-[880px]:h-4" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}