// Consolidated translation file for English and Spanish
import type { Translations } from "./types";

const en: Translations = {
  nav: {
    toggleMenu: "Toggle Menu (M)",
    toggleLang: "Toggle language",
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    skipToContent: "Skip to main content",
  },
  header: {
    name: "Full-Stack Web Developer",
    displayName: "Matías Chacón",
    bio: "I'm Matías Chacón — a Full-Stack Web Developer currently working at ForIT Software Factory, specializing in building modern, scalable applications with Clean Architecture and TDD principles. I work primarily with React, TypeScript and Node.js, with expertise in domain modeling, code review, and collaborative development. Passionate about delivering maintainable, production-ready solutions while continuously learning new technologies and best practices.",
    downloadCv: "Download CV",
    headlinePrefix: "development with",
    headlineHighlight: "purpose",
    available: "Available for new opportunities",
  },
  alt: {
    profile: "Profile",
    logo: "Logo",
  },

  projects: {
    title: "Projects",
    cta: "Want to see more of my work?",
    viewAll: "View All Projects on GitHub",
    viewDetails: "View Details",
    links: {
      code: "View Code",
      live: "Live Demo",
    },
    noDescription: "No description available.",
    defaultTitle: "Project",
    items: {
      p1: {
        title: "Portfolio Website - Director of Photography",
        description:
          "Modern portfolio showcasing multimedia work with responsive design, optimized image galleries, and smooth animations built with React and TypeScript",
      },
      p2: {
        title: "SC Refrigeration Website",
        description:
          "Technician website with contact forms, service showcases, and mobile-first responsive design for a refrigeration services company",
      },
      p3: {
        title: "Hotel Now Platform",
        description:
          "Full-stack hotel booking system with RESTful API, PostgreSQL database, Docker containerization, and domain-driven architecture following clean code principles",
      },
      p4: {
        title: "Task Management App",
        description:
          "Full-stack productivity tool with CRUD operations, real-time updates, and persistent storage using Node.js backend and SQLite database",
      },
      p5: {
        title: "Community Manager Portfolio",
        description:
          "Creative portfolio website highlighting social media management skills, campaigns, and content strategy with modern UI/UX design",
      },
      p6: {
        title: "Inventory Management System",
        description:
          "Terminal inventory tracking application built with Python featuring stock control, product management, and SQLite database integration",
      },
    },
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey through software development and web technologies",
    responsibilities: "Key Responsibilities",
    viewMore: "View full experience on LinkedIn",
    visitWebsite: "Visit website",
    present: "Present",
    remote: "Remote",
    partTime: "Part-time",
    fullTime: "Full-time",
    duration: {
      months: "months",
      month: "month",
      years: "years",
      year: "year",
    },
    jobs: {
      forit: {
        position: "Web Developer",
        duration: "3 months",
        location: "Buenos Aires Province, Argentina",
        description: [
          "Full Stack Development & Domain: End-to-end solution implementation (Frontend and Backend), with strong emphasis on domain modeling and business rules to ensure the software accurately reflects product needs.",
          "Code Review & Quality: Active participation in peer code reviews, providing constructive feedback to elevate team standards. Rigorous application of Clean Architecture, Clean Code, and TDD to minimize technical debt.",
          "Pull Request Management: Creation of atomic, clean, and well-documented PRs, facilitating continuous integration and maintaining a clear change history.",
          "Autonomy & Collaboration: Resolution of medium-complexity tickets independently, maintaining fluid communication about task status and managing blockers early.",
        ],
      },
    },
  },
  education: {
    title: "Education & Certifications",
    subtitle: "My academic background and professional certifications in technology and psychology",
    description: "Description",
    skills: "Skills Learned",
    certificates: "Certificates",
    clickToView: "Click to view details",
    clickToViewCertificate: "Click to view certificate",
    visitInstitution: "Visit",
    viewMore: "View full education on LinkedIn",
    closeModalAria: "Close modal",
    closeCertificateAria: "Close certificate",
    certificateFullscreenAlt: "Certificate fullscreen",
    items: {
      uba: {
        degree: "Bachelor's Degree in Psychology",
        status: "50% Completed",
        description: [
          "Ongoing university education focused on the scientific study of human behavior, cognitive processes, emotions, and social dynamics.",
          "This degree provides a solid foundation in qualitative and quantitative research, data analysis, and scientific methodology applicable to software development.",
          "Knowledge in cognitive psychology directly complements interface design, user experience, and development of digital products centered on human needs.",
        ],
      },
      forit: {
        degree: "Advanced Web Developer",
        description: [
          "Intensive advanced web development program focused on professional software architecture, testing, and modern methodologies.",
          "Hands-on training in Test-Driven Development (TDD), Clean Code, advanced TypeScript, and design patterns applied to React.",
          "Real-world project development with Docker containerization, Tailwind CSS for scalable styling, and reusable component architecture.",
        ],
      },
      ethKipu: {
        degree: "Ethereum Developer Pack",
        description: [
          "Specialized program in blockchain technology and development on the Ethereum network.",
          "Training in blockchain fundamentals, decentralized architecture, smart contracts, and Web3 applications.",
          "Practical knowledge in digital wallet integration, on-chain transactions, and DApp (Decentralized Applications) development.",
        ],
      },
      codoACodo: {
        degree: "Full Stack Web Developer",
        description: [
          "Intensive 6-month full-stack web development program focused on JavaScript, Node.js, and modern frameworks.",
          "Comprehensive training covering frontend with React.js and Vue.js, backend with Express.js and Node.js, relational SQL databases, and version control with Git.",
          "Final project development: dynamic and interactive web application with complete client-server architecture, integrated SQL database, and responsive design.",
          "Collaborative work applying agile methodologies (Scrum), promoting adaptability, problem-solving, and attention to detail.",
        ],
      },
      talentoTechUX: {
        degree: "Design UX/UI",
        description: [
          "Intensive 5-month course in user experience and interface design, research methodology, and information architecture.",
          "Skill development in user-centered design: UX research, competitive benchmarking, user personas creation, empathy maps, and journey maps.",
          "Hands-on project: complete mobile application design connecting independent bands with venues, including user flows, task flows, site maps, and interactive wireframes.",
          "Professional tools: Figma for design and prototyping, Whimsical for information architecture, UXtweak for usability testing.",
        ],
      },
      talentoTechPython: {
        degree: "Python, Information Technology",
        description: [
          "Practical 5-month course focused on structured programming with Python and relational database management with SQLite.",
          "Training in programming fundamentals: data structures (lists, tuples, dictionaries), exception handling, input validation, and code modularization.",
          "Development of complete CRUD operations on SQL databases using the sqlite3 library, relational schema design, and optimized queries.",
          "Final project: console application for product inventory management with modular architecture (main.py, db_methods.py, validations.py), applying Clean Code principles and best practices.",
        ],
      },
      cilsa: {
        degree: "Testing & Automatization",
        description: [
          "Theoretical-practical 3-month training in software quality assurance (QA), manual and automated testing.",
          "Knowledge in testing lifecycle: test planning, test case design and execution, incident management, and defect reporting.",
          "Testing types: functional, end-to-end (E2E), regression, black box, integration, and requirements validation.",
          "Professional tools: Selenium WebDriver for web automation, Robot Framework for structured testing, Postman for REST API testing, Jira for bug tracking.",
          "Methodologies: work with Agile (Scrum), Waterfall, and iterative development cycles in multidisciplinary teams.",
        ],
      },
      talentoTechFigma: {
        degree: "Figma Course",
        description: [
          "Intensive 1-month course specialized in Figma as a professional UI/UX design and prototyping tool.",
          "Mastery of advanced functionalities: reusable components, auto-layout, design variables, design tokens, and scalable design systems.",
          "Real-time collaboration practices: teamwork, design comments, version control, and developer hand-off.",
          "Creation of interactive prototypes with animations, transitions, and navigation flows for usability testing.",
        ],
      },
    },
  },
  skills: {
    title: "Skills",
    sub: "Here are some of the technologies and tools I work with:",
    sub2: "In addition to my technical skills, I also have experience in:",
    sub3: "I'm always eager to learn new technologies and improve my skills.",
    list: ["React", "Node.js", "CSS", "Python", "SQLite"],
    projects: "Check out my projects",
    soft: {
      problemSolving: "Problem Solving",
      teamWork: "Team Work",
      fastLearning: "Fast Learning",
      adaptability: "Adaptability",
    },
    categories: {
      frontend_ui: { title: "Frontend & UI" },
      backend_data: { title: "Backend & Data" },
      tools_devops: { title: "Tools & DevOps" },
    },
  },
  contact: {
    title: "Contact",
    sub: "If you'd like to get in touch, feel free to reach out!",
    sendMessage: "Send message",
    cardTitle: "Let's work together",
    cardSubtitle: "Have a project in mind? Send me a message.",
    sendEmail: "Send Email",
    copyEmail: "Copy Email Address",
    linkedinTitle: "LinkedIn",
    githubTitle: "GitHub",
    linkedin: "Connect professionally",
    github: "View my code & projects",
    visitLinkedIn: "Visit my LinkedIn profile",
    visitGitHub: "Visit my GitHub profile",
    emailCopied: "Email copied to clipboard",
    copyEmailAria: "Copy email address to clipboard",
  },
  home: {
    viewProjects: "View Projects",
    techStackAria: "Tech Stack",
  },
  page: {
    contribs: "Contribs.",
    publicRepos: "Public Repos",
    building: "Building",
    buildingProject: "Portfolio V2",
    alwaysLearning: "Always learning new technologies",
    available: "Available for hire",
    location: "BA, Argentina",
    email: "contact@mchacon.dev",
    openToWork: "Open to work",
    statusLocation: "Status & Location",
    typingWords: ["Full-Stack Developer", "React Enthusiast", "Creative Coder", "Pixel Precision"],
    timezoneSuffix: "AR",
    years: "Years",
    projects: "Projects",
    githubStats: "GitHub Stats",
    mainStack: "Main Stack",
    lifetime: "Lifetime",
    active: "Active",
    connect: "Connect",
  },
  intro: {
    name: "Matías Chacón",
    role: "Full Stack Dev",
    loading: "Loading experience",
  },
  projectModal: {
    closeAria: "Close project dialog",
    closeTitle: "Close (Esc)",
    technologies: "Technologies",
    viewCode: "View Code",
    viewLive: "Live Demo",
    noImages: "No images available",
    previousImage: "Previous image",
    nextImage: "Next image",
    goToImageAria: "Go to image",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    toggle: "Toggle theme",
  },
  footer: { copyRight: "All rights reserved." },
  emptyState: {
    errorTitle: "Oops! Something went wrong",
    retry: "Retry",
  },
};

