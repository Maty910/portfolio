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
    image: p.image,
    technologies: p.technologies,
    githubUrl: p.githubUrl,
    liveUrl: p.liveUrl || undefined,
    title: t(`projects.items.${p.slug}.title`) || `Project ${p.slug}`,
    description: t(`projects.items.${p.slug}.description`) || 'No description available.',
  }));

  return (
    <section 
      id="projects"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Mismos ajustes de padding que la Home para evitar saltos */
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal (Consistente con Home) */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header de Sección con Animación de Entrada */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#6353f2]/10 border border-[#6353f2]/20 text-[#6353f2]">
              <FolderOpen size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-[#a7a9be] text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('projects.cta')}
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {projects.map((project) => (
            <article 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col bg-white/5 border border-white/5 rounded-2xl overflow-hidden cursor-pointer
                         transition-all duration-300 ease-out
                         hover:bg-white/[0.07] hover:border-[#6353f2]/30 hover:shadow-[0_8px_30px_rgba(99,83,242,0.1)] hover:-translate-y-1
                         active:scale-[0.98]"
            >
              {/* Imagen con Overlay */}
              <div className="relative h-48 overflow-hidden w-full bg-[#0f0e17]">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e1e2e] to-[#0f0e17]">
                    <FolderOpen className="text-white/20" size={40} />
                  </div>
                )}
                
                {/* Gradiente de superposición para mejorar lectura de texto si fuera necesario, o efecto estético */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e17] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Badge "Ver más" al hover (Desktop) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-[#6353f2] text-white text-xs font-bold tracking-wide shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="flex flex-col flex-grow p-5 gap-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#6353f2] transition-colors leading-tight line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Links Rápidos (Iconos) */}
                  <div className="flex gap-2 shrink-0">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg text-[#a7a9be] hover:text-white hover:bg-white/10 transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded-lg text-[#a7a9be] hover:text-[#6353f2] hover:bg-white/10 transition-colors z-10"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#a7a9be] text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Mini Tags */}
                <div className="mt-auto pt-3 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded-md bg-[#6353f2]/10 border border-[#6353f2]/20 text-[#a8a1ff] text-[10px] font-medium tracking-wide uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[#a7a9be] text-[10px] font-medium">
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
            className="inline-flex items-center gap-2 text-[#a7a9be] hover:text-[#6353f2] transition-colors font-medium text-sm group no-underline px-4 py-2 hover:bg-white/5 rounded-lg -ml-4"
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