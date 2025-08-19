// src/components/Projects.tsx
import React, { useRef } from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import { useLanguage } from '../context/LanguageContext';

type Project = {
  id: number;
  slug?: string; // optional — si lo agregás en tu data, mejor
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

type Props = {
  setActiveSection: (section: string) => void;
};

export const Projects: React.FC<Props> = ({ setActiveSection }) => {
  // contenedor (útil si quieres usar root con IntersectionObserver)
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // useReveal admite objeto de opciones en tu proyecto (si no, cambia a string)
  useReveal({
    selector: '.project-card.reveal',
    threshold: 0.12,
    root: projectsRef.current,
    once: true
  });

  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      slug: 'p1',
      title: 'Portfolio Website',
      description: 'Full-stack portfolio application built with React',
      image: './images/project1.png',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Maty910/Portafolio-Marra',
      liveUrl: 'https://joaquinmarraccini.netlify.app/',
      featured: true
    },
    {
      id: 2,
      slug: 'p2',
      title: 'Task Management App',
      description: 'Tasks management tool connected to Sqlite database',
      image: './images/project2.png',
      technologies: ['React', 'Node.js', 'Express', 'SQLite'],
      githubUrl: 'https://github.com/Maty910/tasklist',
      liveUrl: 'https://tasklistmaty.netlify.app/'
    },
    {
      id: 3,
      slug: 'p3',
      title: 'Community Manager Portfolio',
      description: '[WIP] Portfolio for a community manager showcasing social media management skills',
      image: './images/project3.png',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Maty910/Portafolio-Lu',
      liveUrl: 'https://luciacastro.netlify.app/'
    },
    {
      id: 4,
      slug: 'p4',
      title: 'Inventory Management System',
      description:
        'Inventory management system made with Python and Sqlite that allows users to track and manage stock levels, products and price.',
      image: './images/project4.png',
      technologies: ['Python', 'Sqlite'],
      githubUrl: 'https://github.com/Maty910/inventory'
    }
  ];

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      {/* título de la sección usando traducción (fallback a 'Projects') */}
      <h2>{t('projects.title') || t('projects') || 'Projects'}</h2>

      <div className="projects-grid">
        {projects.map((project, i) => {
          const tiltRef = useTilt<HTMLDivElement>({ maxRotate: 8, maxTilt: 6, scale: 1.02 });
          const delayStyle = { ['--reveal-delay' as any]: `${i * 80}ms` } as React.CSSProperties;

          // determinamos slug (si no existe, usamos id)
          const slug = project.slug ?? `p${project.id}`;

          // tratamos de sacar la traducción; si no existe, fallback al texto del objeto
          const title = t(`projects.items.${slug}.title`) || project.title;
          const description = t(`projects.items.${slug}.description`) || project.description;

          return (
            <div key={project.id} className="project-card-wrap" style={delayStyle}>
              <article
                ref={tiltRef}
                className={`project-card reveal ${project.featured ? 'featured' : ''}`}
                onClick={() => setActiveSection('projectpage')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveSection('projectpage');
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github" /> {t('projects.links.code') || 'Code'}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt" /> {t('projects.links.live') || 'Live Demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="projects-cta">
        <p>{t('projects.cta') || 'Want to see more of my work?'}</p>
        <a
          href="https://github.com/Maty910/"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('projects.viewAll') || 'View All Projects on GitHub'}
        </a>
      </div>
    </section>
  );
};
