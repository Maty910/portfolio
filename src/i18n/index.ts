// src/i18n/index.ts
const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  header: {
    name: "Full-Stack Web Developer",
    bio: "I’m Matías Chacón — a passionate Full-Stack Web Developer focused on building modern, maintainable user interfaces and reliable backend services. I work primarily with React and Node.js, enjoy creating responsive, accessible apps, and I love turning ideas into production-ready projects (from personal portfolios to task & inventory systems).",
    downloadCv: "Download CV"
  },
  projects: {
    title: "Projects",
    cta: "Want to see more of my work?",
    viewAll: "View All Projects on GitHub",
    links: {
      code: "Code",
      live: "Live Demo"
    },
    items: {
      p1: {
        title: "Portfolio Website - Director of Photography",
        description: "Full-stack portfolio application built with React"
      },
      p2: {
        title: "Task Management App",
        description: "Tasks management tool connected to SQLite"
      },
      p3: {
        title: "Community Manager Portfolio",
        description: "[WIP] Portfolio for a community manager showcasing social media skills"
      },
      p4: {
        title: "Inventory Management System",
        description: "Inventory system in Python + SQLite"
      }
    }
  },
  skills: {
    title: "Skills",
    sub: "Here are some of the technologies and tools I work with:",
    sub2: "In addition to my technical skills, I also have experience in:",
    sub3: "I'm always eager to learn new technologies and improve my skills.",
    list: ["React", "Node.js", "CSS", "Python", "SQLite"],
    projects: "Check out my projects"
  },
  contact: {
    title: "Contact",
    sub: "If you'd like to get in touch, feel free to reach out!",
    sendMessage: "Send message"
  }
};

const es = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto"
  },
  header: {
    name: "Desarrollador Web Full-Stack",
    bio: "Soy Matías Chacón — Desarrollador Full-Stack apasionado por crear interfaces modernas y servicios backend sólidos. Trabajo principalmente con React y Node.js, me enfoco en aplicaciones responsivas y accesibles, y disfruto convertir ideas en proyectos listos para producción (desde portfolios hasta sistemas de gestión de tareas e inventarios).",
    downloadCv: "Descargar CV"
  },
  projects: {
    title: "Proyectos",
    cta: "¿Querés ver más de mi trabajo?",
    viewAll: "Ver todos los proyectos en GitHub",
    links: {
      code: "Código",
      live: "Live Demo"
    },
    items: {
      p1: {
        title: "Portafolio Web - Director de Fotografía",
        description: "Aplicación portfolio full-stack construida con React"
      },
      p2: {
        title: "App Gestión de Tareas",
        description: "Herramienta de gestión de tareas conectada a SQLite"
      },
      p3: {
        title: "Portafolio Web - Community Manager",
        description: "[WIP] Portfolio para community manager mostrando habilidades en redes"
      },
      p4: {
        title: "Sistema de Inventario",
        description: "Sistema de inventario en Python + SQLite"
      }
    }
  },
  skills: {
    title: "Habilidades",
    sub: "Acá hay una lista con algunas de las tecnologías con las que trabajé:",
    sub2: "Agregado a mis habilidades técnicas, también tengo experiencia en:",
    sub3: "Estoy siempre dispuesto a aprender nuevas tecnologías y mejorar mis habilidades.",
    list: ["React", "Node.js", "CSS", "Python", "SQLite"],
    projects: "Mirá mis proyectos"
  },
  contact: {
    title: "Contacto",
    sub: "Si querés ponerte en contacto, hacelo a través de estos enlaces!",
    sendMessage: "Enviar mensaje"
  }
};

export default { en, es };
