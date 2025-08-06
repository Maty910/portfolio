import { SiReact, SiNodedotjs, SiCss3, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiPostgresql, SiSqlite, SiMongodb, SiPostman, SiPython, SiGit, SiTailwindcss, SiJson, SiNetlify, SiGithub, SiFigma, SiCanva } from 'react-icons/si'


export function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p>Here are some of the technologies and tools I work with:</p>
      <ul className="tech-skills">
        <li><SiReact /> React</li>
        <li><SiNodedotjs /> Node.js</li>
        <li><SiCss3 /> CSS</li>
        <li><SiExpress /> Express.js</li>
        <li><SiJavascript /> JavaScript</li>
        <li><SiTypescript /> TypeScript</li>
        <li><SiHtml5 /> HTML</li>
        <li><SiPostgresql /> SQL</li>
        <li><SiSqlite /> SQLite</li>
        <li><SiMongodb /> MongoDB</li>
        <li><SiPostman /> Postman</li>
        <li><SiPython /> Python</li>
        <li><SiGit /> Git</li>
        <li><SiReact /> React Native</li>
        <li><SiTailwindcss /> Tailwind CSS</li>
        <li><SiJson /> JSON</li>
        <li><SiNetlify /> Netlify</li>
        <li><SiGithub /> GitHub</li>
        <li>Visual Studio Code</li>
        <li><SiFigma /> Figma</li>
        <li><SiCanva /> Canva</li>
      </ul>

      <p>In addition to my technical skills, I also have experience in:</p>
      <ul className="soft-skills">
        <li>Problem Solving</li>
        <li>Version Control</li>
        <li>Agile Methodologies</li>
        <li>UI/UX Design</li>
        <li>Testing and Debugging</li>
        <li>Communication and Collaboration</li>
        <li>Time Management</li>
        <li>Adaptability</li>
        <li>Continuous Learning</li>
      </ul>

      <p>I'm always eager to learn new technologies and improve my skills.</p>
      <a href="#projects">Check out my projects</a>
    </section>
  )
}
