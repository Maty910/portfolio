import React, { useEffect, useState } from 'react';

interface IntroProps {
  onFinish: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Duración total un poco más corta para que no sea tedioso
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // 2. Desmontar
    const exitTimer = setTimeout(() => {
      onFinish();
    }, 2700);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-bg-base 
        transition-opacity duration-700 ease-in-out
        ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="relative flex flex-col items-center">
        
        {/* LOGO MATI - Animado */}
        <div className="relative mb-8 w-24 h-24 md:w-32 md:h-32">
          {/* Resplandor violeta detrás */}
          <div className="absolute inset-0 bg-[#6353f2] blur-2xl opacity-20 animate-pulse rounded-full" />
          
          <img 
            src="/Logo Mati.svg" 
            alt="Logo Matias Chacon"
            className="w-full h-full object-contain relative z-10 animate-[bounce-gentle_3s_infinite_ease-in-out] drop-shadow-[0_0_15px_rgba(99,83,242,0.5)]"
          />
        </div>

        {/* Nombre con efecto de revelado */}
        <div className="overflow-hidden mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight animate-[slide-up_0.8s_ease-out_forwards]">
            Matías <span className="text-[#6353f2]">Chacón</span>
          </h1>
        </div>

        {/* Línea de carga */}
        <div className="w-48 h-1 bg-[#1e1e2d] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#6353f2] to-[#a8a1ff] animate-[loading_2.2s_ease-in-out_forwards] w-0 rounded-full" />
        </div>

        <div className=''></div>

      </div>

      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};