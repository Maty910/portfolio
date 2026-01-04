import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink, Code2 } from 'lucide-react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const { t } = useLanguage();

  // Manejo de tecla Escape y bloqueo de scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  // Renderizamos el modal usando un portal directamente en el body
  return createPortal(
    <>
      {/* Backdrop con animación fade-in */}
      <div 
        className="fixed inset-0 bg-[rgba(6,6,10,0.9)] backdrop-blur-md z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300"
        role="dialog" 
        aria-modal="true" 
        onClick={onClose}
      >
        {/* Modal Container con animación scale y slide */}
        <div 
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0e17] rounded-2xl p-6 md:p-8 shadow-2xl relative border border-white/10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#6353f2]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#6353f2]/60"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Botón Cerrar (X) */}
          <button 
            className="absolute right-4 top-4 md:right-6 md:top-6 bg-white/5 text-[#a7a9be] flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200 hover:bg-white/10 hover:text-white hover:rotate-90 z-10 border-none"
            onClick={onClose} 
            aria-label="Close project dialog"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <header className="pr-12 mb-6 pb-4 border-b border-white/10">
            <h3 className="m-0 mb-3 text-white text-2xl md:text-3xl font-bold leading-tight">
              {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] m-0 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 items-start">
            
            {/* Columna Izquierda: Imagen */}
            {project.image && (
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Columna Derecha: Info & Links */}
            <div className="flex flex-col h-full">
              <h4 className="text-white mb-3 text-base md:text-lg font-semibold flex items-center gap-2">
                <Code2 size={18} className="text-[var(--primary-color)]" />
                Technologies
              </h4>
              
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-6 md:mb-8">
                {project.technologies.map((tech) => (
                  <li 
                    key={tech} 
                    className="bg-[rgba(99,83,242,0.15)] text-[#a7a0eb] px-3 py-1.5 rounded-md text-xs md:text-sm font-medium border border-[rgba(99,83,242,0.25)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-all duration-200 bg-[var(--primary-color)] text-white shadow-lg shadow-[rgba(99,83,242,0.3)] hover:bg-[#5243d6] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(99,83,242,0.4)]"
                  >
                    <ExternalLink size={18} />
                    {t('projects.links.live') || 'Live Demo'}
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-all duration-200 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                  >
                    <Github size={18} />
                    {t('projects.links.code') || 'View Code'}
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>,
    document.body
  );
};

export default ProjectModal;