const es: Translations = {
  nav: {
    toggleMenu: "Alternar menú (M)",
    toggleLang: "Cambiar idioma",
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Educación",
    contact: "Contacto",
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    skipToContent: "Saltar al contenido principal",
  },
  header: {
    name: "Desarrollador Web Full-Stack",
    displayName: "Matías Chacón",
    bio: "Soy Matías Chacón — Desarrollador Full-Stack trabajando actualmente en ForIT Software Factory, especializado en construir aplicaciones modernas y escalables aplicando Clean Architecture y TDD. Trabajo principalmente con React, TypeScript y Node.js, con experiencia en modelado de dominio, revisión de código y desarrollo colaborativo. Apasionado por entregar soluciones mantenibles y listas para producción mientras aprendo continuamente nuevas tecnologías y mejores prácticas.",
    downloadCv: "Descargar CV",
    headlinePrefix: "desarrollo con",
    headlineHighlight: "criterio",
    available: "Disponible para nuevas oportunidades",
  },
  alt: {
    profile: "Perfil",
    logo: "Logo Mati",
  },

  projects: {
    title: "Proyectos",
    cta: "¿Querés ver más de mi trabajo?",
    viewAll: "Ver todos los proyectos en GitHub",
    viewDetails: "Ver más",
    links: {
      code: "Ver Código",
      live: "Demo en Vivo",
    },
    noDescription: "No hay descripción disponible.",
    defaultTitle: "Proyecto",
    items: {
      p1: {
        title: "Portafolio Web - Director de Fotografía",
        description:
          "Portafolio moderno que presenta trabajos multimedia con diseño responsivo, galerías de imágenes optimizadas y animaciones fluidas construido con React y TypeScript",
      },
      p2: {
        title: "Sitio Web SC Refrigeración",
        description:
          "Sitio web para técnico en refrigeración con formularios de contacto, catálogo de servicios y diseño mobile-first",
      },
      p3: {
        title: "Plataforma Hotel Now",
        description:
          "Sistema full-stack de reservas hoteleras con API RESTful, base de datos PostgreSQL, contenerización Docker y arquitectura orientada al dominio siguiendo principios de código limpio",
      },
      p4: {
        title: "App Gestión de Tareas",
        description:
          "Herramienta de productividad full-stack con operaciones CRUD, actualizaciones en tiempo real y almacenamiento persistente usando backend Node.js y base de datos SQLite",
      },
      p5: {
        title: "Portafolio Web - Community Manager",
        description:
          "Sitio web creativo que destaca habilidades de gestión de redes sociales, campañas y estrategia de contenido con diseño UI/UX moderno",
      },
      p6: {
        title: "Sistema de Inventario",
        description:
          "Aplicación de terminal para seguimiento de inventario construida con Python con control de stock, gestión de productos e integración con base de datos SQLite",
      },
    },
  },
  experience: {
    title: "Experiencia Profesional",
    subtitle: "Mi trayectoria en el desarrollo de software y tecnologías web",
    responsibilities: "Responsabilidades Principales",
    viewMore: "Ver experiencia completa en LinkedIn",
    visitWebsite: "Visitar sitio web",
    present: "Presente",
    remote: "Remoto",
    partTime: "Part-time",
    fullTime: "Full-time",
    duration: {
      months: "meses",
      month: "mes",
      years: "años",
      year: "año",
    },
    jobs: {
      forit: {
        position: "Web Developer",
        duration: "3 meses",
        location: "Provincia de Buenos Aires, Argentina",
        description: [
          "Desarrollo Full Stack & Dominio: Implementación de soluciones end-to-end (Frontend y Backend), con fuerte énfasis en el modelado de dominio y reglas de negocio para asegurar que el software refleje fielmente las necesidades del producto.",
          "Code Review & Calidad: Participación activa en la revisión de código de pares, aportando feedback constructivo para elevar el estándar del equipo. Aplicación rigurosa de Clean Architecture, Clean Code y TDD para minimizar deuda técnica.",
          "Gestión de Pull Requests: Elaboración de PRs atómicos, prolijos y bien documentados, facilitando la integración continua y manteniendo un historial de cambios claro.",
          "Autonomía y Colaboración: Resolución de tickets de complejidad media con independencia, manteniendo una comunicación fluida sobre el estado de las tareas y gestionando bloqueos de forma temprana.",
        ],
      },
    },
  },
  education: {
    title: "Educación y Certificaciones",
    subtitle: "Mi formación académica y certificaciones profesionales en tecnología y psicología",
    description: "Descripción",
    skills: "Habilidades Aprendidas",
    certificates: "Certificados",
    clickToView: "Click para ver detalles",
    clickToViewCertificate: "Click para ver certificado",
    visitInstitution: "Visitar",
    viewMore: "Ver educación completa en LinkedIn",
    closeModalAria: "Cerrar modal",
    closeCertificateAria: "Cerrar certificado",
    certificateFullscreenAlt: "Certificado en pantalla completa",
    items: {
      uba: {
        degree: "Licenciatura en Psicología",
        status: "50% Completado",
        description: [
          "Formación universitaria en curso enfocada en el estudio científico del comportamiento humano, procesos cognitivos, emocionales y dinámicas sociales.",
          "Esta carrera proporciona una base sólida en investigación cualitativa y cuantitativa, análisis de datos y metodología científica aplicable al desarrollo de software.",
          "El conocimiento en psicología cognitiva complementa directamente el diseño de interfaces, experiencia de usuario y desarrollo de productos digitales centrados en las necesidades humanas.",
        ],
      },
      forit: {
        degree: "Desarrollador Web Avanzado",
        description: [
          "Programa intensivo de desarrollo web avanzado enfocado en arquitectura de software profesional, testing y metodologías modernas.",
          "Formación práctica en Test-Driven Development (TDD), Clean Code, TypeScript avanzado y patrones de diseño aplicados a React.",
          "Desarrollo de proyectos reales con contenedorización en Docker, Tailwind CSS para estilos escalables y arquitectura de componentes reutilizables.",
        ],
      },
      ethKipu: {
        degree: "Ethereum Developer Pack",
        description: [
          "Programa especializado en tecnología blockchain y desarrollo sobre la red Ethereum.",
          "Formación en fundamentos de cadenas de bloques, arquitectura descentralizada, smart contracts y aplicaciones Web3.",
          "Conocimientos prácticos en integración de wallets digitales, transacciones on-chain y desarrollo de DApps (Aplicaciones Descentralizadas).",
        ],
      },
      codoACodo: {
        degree: "Full Stack Web Developer",
        description: [
          "Programa intensivo de 6 meses en desarrollo web full-stack con foco en JavaScript, Node.js y frameworks modernos.",
          "Formación integral cubriendo frontend con React.js y Vue.js, backend con Express.js y Node.js, bases de datos relacionales SQL, y control de versiones con Git.",
          "Desarrollo de proyecto final: aplicación web dinámica e interactiva con arquitectura completa cliente-servidor, base de datos SQL integrada, y diseño responsive.",
          "Trabajo colaborativo aplicando metodologías ágiles (Scrum), promoviendo adaptabilidad, resolución de problemas y atención al detalle.",
        ],
      },
      talentoTechUX: {
        degree: "Design UX/UI",
        description: [
          "Curso intensivo de 5 meses en diseño de experiencia e interfaz de usuario, metodología de investigación y arquitectura de información.",
          "Desarrollo de habilidades en diseño centrado en el usuario: investigación UX, benchmarking competitivo, creación de user personas, empathy maps y journey maps.",
          "Proyecto práctico: diseño completo de aplicación móvil conectando bandas independientes con venues, incluyendo user flows, task flows, site maps y wireframes interactivos.",
          "Herramientas profesionales: Figma para diseño y prototipado, Whimsical para arquitectura de información, UXtweak para testing de usabilidad.",
        ],
      },
      talentoTechPython: {
        degree: "Python, Information Technology",
        description: [
          "Curso práctico de 5 meses enfocado en programación estructurada con Python y gestión de bases de datos relacionales SQLite.",
          "Formación en fundamentos de programación: estructuras de datos (listas, tuplas, diccionarios), manejo de excepciones, validaciones de entrada y modularización de código.",
          "Desarrollo de operaciones CRUD completas sobre bases de datos SQL usando la biblioteca sqlite3, diseño de esquemas relacionales y consultas optimizadas.",
          "Proyecto final: aplicación de consola para gestión de inventario de productos con arquitectura modular (main.py, db_methods.py, validations.py), aplicando principios de Clean Code y buenas prácticas.",
        ],
      },
      cilsa: {
        degree: "Testing & Automatization",
        description: [
          "Formación teórico-práctica de 3 meses en control de calidad de software (QA), testing manual y automatizado.",
          "Conocimientos en ciclo de vida del testing: planificación de pruebas, diseño y ejecución de casos de prueba, gestión de incidencias y reportes de defectos.",
          "Tipos de pruebas: funcionales, end-to-end (E2E), regresión, caja negra, integración y validación de requisitos.",
          "Herramientas profesionales: Selenium WebDriver para automatización web, Robot Framework para testing estructurado, Postman para testing de APIs REST, Jira para seguimiento de bugs.",
          "Metodologías: trabajo con Agile (Scrum), Waterfall y ciclos de desarrollo iterativos en equipos multidisciplinarios.",
        ],
      },
      talentoTechFigma: {
        degree: "Figma Course",
        description: [
          "Curso intensivo de 1 mes especializado en Figma como herramienta profesional de diseño UI/UX y prototipado.",
          "Dominio de funcionalidades avanzadas: componentes reutilizables, auto-layout, variables de diseño, design tokens y sistemas de diseño escalables.",
          "Prácticas de colaboración en tiempo real: trabajo en equipo, comentarios en diseños, control de versiones y hand-off a desarrollo.",
          "Creación de prototipos interactivos con animaciones, transiciones y flujos de navegación para testing de usabilidad.",
        ],
      },
    },
  },
  skills: {
    title: "Habilidades",
    sub: "Acá hay una lista con algunas de las tecnologías con las que trabajé:",
    sub2: "Agregado a mis habilidades técnicas, también tengo experiencia en:",
    sub3: "Estoy siempre dispuesto a aprender nuevas tecnologías y mejorar mis habilidades.",
    list: ["React", "Node.js", "CSS", "Python", "SQLite"],
    projects: "Mirá mis proyectos",
    soft: {
      problemSolving: "Resolución de problemas",
      teamWork: "Trabajo en equipo",
      fastLearning: "Aprendizaje rápido",
      adaptability: "Adaptabilidad",
    },
    categories: {
      frontend_ui: { title: "Frontend & UI" },
      backend_data: { title: "Backend & Data" },
      tools_devops: { title: "Tools & DevOps" },
    },
  },
  contact: {
    title: "Contacto",
    sub: "Si querés ponerte en contacto, hacelo a través de estos enlaces!",
    sendMessage: "Enviar mensaje",
    cardTitle: "Trabajemos juntos",
    cardSubtitle: "¿Tenés un proyecto en mente? Enviame un mensaje.",
    sendEmail: "Enviar Email",
    copyEmail: "Copiar dirección de correo",
    linkedinTitle: "LinkedIn",
    githubTitle: "GitHub",
    linkedin: "Conectá profesionalmente",
    github: "Ver mi código y proyectos",
    visitLinkedIn: "Visitar mi perfil de LinkedIn",
    visitGitHub: "Visitar mi perfil de GitHub",
    emailCopied: "Email copiado al portapapeles",
    copyEmailAria: "Copiar dirección de correo al portapapeles",
  },
  home: {
    viewProjects: "Ver Proyectos",
    techStackAria: "Stack de Tecnologías",
  },
  page: {
    contribs: "Contribs.",
    publicRepos: "Repos Públicos",
    building: "Construyendo",
    buildingProject: "Portfolio V2",
    alwaysLearning: "Siempre aprendiendo nuevas tecnologías",
    available: "Disponible para contratación",
    location: "BA, Argentina",
    email: "contact@mchacon.dev",
    openToWork: "Abierto a oportunidades",
    statusLocation: "Estado y ubicación",
    typingWords: [
      "Desarrollador Full-Stack",
      "Apasionado por React",
      "Coder Creativo",
      "Precisión de píxeles",
    ],
    timezoneSuffix: "AR",
    years: "Años",
    projects: "Proyectos",
    githubStats: "Estadísticas de GitHub",
    mainStack: "Stack Principal",
    lifetime: "Lifetime",
    active: "Activo",
    connect: "Conectar",
  },
  intro: {
    name: "Matías Chacón",
    role: "Desarrollador Full Stack",
    loading: "Cargando experiencia",
  },
  projectModal: {
    closeAria: "Cerrar diálogo del proyecto",
    closeTitle: "Cerrar (Esc)",
    technologies: "Tecnologías",
    viewCode: "Ver Código",
    viewLive: "Demo en Vivo",
    noImages: "No hay imágenes disponibles",
    previousImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    goToImageAria: "Ir a imagen",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
    toggle: "Cambiar tema",
  },
  footer: { copyRight: "Todos los derechos reservados." },
  emptyState: {
    errorTitle: "Oops! Algo salió mal",
    retry: "Reintentar",
  },
};

export default { en, es };
