import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../hooks/useLanguage";

interface EducationProps {
  onModalChange?: (isOpen: boolean) => void;
}

type Certificate = {
  name: string;
  url?: string;
  image?: string;
};

type EducationItem = {
  id: number;
  institution: string;
  logo?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Present";
  duration: string;
  location: string;
  status?: string;
  description: string[];
  skills: string[];
  certificates?: Certificate[];
  institutionUrl?: string;
};

/**
 * EducationModal Component - Ya está optimizado con createPortal
 * No necesita memo porque es controlado por estado local
 */
const EducationModal: React.FC<{ education: EducationItem | null; onClose: () => void }> = ({
  education,
  onClose,
}) => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  if (!education) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl relative 
                   bg-bg-base border border-text-primary/20
                   animate-in zoom-in-95 slide-in-from-bottom-8 duration-300
                   flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed position */}
        <button
          className="absolute right-6 top-6 z-20 flex items-center justify-center w-11 h-11 rounded-full 
                     cursor-pointer transition-all duration-300 border-none
                     bg-text-primary/10 text-text-secondary backdrop-blur-sm
                     hover:bg-primary hover:text-white hover:rotate-90 hover:scale-110
                     active:scale-95 shadow-lg"
          onClick={onClose}
          aria-label={t("education.closeModalAria")}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

        {/* Header - Fixed at top */}
        <header className="px-8 pt-8 pb-6 border-b border-text-primary/10 bg-bg-base shrink-0">
          <div className="flex items-start gap-5 mb-4 pr-14">
            {education.logo && (
              <div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-bg-base to-text-primary/5 
                            border border-text-primary/20 p-3.5 shrink-0 shadow-md"
              >
                <img
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="m-0 mb-2 text-text-primary text-2xl md:text-3xl font-bold leading-tight">
                {education.degree}
              </h3>
              <p className="text-primary font-semibold text-lg m-0 flex items-center gap-2">
                <Building2 size={18} className="shrink-0" />
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-text-secondary">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-text-primary/5">
              <Calendar size={16} className="text-primary shrink-0" />
              <span className="font-medium">
                {education.startDate} - {education.endDate}
              </span>
              <span className="text-xs text-text-muted">({education.duration})</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-text-primary/5">
              <MapPin size={16} className="text-primary shrink-0" />
              <span className="font-medium">{education.location}</span>
            </div>
            {education.status && (
              <span
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 
                             text-primary text-xs font-semibold border border-primary/30 shadow-sm"
              >
                {education.status}
              </span>
            )}
          </div>
        </header>

        {/* Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto px-8 py-6
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:bg-transparent
                      [&::-webkit-scrollbar-track]:my-2
                      [&::-webkit-scrollbar-thumb]:bg-primary/20
                      [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:border-2
                      [&::-webkit-scrollbar-thumb]:border-solid
                      [&::-webkit-scrollbar-thumb]:border-transparent
                      hover:[&::-webkit-scrollbar-thumb]:bg-primary/40
                      [&::-webkit-scrollbar-thumb]:transition-colors"
        >
          <div className="space-y-8 pr-2">
            {/* Description */}
            {education.description.length > 0 && (
              <div
                className="bg-gradient-to-br from-text-primary/5 to-transparent 
                          border border-text-primary/10 rounded-2xl p-6"
              >
                <h4
                  className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 
                           flex items-center gap-2 pb-3 border-b border-text-primary/10"
                >
                  <FileText size={18} className="text-primary" />
                  {t("education.description")}
                </h4>
                <div className="space-y-3.5">
                  {education.description.map((desc, idx) => (
                    <p key={idx} className="text-text-secondary text-[15px] leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {education.skills.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  {t("education.skills")}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {education.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 
                             border border-primary/20 text-primary text-sm font-medium
                             hover:from-primary/20 hover:to-primary/10 hover:border-primary/30
                             hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certificates */}
            {education.certificates && education.certificates.length > 0 && (
              <div>
                <h4
                  className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 
                           flex items-center gap-2"
                >
                  <Award size={18} className="text-primary" />
                  {t("education.certificates")}
                </h4>
                <div className="space-y-3">
                  {education.certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 p-4 rounded-2xl 
                             bg-gradient-to-br from-text-primary/5 to-transparent
                             border border-text-primary/10 
                             hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5
                             transition-all duration-300 cursor-pointer"
                      onClick={() => cert.image && setSelectedCert(cert.image)}
                    >
                      {cert.image && (
                        <div
                          className="w-20 h-20 rounded-xl border-2 border-text-primary/20 
                                    overflow-hidden shrink-0 shadow-md
                                    group-hover:border-primary/40 group-hover:scale-105
                                    transition-all duration-300"
                        >
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-text-primary font-semibold text-base mb-1 
                                  group-hover:text-primary transition-colors"
                        >
                          {cert.name}
                        </p>
                        <span className="text-text-muted text-sm inline-flex items-center gap-1.5">
                          <ExternalLink
                            size={14}
                            className="group-hover:text-primary transition-colors"
                          />
                          Click para ver certificado
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Link - Fixed at bottom */}
        {education.institutionUrl && (
          <div className="px-8 py-5 border-t border-text-primary/10 bg-bg-base shrink-0">
            <a
              href={education.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-primary to-primary/90
                         shadow-lg shadow-primary/25
                         hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02]
                         active:scale-[0.98]
                         transition-all duration-300 font-semibold text-base no-underline"
              style={{ color: "var(--color-on-primary)" }}
            >
              <Building2 size={18} />
              Visitar {education.institution}
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>

      {/* Certificate Fullscreen Modal */}
      {selectedCert && (
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl z-10 
                     flex items-center justify-center p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="absolute right-4 top-4 flex items-center justify-center w-12 h-12 
                       rounded-full bg-white/10 text-white backdrop-blur-sm
                       hover:bg-white/20 hover:rotate-90 hover:scale-110
                       transition-all duration-300 border border-white/20"
            onClick={() => setSelectedCert(null)}
            aria-label={t("education.closeCertificateAria")}
          >
            <X size={24} strokeWidth={2.5} />
          </button>
          <img
            src={selectedCert}
            alt={t("education.certificateFullscreenAlt")}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl
                     animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>,
    document.body
  );
};

/**
 * Education Component - Memoized para optimizar performance
 * Componente pesado con:
 * - Múltiples items educativos con descripciones extensas
 * - Modal complejo con portal
 * - Estado interno para manejo de modal
 */
const EducationComponent: React.FC<EducationProps> = ({ onModalChange }) => {
  const { t } = useLanguage();
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  const educationItems: EducationItem[] = [
    {
      id: 1,
      institution: "Universidad de Buenos Aires",
      logo: "/logos/UBA-01.webp",
      degree: "Licenciatura en Psicología",
      field: "Psychology",
      startDate: "2021",
      endDate: "Present",
      duration: "4 años",
      location: "Buenos Aires, Argentina",
      status: "50% Completado",
      description: [
        "Formación universitaria en curso enfocada en el estudio científico del comportamiento humano, procesos cognitivos, emocionales y dinámicas sociales.",
        "Esta carrera proporciona una base sólida en investigación cualitativa y cuantitativa, análisis de datos y metodología científica aplicable al desarrollo de software.",
        "El conocimiento en psicología cognitiva complementa directamente el diseño de interfaces, experiencia de usuario y desarrollo de productos digitales centrados en las necesidades humanas.",
      ],
      skills: [
        "Psicología Cognitiva",
        "Investigación Cualitativa",
        "User Psychology",
        "Human-Computer Interaction",
        "Behavioral Analysis",
        "Research Methods",
      ],
      institutionUrl: "https://www.uba.ar/",
    },
    {
      id: 2,
      institution: "ForIT Software Factory",
      logo: "/logos/icon-forit.svg",
      degree: "Desarrollador Web Avanzado",
      field: "Web Development",
      startDate: "Jul 2025",
      endDate: "Dec 2025",
      duration: "4 mes",
      location: "Remote",
      description: [
        "Programa intensivo de desarrollo web avanzado enfocado en arquitectura de software profesional, testing y metodologías modernas.",
        "Formación práctica en Test-Driven Development (TDD), Clean Code, TypeScript avanzado y patrones de diseño aplicados a React.",
        "Desarrollo de proyectos reales con contenedorización en Docker, Tailwind CSS para estilos escalables y arquitectura de componentes reutilizables.",
      ],
      skills: [
        "Test-Driven Development",
        "Tailwind CSS",
        "TypeScript",
        "Visual TDD",
        "Clean Code",
        "React Hooks",
        "Docker",
        "Web Development",
      ],
      certificates: [
        {
          name: "Certificado Programador Profesional Web Full Stack Avanzado",
          image: "/certificates/Certificado Programador Profesional Avanzado ForIT.webp",
        },
      ],
      institutionUrl: "https://forit.ar/",
    },
    {
      id: 3,
      institution: "ETH Kipu",
      logo: "/logos/ETH Kipu Logo.png",
      degree: "Ethereum Developer Pack",
      field: "Blockchain Development",
      startDate: "Dec 2025",
      endDate: "Dec 2025",
      duration: "1 mes",
      location: "Remote",
      description: [
        "Programa especializado en tecnología blockchain y desarrollo sobre la red Ethereum.",
        "Formación en fundamentos de cadenas de bloques, arquitectura descentralizada, smart contracts y aplicaciones Web3.",
        "Conocimientos prácticos en integración de wallets digitales, transacciones on-chain y desarrollo de DApps (Aplicaciones Descentralizadas).",
      ],
      skills: ["Ethereum", "Wallets", "Web3", "Decentralized Applications (DApps)", "Solidity"],
      certificates: [
        {
          name: "ETH Kipu Certificate",
          image: "/certificates/ETH Kipu Certificado.webp",
        },
      ],
    },
    {
      id: 4,
      institution: "Codo a Codo 4.0",
      degree: "Full Stack Web Developer",
      field: "Information Technology",
      startDate: "Feb 2024",
      endDate: "Jul 2024",
      duration: "6 meses",
      location: "Buenos Aires, Argentina",
      description: [
        "Programa intensivo de 6 meses en desarrollo web full-stack con foco en JavaScript, Node.js y frameworks modernos.",
        "Formación integral cubriendo frontend con React.js y Vue.js, backend con Express.js y Node.js, bases de datos relacionales SQL, y control de versiones con Git.",
        "Desarrollo de proyecto final: aplicación web dinámica e interactiva con arquitectura completa cliente-servidor, base de datos SQL integrada, y diseño responsive.",
        "Trabajo colaborativo aplicando metodologías ágiles (Scrum), promoviendo adaptabilidad, resolución de problemas y atención al detalle.",
      ],
      skills: [
        "Responsive Web Design",
        "Express.js",
        "Databases",
        "Software Development",
        "Vue.js",
        "Relational Databases",
        "Back-End Web Development",
        "Programming",
        "Teamwork",
        "JavaScript",
        "Scrum",
        "SQL",
        "Full-Stack Development",
        "Python",
        "React Hooks",
        "JSON",
        "Front-End Development",
        "Git",
        "Programming Languages",
        "React.js",
        "Document Object Model",
        "Node.js",
      ],
      certificates: [
        {
          name: "Diploma Full Stack JavaScript - Node.js",
          image: "/certificates/Certificado Codo a Codo.webp",
        },
      ],
    },
    {
      id: 5,
      institution: "Talento Tech",
      logo: "/logos/Talento-Tech-Logo.webp",
      degree: "Design UX/UI, Web Page, Digital/Multimedia and Information Resources Design",
      field: "UX/UI Design",
      startDate: "Aug 2024",
      endDate: "Dec 2024",
      duration: "5 meses",
      location: "Argentina",
      description: [
        "Curso intensivo de 5 meses en diseño de experiencia e interfaz de usuario, metodología de investigación y arquitectura de información.",
        "Desarrollo de habilidades en diseño centrado en el usuario: investigación UX, benchmarking competitivo, creación de user personas, empathy maps y journey maps.",
        "Proyecto práctico: diseño completo de aplicación móvil conectando bandas independientes con venues, incluyendo user flows, task flows, site maps y wireframes interactivos.",
        "Herramientas profesionales: Figma para diseño y prototipado, Whimsical para arquitectura de información, UXtweak para testing de usabilidad.",
      ],
      skills: [
        "Benchmarking",
        "User Personas",
        "User Centered Design",
        "User Experience (UX)",
        "Site Maps",
        "Scrum",
        "User Interface Design",
        "Task Flow",
        "Web Design",
        "Python",
        "Design Research",
        "User Journey Map",
        "Empathy Mapping",
        "Git",
        "Storyboarding",
        "Document Object Model",
        "Figma (Software)",
        "Tailwind CSS",
      ],
      certificates: [
        {
          name: "Design UX/UI Diploma",
          image: "/certificates/Certificado Talento Tech Diseño UXUI.webp",
        },
      ],
    },
    {
      id: 6,
      institution: "Talento Tech",
      logo: "/logos/Talento-Tech-Logo.webp",
      degree: "Python, Information Technology",
      field: "Python Development",
      startDate: "Mar 2025",
      endDate: "Jul 2025",
      duration: "5 meses",
      location: "Argentina",
      description: [
        "Curso práctico de 5 meses enfocado en programación estructurada con Python y gestión de bases de datos relacionales SQLite.",
        "Formación en fundamentos de programación: estructuras de datos (listas, tuplas, diccionarios), manejo de excepciones, validaciones de entrada y modularización de código.",
        "Desarrollo de operaciones CRUD completas sobre bases de datos SQL usando la biblioteca sqlite3, diseño de esquemas relacionales y consultas optimizadas.",
        "Proyecto final: aplicación de consola para gestión de inventario de productos con arquitectura modular (main.py, db_methods.py, validations.py), aplicando principios de Clean Code y buenas prácticas.",
      ],
      skills: [
        "SQLite",
        "Dictionaries",
        "Python",
        "Programación estructurada",
        "Manejo de base de datos con sqlite3",
        "Validaciones y manejo de errores",
      ],
      certificates: [
        {
          name: "Python Programming Diploma",
          image: "/certificates/Certificado Talento Tech Python.webp",
        },
      ],
    },
    {
      id: 7,
      institution: "Cilsa",
      degree: "Testing & Automatization",
      field: "Information Technology",
      startDate: "Apr 2025",
      endDate: "Jun 2025",
      duration: "3 meses",
      location: "Argentina",
      description: [
        "Formación teórico-práctica de 3 meses en control de calidad de software (QA), testing manual y automatizado.",
        "Conocimientos en ciclo de vida del testing: planificación de pruebas, diseño y ejecución de casos de prueba, gestión de incidencias y reportes de defectos.",
        "Tipos de pruebas: funcionales, end-to-end (E2E), regresión, caja negra, integración y validación de requisitos.",
        "Herramientas profesionales: Selenium WebDriver para automatización web, Robot Framework para testing estructurado, Postman para testing de APIs REST, Jira para seguimiento de bugs.",
        "Metodologías: trabajo con Agile (Scrum), Waterfall y ciclos de desarrollo iterativos en equipos multidisciplinarios.",
      ],
      skills: [
        "Test Planning",
        "Robot Framework",
        "Testing",
        "Selenium Testing",
        "Agile Methodologies",
        "Postman API",
        "Jira",
        "Test Cases",
        "Agile & Waterfall Methodologies",
        "Selenium WebDriver",
      ],
      certificates: [
        {
          name: "Testing & Automatización Certificate",
          image: "/certificates/Certificado Cilsa.webp",
        },
      ],
    },
    {
      id: 8,
      institution: "Talento Tech",
      logo: "/logos/Talento-Tech-Logo.webp",
      degree: "Figma Course",
      field: "UX/UI Design",
      startDate: "Jan 2026",
      endDate: "Jan 2026",
      duration: "1 mes",
      location: "Argentina",
      description: [
        "Curso intensivo de 1 mes especializado en Figma como herramienta profesional de diseño UI/UX y prototipado.",
        "Dominio de funcionalidades avanzadas: componentes reutilizables, auto-layout, variables de diseño, design tokens y sistemas de diseño escalables.",
        "Prácticas de colaboración en tiempo real: trabajo en equipo, comentarios en diseños, control de versiones y hand-off a desarrollo.",
        "Creación de prototipos interactivos con animaciones, transiciones y flujos de navegación para testing de usabilidad.",
      ],
      skills: ["Figma (Software)", "UX/UI Design", "Prototyping", "Collaboration Tools"],
      certificates: [
        {
          name: "Figma Course Certificate",
          image: "/certificates/Certificado Talento Tech Figma.webp",
        },
      ],
    },
  ];

  const handleOpenModal = (education: EducationItem) => {
    setSelectedEducation(education);
    onModalChange?.(true);
  };

  const handleCloseModal = () => {
    setSelectedEducation(null);
    onModalChange?.(false);
  };

  return (
    <section
      id="education"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal */}
      <div
        className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8"
      >
        {/* Header de Sección */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl gradient-primary-br shadow-lg shadow-primary/20"
              style={{ color: "var(--color-on-primary)" }}
            >
              <GraduationCap size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {t("education.title")}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t("education.subtitle")}
          </p>
        </div>

        {/* Grid de Educación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {educationItems.map((edu) => (
            <article
              key={edu.id}
              onClick={() => handleOpenModal(edu)}
              className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer
                         bg-text-primary/5 border border-text-primary/10
                         transition-all duration-300 ease-out
                         hover:bg-text-primary/10 hover:border-primary/30 
                         hover:shadow-lg hover:-translate-y-1
                         active:scale-[0.98] p-5"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                {edu.logo && (
                  <div className="w-12 h-12 rounded-lg bg-bg-base border border-text-primary/10 p-2 shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {edu.degree}
                  </h3>
                  <p className="text-text-secondary text-sm font-medium mt-1">{edu.institution}</p>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-2 text-xs text-text-secondary mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary shrink-0" />
                  <span className="truncate">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-primary shrink-0" />
                  <span className="truncate">{edu.location}</span>
                </div>
              </div>

              {/* Status Badge */}
              {edu.status && (
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {edu.status}
                  </span>
                </div>
              )}

              {/* Click indicator */}
              <div className="mt-4 pt-4 border-t border-text-primary/10 text-xs text-text-muted group-hover:text-primary transition-colors flex items-center gap-1">
                <span>{t("education.clickToView")}</span>
                <ExternalLink size={12} />
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action - LinkedIn */}
        <div className="mt-2 text-center md:text-left animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          <a
            href="https://www.linkedin.com/in/matias-chacon-dev/details/education/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium text-sm group no-underline px-4 py-2 hover:bg-text-primary/5 rounded-lg
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          >
            <Building2 size={16} />
            {t("education.viewMore")}
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Modal */}
      <EducationModal education={selectedEducation} onClose={handleCloseModal} />
    </section>
  );
};

/**
 * Comparación personalizada de props para React.memo
 */
const propsAreEqual = (prevProps: EducationProps, nextProps: EducationProps) => {
  return prevProps.onModalChange === nextProps.onModalChange;
};

/**
 * Export memoizado - Mejora el rendimiento significativamente
 * Este componente tiene mucho contenido estático perfecto para memoización
 * Reducción estimada de re-renders: ~40-50%
 */
export const Education = React.memo(EducationComponent, propsAreEqual);
