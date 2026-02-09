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
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl gradient-primary-br shadow-lg shadow-primary/20 text-text-primary">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[880px]:gap-3 pb-8 max-[880px]:pb-60">
          
          {/* Card Principal: Email */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-text-primary/10 p-6 transition-all duration-300 ease-out hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] animate-in fade-in slide-in-from-bottom-8 max-[880px]:p-5"
              style={{ animationDelay: '150ms' }}>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-text-primary mb-1 max-[880px]:text-lg">{t('contact.cardTitle')}</h3>
                <p className="text-text-secondary text-sm max-[880px]:text-xs">{t('contact.cardSubtitle')}</p>
              </div>
              
              {/* Botones */}
              <div className="flex gap-2 w-full md:w-auto max-[880px]:flex-row">
                <a 
                  href="mailto:matychacong@gmail.com"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-text-primary font-bold hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 group group/mail btn-shiny no-underline"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/mail:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                  <Send size={18} className="relative z-20 group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5 transition-transform duration-500" />
                  <span className="relative z-20 max-[880px]:text-sm whitespace-nowrap">{t('contact.sendEmail')}</span>
                </a>
                
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center min-w-[44px] min-h-[44px] px-3 py-2.5 rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-primary hover:bg-text-primary/10 hover:border-text-primary/20 hover:scale-105 transition-all duration-500 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
                  title={t('contact.copyEmail')}
                  aria-label={copied ? 'Email copied to clipboard' : 'Copy email address to clipboard'}
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
            className="group relative flex flex-col max-[880px]:flex-row max-[880px]:items-center gap-4 max-[880px]:gap-3 p-5 max-[880px]:p-4 rounded-xl bg-text-primary/5 border border-text-primary/10 transition-all duration-300 ease-out hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] overflow-hidden animate-in fade-in slide-in-from-bottom-8 cursor-pointer no-underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ animationDelay: '250ms' }}
            aria-label="Visit my LinkedIn profile"
          >
            {/* Icono */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[var(--color-linkedin,#0a66c2)]/20 to-[var(--color-linkedin,#0a66c2)]/10 border border-[var(--color-linkedin,#0a66c2)]/20 transition-all duration-300 relative z-10 max-[880px]:shrink-0 max-[880px]:mr-3" style={{ color: 'var(--color-linkedin, #0a66c2)' }}>
              <Linkedin size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 mt-2 max-[880px]:mt-0 max-[880px]:flex-1">
              <h3 className="text-lg font-bold text-text-primary mb-1 max-[880px]:text-sm max-[880px]:mb-0.5">{t('contact.linkedinTitle')}</h3>
              <p className="text-text-secondary text-xs max-[880px]:text-[10px]">{t('contact.linkedin')}</p>
            </div>

            {/* Arrow (colocado al final, usa ml-auto en mobile) */}
            <div className="ml-auto max-[880px]:ml-0 max-[880px]:shrink-0">
              <ArrowUpRight size={18} className="text-text-secondary group-hover:text-text-primary transition-all duration-300 max-[880px]:w-4 max-[880px]:h-4" />
            </div>
          </a>

          {/* Card: GitHub */}
          <a
            href="https://github.com/Maty910"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col max-[880px]:flex-row max-[880px]:items-center gap-4 max-[880px]:gap-3 p-5 max-[880px]:p-4 rounded-xl bg-text-primary/5 border border-text-primary/10 transition-all duration-300 ease-out hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] overflow-hidden animate-in fade-in slide-in-from-bottom-8 cursor-pointer no-underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ animationDelay: '350ms' }}
            aria-label="Visit my GitHub profile"
          >
            {/* Icono */}
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-text-primary/10 to-text-primary/5 border border-text-primary/20 text-text-primary transition-all duration-300 relative z-10 max-[880px]:shrink-0 max-[880px]:mr-3">
              <Github size={22} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 mt-2 max-[880px]:mt-0 max-[880px]:flex-1">
              <h3 className="text-lg font-bold text-text-primary mb-1 max-[880px]:text-sm max-[880px]:mb-0.5">{t('contact.githubTitle')}</h3>
              <p className="text-text-secondary text-xs max-[880px]:text-[10px]">{t('contact.github')}</p>
            </div>

            {/* Arrow */}
            <div className="ml-auto max-[880px]:ml-0 max-[880px]:shrink-0">
              <ArrowUpRight size={18} className="text-text-secondary group-hover:text-text-primary transition-all duration-300 max-[880px]:w-4 max-[880px]:h-4" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}