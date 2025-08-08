import { SiReact, SiNodedotjs, SiCss3, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiPostgresql, SiSqlite, SiMongodb, SiPostman, SiPython, SiGit, SiTailwindcss, SiJson, SiNetlify, SiGithub, SiFigma, SiCanva } from 'react-icons/si'

export function ProjectPage() {
  return (
    <section className="project-page" id="projectpage">
      <h2>Project Page</h2>
      <p>This is a placeholder for the project page content.</p>

      <img src="project-image.jpg" alt="Project" />
      <p>Details about the project will go here.</p>
      <p>Technologies used:</p>
      <ul>
        <li><SiReact />React</li>
        <li><SiTypescript />TypeScript</li>
        <li><SiCss3/>CSS</li>
      </ul>
      <p>Features:</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <p>For more information, visit the project's repository or website.</p>
      <button className='cta'>
        <a href="https://github.com/yourusername/yourproject">GitHub Repository</a>
      </button>
      <button className='cta'>
        <a href="https://yourproject.com">Live Demo</a>
      </button>     
    
      <p>Feel free to reach out if you have any questions or feedback!</p>
      <p>Email: matychacong@gmail.com</p>
    </section>
  )
}