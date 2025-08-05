export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Full-stack portfolio application built with React",
      image: "./images/project1.png",
      technologies: ["React", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Maty910/Portafolio-Marra",
      liveUrl: "https://joaquinmarraccini.netlify.app/",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Tasks management tool connected to Sqlite database",
      image: "./images/project2.png",
      technologies: ["React", "Node.js", "Express", "SQLite"],
      githubUrl: "https://github.com/Maty910/tasklist",
      liveUrl: "https://tasklistmaty.netlify.app/"
    },
    {
      id: 3,
      title: "Community Manager Portfolio",
      description: "Portfolio for a community manager showcasing social media management skills",
      image: "./images/project3.png",
      technologies: ["React", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Maty910/Portafolio-Lu"
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-cta">
        <p>Want to see more of my work?</p>
        <a href="https://github.com/Maty910/" className="btn-secondary">
          View All Projects on GitHub
        </a>
      </div>
    </section>
  )
}