export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application built with React and Node.js",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-project.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "/images/project2.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://task-app.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Responsive weather application with location-based forecasts",
      image: "/images/project3.jpg",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-app"
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
        <a href="https://github.com/yourusername" className="btn-secondary">
          View All Projects on GitHub
        </a>
      </div>
    </section>
  )
}