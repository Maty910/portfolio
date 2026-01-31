import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ArrowRight, FolderOpen } from 'lucide-react';
import projectsStaticData from '../data/projectsData';
import type { Project } from '../types';

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mapeo de datos + Traducciones
  const projects: Project[] = projectsStaticData.map((p, index) => ({
    id: index + 1,
    slug: p.slug,
    image: p.image, // Mantener array completo para el modal
    technologies: p.technologies,
    githubUrl: p.githubUrl,
    liveUrl: p.liveUrl || undefined,
    title: t(`projects.items.${p.slug}.title`) || `${t('projects.defaultTitle')} ${p.slug}`,
    description: t(`projects.items.${p.slug}.description`) || t('projects.noDescription'),
  }));

  // Función helper para obtener la primera imagen
  const getFirstImage = (image: string | string[] | undefined): string | undefined => {
    if (!image) return undefined;
    return Array.isArray(image) ? image[0] : image;
  };

  return (
    <section 
      id="projects"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Padding responsivo para sidebar */
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header de Sección */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            {/* FIX: Usamos text-white para que el icono resalte sobre el degradado violeta en ambos temas */}
            <div className="p-2 rounded-xl gradient-primary-br shadow-lg shadow-primary/20 text-white">
              <FolderOpen size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('projects.cta')}
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {projects.map((project) => (
            <article 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer
                         /* Estilos base Glass adaptables */
                         bg-text-primary/5 border border-text-primary/10
                         transition-all duration-300 ease-out
                         /* Hover Effects */
                         hover:bg-text-primary/10 hover:border-primary/30 
                         hover:shadow-lg hover:-translate-y-1
                         active:scale-[0.98]"
            >
              {/* Imagen con Overlay */}
              <div className="relative h-48 overflow-hidden w-full bg-bg-base">
                {getFirstImage(project.image) ? (
                  <img 
                    src={getFirstImage(project.image)} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-bg-base">
                    <FolderOpen className="text-text-muted" size={40} />
                  </div>
                )}
                
                {/* Gradiente de superposición para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Badge "Ver más" al hover (Desktop) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg-base/40 backdrop-blur-[2px]">
                  <span className="relative px-4 py-2 rounded-full bg-primary text-white text-xs font-bold tracking-wide shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 btn-shiny">
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                    <span className="relative z-20">{t('projects.viewDetails')}</span>
                  </span>
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="flex flex-col flex-grow p-5 gap-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Links Rápidos (Iconos) */}
                  <div className="flex gap-2 shrink-0">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-text-primary/10 
                                   /* ✅ FIX: Focus keyboard navigation (WCAG 2.4.7) */
                                   focus-visible:outline-none focus-visible:ring-2 
                                   focus-visible:ring-primary focus-visible:ring-offset-2 
                                   focus-visible:ring-offset-bg-base
                                   transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                        title={t('projects.links.code')}
                        aria-label={`${t('projects.links.code')} - ${project.title}`}
                      >
                        <Github size={18} aria-hidden="true" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg text-text-secondary hover:text-primary hover:bg-text-primary/10 
                                   /* ✅ FIX: Focus keyboard navigation (WCAG 2.4.7) */
                                   focus-visible:outline-none focus-visible:ring-2 
                                   focus-visible:ring-primary focus-visible:ring-offset-2 
                                   focus-visible:ring-offset-bg-base
                                   transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                        title={t('projects.links.live')}
                        aria-label={`${t('projects.links.live')} - ${project.title}`}
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Mini Tags */}
                <div className="mt-auto pt-3 flex flex-wrap gap-2 max-w-full overflow-hidden">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary 
                                 text-[10px] font-medium tracking-wide uppercase
                                 /* ✅ FIX: Prevenir overflow en mobile */
                                 max-w-[120px] truncate"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-text-primary/5 border border-text-primary/10 text-text-secondary text-[10px] font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link - Github */}
        <div className="mt-2 text-center md:text-left animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          <a 
            href="https://github.com/Maty910" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium text-sm group no-underline px-4 py-2 hover:bg-text-primary/5 rounded-lg -ml-4"
          >
            {t('projects.viewAll')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Modal Project */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};