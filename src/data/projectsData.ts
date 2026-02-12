// src/data/projectsData.ts
// Dimensiones estándar: 800x600 (4:3 aspect ratio) para consistencia visual
const IMG_WIDTH = 800;
const IMG_HEIGHT = 600;

export default [
  {
    slug: "p1",
    image: [
      "/images/DF-Portfolio-1.webp",
      "/images/DF-Portfolio-2.webp",
      "/images/DF-Portfolio-3.webp",
      "/images/DF-Portfolio-4.webp",
    ],
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["React", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/Maty910/Portafolio-Marra",
    liveUrl: "https://joaquinmarraccini.netlify.app/",
    featured: true,
  },
  {
    slug: "p2",
    image: ["/images/SC-1.webp", "/images/SC-2.webp", "/images/SC-3.webp", "/images/SC-4.webp"],
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["React", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/Maty910/sachito-refrigeracion",
    liveUrl: "https://screfrigeracion.com/",
  },
  {
    slug: "p3",
    image: ["/images/HN-1.webp", "/images/HN-2.webp", "/images/HN-3.webp", "/images/HN-4.webp"],
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["TypeScript", "Tailwind", "Docker", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Maty910/proyecto-dominio",
    liveUrl: "https://hotel-now-poso.onrender.com/",
  },
  {
    slug: "p4",
    image: ["/images/TL-1.webp", "/images/TL-2.webp", "/images/TL-3.webp"],
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["React", "Node.js", "SQLite", "Express"],
    githubUrl: "https://github.com/Maty910/tasklist",
    liveUrl: "https://tasklistmaty.netlify.app/",
  },
  {
    slug: "p5",
    image: "/images/project3.webp",
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["React", "CSS"],
    githubUrl: "https://github.com/Maty910/Portafolio-Lu",
    liveUrl: "https://luciacastro.netlify.app/",
  },
  {
    slug: "p6",
    image: "/images/IA.webp",
    imageWidth: IMG_WIDTH,
    imageHeight: IMG_HEIGHT,
    technologies: ["Python", "SQLite"],
    githubUrl: "https://github.com/Maty910/inventory",
  },
];
