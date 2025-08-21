// src/components/ProjectModal.tsx
import React from 'react';
import './ProjectModal.css';
import type { Project } from '../types';

type Props = {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null; // no mostrar nada si no hay proyecto seleccionado

  return (
    <div className="pm-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close project dialog">
          ✕
        </button>

        <header className="pm-header">
          <h3>{project.title}</h3>
          <p className="pm-sub">{project.description}</p>
        </header>

        <div className="pm-body">
          {project.image && (
            <div className="pm-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="pm-info">
            <h4>Technologies</h4>
            <ul className="pm-tech">
              {project.technologies.map((t) => (
                <li key={t} className="pm-tech-item">{t}</li>
              ))}
            </ul>

            <div className="pm-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pm-btn">
                  View code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pm-btn pm-primary">
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>

        <footer className="pm-footer">
          <button className="pm-close-secondary" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectModal;
