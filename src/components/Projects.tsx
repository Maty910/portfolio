import React, { useRef } from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';

type Project = {
  id: number;
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

export function Projects({ setActiveSection }: Props) {
  // contenedor (útil si quieres usar root con IntersectionObserver)
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // usa el hook de reveal (si tu hook acepta objeto de opciones)
  // Si tu useReveal en el repo es la versión antigua que toma un string,
  // reemplaza la línea por: useReveal('.project-card.reveal');
  useReveal({
    selector: '.project-card.reveal',
    threshold: 0.12,
    root: projectsRef.current,
    once: true
  });

  const projects: Project[] = [
    {
      id: 1,
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
      title: 'Task Management App',
      description: 'Tasks management tool connected to Sqlite database',
      image: './images/project2.png',
      technologies: ['React', 'Node.js', 'Express', 'SQLite'],
      githubUrl: 'https://github.com/Maty910/tasklist',
      liveUrl: 'https://tasklistmaty.netlify.app/'
    },
    {
      id: 3,
      title: 'Community Manager Portfolio',
      description: '[WIP] Portfolio for a community manager showcasing social media management skills',
      image: './images/project3.png',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Maty910/Portafolio-Lu',
      liveUrl: 'https://luciacastro.netlify.app/'
    },
    {
      id: 4,
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
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, i) => {
          // tilt ref tipado — tu useTilt debe devolver RefObject<T>
          const tiltRef = useTilt<HTMLDivElement>({ maxRotate: 8, maxTilt: 6, scale: 1.02 });

          // para evitar el error TS con propiedades CSS custom usamos un "as React.CSSProperties"
          const delayStyle = { ['--reveal-delay' as any]: `${i * 80}ms` } as React.CSSProperties;

          return (
            <article
              key={project.id}
              ref={tiltRef}
              className={`project-card reveal ${project.featured ? 'featured' : ''}`}
              style={delayStyle}
              onClick={() => setActiveSection('projectpage')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveSection('projectpage');
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects-cta">
        <p>Want to see more of my work?</p>
        <a href="https://github.com/Maty910/" className="btn-secondary" target="_blank" rel="noopener noreferrer">
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
