import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalizamos las imágenes: Si tu objeto project tiene 'images' (array) lo usa,
  // sino usa 'image' (string) como array de 1 elemento.
  // Podés simular más imágenes repitiendo la principal si querés probar el slider:
  // const images = project ? [project.image, project.image, project.image] : [];
  const images = project ? (Array.isArray(project.image) ? project.image.filter(img => img != null) : [project.image].filter(img => img != null)) : [];

  const hasMultipleImages = images.length > 1;

  // Reset del index cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Manejo de navegación (Teclado y Click)
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Manejo de eventos de teclado
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, images.length]); // Agregamos dependencias

  if (!project) return null;

  return createPortal(
    <>
      <div 
        className="fixed inset-0 bg-bg-base/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300"
        role="dialog" 
        aria-modal="true" 
        onClick={onClose}
      >
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
          
          {/* Botón Cerrar */}
          <button 
            className="absolute right-4 top-4 md:right-6 md:top-6 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200 z-10 border-none
                       bg-text-primary/5 text-text-secondary
                       hover:bg-text-primary/10 hover:text-text-primary hover:rotate-90"
            onClick={onClose} 
            aria-label={t('projectModal.closeAria')}
            title={t('projectModal.closeTitle')}
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

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 items-start">
            
            {/* --- CAROUSEL / SLIDER DE IMÁGENES --- */}
            <div className="relative rounded-xl overflow-hidden border border-text-primary/10 shadow-lg bg-bg-base group select-none aspect-video">
              
              {images.length > 0 ? (
                <>
                  <img 
                    src={images[currentImageIndex]} 
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-500"
                  />
                  
                  {/* Controles del Slider (Solo si hay más de 1 imagen) */}
                  {hasMultipleImages && (
                    <>
                      {/* Flecha Izquierda */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="carousel-arrow absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                   bg-bg-base/80 text-text-primary backdrop-blur-md border border-text-primary/10
                                   transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 max-[880px]:opacity-100"
                        aria-label={t('projectModal.previousImage') || 'Previous image'}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      {/* Flecha Derecha */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="carousel-arrow absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                   bg-bg-base/80 text-text-primary backdrop-blur-md border border-text-primary/10
                                   transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 max-[880px]:opacity-100"
                        aria-label={t('projectModal.nextImage') || 'Next image'}
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Indicadores (Dots) */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                        {images.map((_: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                              ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-white/50 hover:bg-white'}`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-text-primary/5 text-text-secondary text-sm">
                  {t('projectModal.noImages')}
                </div>
              )}
            </div>

            {/* Columna Derecha: Info & Links */}
            <div className="flex flex-col h-full">
              <h4 className="text-text-primary mb-3 text-base md:text-lg font-semibold flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                {t('projects.modal.technologies') || 'Technologies'}
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
                    className="group btn-shiny flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-all duration-200 
                               bg-primary shadow-lg shadow-primary/30 
                               hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 relative overflow-hidden"
                    style={{ color: 'var(--color-on-primary)' }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                    <ExternalLink size={18} className="relative z-20" />
                    <span className="relative z-20">{t('projects.links.live') || 'Live Demo'}</span>
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