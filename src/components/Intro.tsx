import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IntroProps {
  onFinish: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Efecto del contador 0 -> 100
  useEffect(() => {
    const duration = 2000; 
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration + 300);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, duration + 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-bg-base overflow-hidden cursor-wait
        transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]
        ${isExiting ? 'opacity-0 scale-110 pointer-events-none blur-sm' : 'opacity-100 scale-100'}
      `}
    >
      
      {/* 1. Fondo con textura sutil animada */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(#6353f2 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} 
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* LOGO CON EFECTO DE REVELADO (Centrado Arreglado) */}
        <div className={`relative transition-all duration-700 delay-100 ${isExiting ? 'translate-y-[-20px] opacity-0' : 'translate-y-0 opacity-100'}`}>
          {/* Contenedor Cuadrado Fijo para asegurar centro geométrico */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            
            {/* Anillos de pulso: Usamos un contenedor absoluto centrado para la animación */}
            {/* Anillo 1 */}
            <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            
            {/* Anillo 2 (Con delay) */}
            <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_400ms]" />
            
            {/* Logo Central (Flotando encima) */}
            <img 
              src="/Logo Mati.svg" 
              alt={t('alt.logo')}
              className="w-24 h-24 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(99,83,242,0.6)]"
            />
          </div>
        </div>

        {/* TEXTO DE BIENVENIDA */}
        <div className="text-center space-y-3 overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter flex flex-col items-center">
            <span className="block overflow-hidden h-[1.3em]">
              <span className={`block animate-slide-up-reveal delay-300 ${isExiting ? 'translate-y-[100%]' : ''}`}>
                {t('intro.name').split(' ')[0]} <span className="text-primary">{t('intro.name').split(' ')[1]}</span>
              </span>
            </span>
          </h1>
          
          <div className="flex items-center gap-2 justify-center text-text-secondary text-xs font-mono tracking-[0.2em] uppercase">
            <Code2 size={14} className="text-primary animate-pulse" />
            <span className="opacity-0 animate-[fade-in_0.5s_ease-out_0.5s_forwards]">{t('intro.role')}</span>
          </div>
        </div>

        {/* BARRA DE PROGRESO */}
        <div className="w-64 mt-2 relative">
          <div className="flex justify-between text-[10px] font-mono text-text-secondary mb-1.5 uppercase tracking-wide">
            <span>{t('intro.loading')}</span>
            <span className="text-primary font-bold">{Math.round(count)}%</span>
          </div>
          
          <div className="h-0.5 w-full bg-text-primary/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary shadow-[0_0_10px_rgba(99,83,242,0.8)] transition-all duration-75 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slide-up-reveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};