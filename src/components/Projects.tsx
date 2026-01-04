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
      className="absolute right-[calc(var(--pad)*2)] bottom-[calc(var(--pad)*2)] w-[min(900px,60%)] h-[72vh] overflow-y-auto overflow-x-hidden py-4 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_1%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_84%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_5%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_100%)] max-[880px]:relative max-[880px]:bottom-auto max-[880px]:right-auto max-[880px]:w-full max-[880px]:h-auto max-[880px]:overflow-visible max-[880px]:[mask-image:none] max-[880px]:[-webkit-mask-image:none] max-[880px]:mb-[calc(var(--sidebar-mobile-height)+12px)] max-[880px]:py-4"
    >
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
    </section>
  );
};