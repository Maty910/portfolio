import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink } from 'lucide-react';
import projectsStaticData from '../data/projectsData';
import type { Project } from '../types';

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Combinamos la data estática con las traducciones en tiempo real
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
      className="snap-start min-h-screen w-full flex items-start justify-center relative overflow-y-auto
                transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                pl-[var(--sidebar-collapsed)] max-[880px]:pl-0
                max-[880px]:min-h-[calc(100vh-var(--sidebar-mobile-height))]
                pt-20 max-[880px]:pt-8"
    >
      <div className="w-full max-w-[900px] px-8 md:px-16 py-8 max-[880px]:px-4 max-[880px]:py-4 ml-15">
      {/* Header */}
      <h2 className="text-[2em] text-[var(--primary-color)] mb-4">{t('projects.title')}</h2>
      <p className="text-[var(--text-secondary)] text-base leading-[1.5] mb-6">
        {t('projects.cta')}
      </p>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pr-2">
        {projects.map((project) => (
          <article 
            key={project.id}
            className="group bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden hover:border-[rgba(99,83,242,0.3)] transition-all duration-300 flex flex-col cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Imagen */}
            <div className="h-40 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f0e17] to-transparent opacity-60"></div>
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white m-0 group-hover:text-[var(--primary-color)] transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--text-secondary)] hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--text-secondary)] hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 list-none p-0 mt-auto">
                {project.technologies.slice(0, 3).map(tech => (
                  <li 
                    key={tech} 
                    className="bg-[rgba(99,83,242,0.2)] text-[var(--primary-color)] px-2 py-1 rounded text-xs font-medium border border-[rgba(99,83,242,0.3)]"
                  >
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 3 && (
                  <li className="text-[var(--text-secondary)] text-xs px-1 py-1">
                    +{project.technologies.length - 3}
                  </li>
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Link a Github */}
      <div className="text-left mt-4">
        <a 
          href="https://github.com/Maty910" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--primary-color)] font-medium hover:text-[var(--text-secondary)] transition-colors no-underline"
        >
          {t('projects.viewAll')} →
        </a>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      </div>
    </section>
  );
};