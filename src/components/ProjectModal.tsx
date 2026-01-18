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
        // Usamos black/80 fijo para el backdrop porque en light mode también querés oscurecer el fondo
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300"
        role="dialog" 
        aria-modal="true" 
        onClick={onClose}
      >
        {/* Modal Container */}
        <div 
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300
                     bg-bg-base border border-text-primary/10
                     [&::-webkit-scrollbar]:w-2 
                     [&::-webkit-scrollbar-track]:bg-transparent 
                     [&::-webkit-scrollbar-thumb]:bg-primary/30 
                     [&::-webkit-scrollbar-thumb]:rounded-full 
                     hover:[&::-webkit-scrollbar-thumb]:bg-primary/60"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Botón Cerrar (X) */}
          <button 
            className="absolute right-4 top-4 md:right-6 md:top-6 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200 z-10 border-none
                       bg-text-primary/5 text-text-secondary
                       hover:bg-text-primary/10 hover:text-text-primary hover:rotate-90"
            onClick={onClose} 
            aria-label="Close project dialog"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <header className="pr-12 mb-6 pb-4 border-b border-text-primary/10">
            <h3 className="m-0 mb-3 text-text-primary text-2xl md:text-3xl font-bold leading-tight">
              {project.title}
            </h3>
            <p className="text-text-secondary m-0 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 items-start">
            
            {/* Columna Izquierda: Imagen */}
            {project.image && (
              <div className="relative rounded-xl overflow-hidden border border-text-primary/10 shadow-lg group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Columna Derecha: Info & Links */}
            <div className="flex flex-col h-full">
              <h4 className="text-text-primary mb-3 text-base md:text-lg font-semibold flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                Technologies
              </h4>
              
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-6 md:mb-8">
                {project.technologies.map((tech) => (
                  <li 
                    key={tech} 
                    className="bg-primary/10 text-primary px-3 py-1.5 rounded-md text-xs md:text-sm font-medium border border-primary/20"
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
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-all duration-200 
                               bg-primary text-white shadow-lg shadow-primary/30 
                               hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
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
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-all duration-200 
                               bg-text-primary/5 text-text-primary border border-text-primary/10 
                               hover:bg-text-primary/10 hover:border-text-primary/20"
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