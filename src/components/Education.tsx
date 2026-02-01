import { useState } from 'react';
import { GraduationCap, MapPin, Calendar, ExternalLink, Building2, X, Award, FileText } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

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
  endDate: string | 'Present';
  duration: string;
  location: string;
  status?: string;
  description: string[];
  skills: string[];
  certificates?: Certificate[];
  institutionUrl?: string;
};

const EducationModal: React.FC<{ education: EducationItem | null; onClose: () => void }> = ({ education, onClose }) => {
  const { t } = useLanguage();

  if (!education) return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-bg-base/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300"
      role="dialog" 
      aria-modal="true" 
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300
                   bg-bg-base border border-text-primary/10
                   [&::-webkit-scrollbar]:w-2 
                   [&::-webkit-scrollbar-track]:bg-transparent 
                   [&::-webkit-scrollbar-thumb]:bg-primary/30 
                   [&::-webkit-scrollbar-thumb]:rounded-full 
                   hover:[&::-webkit-scrollbar-thumb]:bg-primary/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute right-4 top-4 md:right-6 md:top-6 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200 z-10 border-none
                     bg-text-primary/5 text-text-secondary
                     hover:bg-text-primary/10 hover:text-text-primary hover:rotate-90"
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <header className="pr-12 mb-6 pb-4 border-b border-text-primary/10">
          <div className="flex items-start gap-4 mb-3">
            {education.logo && (
              <div className="w-16 h-16 rounded-xl bg-bg-base border border-text-primary/10 p-3 shrink-0">
                <img 
                  src={education.logo} 
                  alt={`${education.institution} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="m-0 mb-2 text-text-primary text-2xl md:text-3xl font-bold leading-tight">
                {education.degree}
              </h3>
              <p className="text-primary font-semibold text-lg m-0">
                {education.institution}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              <span>{education.startDate} - {education.endDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              <span>{education.location}</span>
            </div>
            {education.status && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                {education.status}
              </span>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-6">
          {/* Description */}
          {education.description.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3 flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                {t('education.description')}
              </h4>
              <div className="space-y-2">
                {education.description.map((desc, idx) => (
                  <p key={idx} className="text-text-secondary text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {education.skills.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3 flex items-center gap-2">
                <Award size={16} className="text-primary" />
                {t('education.skills')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
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
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                {t('education.certificates')}
              </h4>
              <div className="space-y-3">
                {education.certificates.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-text-primary/5 border border-text-primary/10 hover:bg-text-primary/10 transition-colors"
                  >
                    {cert.image && (
                      <div className="w-16 h-16 rounded border border-text-primary/10 overflow-hidden shrink-0">
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
                      <p className="text-text-primary font-medium text-sm truncate">{cert.name}</p>
                      {cert.url && (
                        <a 
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs hover:underline inline-flex items-center gap-1 mt-1"
                        >
                          View Certificate
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Link */}
        {education.institutionUrl && (
          <div className="mt-6 pt-6 border-t border-text-primary/10">
            <a 
              href={education.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                         bg-primary shadow-lg shadow-primary/20
                         hover:opacity-90 hover:shadow-primary/30 hover:scale-[1.02]
                         transition-all duration-300 font-semibold text-sm no-underline"
              style={{ color: 'var(--color-on-primary)' }}
            >
              <Building2 size={16} />
              Visit {education.institution}
              <ExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export const Education: React.FC<EducationProps> = ({ onModalChange }) => {
  const { t } = useLanguage();
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  const educationItems: EducationItem[] = [
    {
      id: 1,
      institution: 'Universidad de Buenos Aires',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Seal_of_the_University_of_Buenos_Aires.svg/200px-Seal_of_the_University_of_Buenos_Aires.svg.png',
      degree: 'Licenciatura en Psicología',
      field: 'Psychology',
      startDate: '2021',
      endDate: 'Present',
      duration: '4 años',
      location: 'Buenos Aires, Argentina',
      status: '50% Completado',
      description: [
        'Actualmente cursando la Licenciatura en Psicología con un enfoque en comprender el comportamiento humano, procesos cognitivos y dinámicas sociales.',
        'Esta formación complementa mi trabajo en desarrollo de software al proporcionar una comprensión profunda de la experiencia del usuario, principios de diseño centrado en el humano y psicología aplicada a la tecnología.'
      ],
      skills: [
        'Psicología Cognitiva',
        'Investigación Cualitativa',
        'User Psychology',
        'Human-Computer Interaction',
        'Behavioral Analysis',
        'Research Methods'
      ],
      institutionUrl: 'https://www.uba.ar/'
    },
    {
      id: 2,
      institution: 'ForIT Software Factory',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHMlbKUKZ7U9Q/company-logo_200_200/company-logo_200_200/0/1719933821423/forit_software_factory_logo?e=1743033600&v=beta&t=sLCgEQVYY7EfCHJhVE3QNZZm0Ap6qHCp_Dc5TJg6jJo',
      degree: 'Desarrollador Web Avanzado',
      field: 'Web Development',
      startDate: 'Dec 2025',
      endDate: 'Dec 2025',
      duration: '1 mes',
      location: 'Remote',
      description: [
        'Certificación profesional en desarrollo web full-stack avanzado con énfasis en arquitectura limpia y mejores prácticas de la industria.'
      ],
      skills: [
        'Test-Driven Development',
        'Tailwind CSS',
        'TypeScript',
        'Visual TDD',
        'Clean Code',
        'React Hooks',
        'Docker',
        'Web Development'
      ],
      certificates: [
        {
          name: 'Certificado Programador Profesional Web Full Stack Avanzado',
          image: '/certificates/forit-certificate.png'
        }
      ],
      institutionUrl: 'https://forit.ar/'
    },
    {
      id: 3,
      institution: 'ETH Kipu',
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHy3Y5Y7Y_7Yw/company-logo_200_200/company-logo_200_200/0/1725977086787/eth_kipu_logo?e=1743033600&v=beta&t=Ym9oqYxMEtLJ9l0Qkz4jV7JbZm8YzQ4qY_qYqYqYqYq',
      degree: 'Ethereum Developer Pack',
      field: 'Blockchain Development',
      startDate: 'Dec 2025',
      endDate: 'Dec 2025',
      duration: '1 mes',
      location: 'Remote',
      description: [
        'Programa especializado en desarrollo blockchain enfocado en la plataforma Ethereum y aplicaciones descentralizadas.'
      ],
      skills: [
        'Ethereum',
        'Wallets',
        'Web3',
        'Decentralized Applications (DApps)',
        'Solidity'
      ],
      certificates: [
        {
          name: 'ETH Kipu Certificate',
          image: '/certificates/eth-kipu.png'
        }
      ]
    },
    {
      id: 4,
      institution: 'Codo a Codo 4.0',
      degree: 'Full Stack Web Developer',
      field: 'Information Technology',
      startDate: 'Feb 2024',
      endDate: 'Jul 2024',
      duration: '6 meses',
      location: 'Buenos Aires, Argentina',
      description: [
        'Programa intensivo de desarrollo web full-stack que proporcionó una base sólida en lenguajes y técnicas de programación fundamentales, así como la capacidad de resolver problemas mientras se fomenta una atención meticulosa al detalle y un compromiso con el aprendizaje continuo.',
        'El curso incluyó desarrollo práctico con Node.js y la oportunidad de construir un sitio web dinámico integrado con una base de datos SQL, mejorando la experiencia práctica tanto en desarrollo front-end como back-end.',
        'Este enfoque colaborativo no solo refinó las habilidades técnicas sino que también inculcó la adaptabilidad requerida para prosperar en el panorama tecnológico en constante evolución de hoy.'
      ],
      skills: [
        'Responsive Web Design',
        'Express.js',
        'Databases',
        'Software Development',
        'Vue.js',
        'Relational Databases',
        'Back-End Web Development',
        'Programming',
        'Teamwork',
        'JavaScript',
        'Scrum',
        'SQL',
        'Full-Stack Development',
        'Python',
        'React Hooks',
        'JSON',
        'Front-End Development',
        'Git',
        'Programming Languages',
        'React.js',
        'Document Object Model',
        'Node.js'
      ],
      certificates: [
        {
          name: 'Diploma Full Stack JavaScript - Node.js',
          image: '/certificates/codo-a-codo-diploma.png'
        }
      ]
    },
    {
      id: 5,
      institution: 'Talento Tech',
      degree: 'Design UX/UI, Web Page, Digital/Multimedia and Information Resources Design',
      field: 'UX/UI Design',
      startDate: 'Aug 2024',
      endDate: 'Dec 2024',
      duration: '5 meses',
      location: 'Argentina',
      description: [
        'Curso intensivo de diseño UX/UI como parte del programa Talento Tech. Desarrollé habilidades prácticas en investigación de usuarios, benchmarking y arquitectura de información.',
        'Diseñé entregables clave incluyendo user flows, task flows, site maps y user journey maps para un proyecto de aplicación móvil que conecta bandas independientes con lugares.',
        'Usando herramientas como Whimsical, Figma y UXtweak, traduje las necesidades de los usuarios en soluciones digitales claras e intuitivas, enfocándome en optimizar la experiencia general del usuario y asegurar una navegación fluida a través del producto.'
      ],
      skills: [
        'Benchmarking',
        'User Personas',
        'User Centered Design',
        'User Experience (UX)',
        'Site Maps',
        'Scrum',
        'User Interface Design',
        'Task Flow',
        'Web Design',
        'Python',
        'Design Research',
        'User Journey Map',
        'Empathy Mapping',
        'Git',
        'Storyboarding',
        'Document Object Model',
        'Figma (Software)',
        'Tailwind CSS'
      ],
      certificates: [
        {
          name: 'Design UX/UI Diploma',
          image: '/certificates/talento-tech-ux.png'
        }
      ]
    },
    {
      id: 6,
      institution: 'Talento Tech',
      degree: 'Python, Information Technology',
      field: 'Python Development',
      startDate: 'Mar 2025',
      endDate: 'Jul 2025',
      duration: '5 meses',
      location: 'Argentina',
      description: [
        'Curso práctico enfocado en el desarrollo de aplicaciones en Python utilizando bases de datos SQLite.',
        'A lo largo del curso se abordaron temas fundamentales de programación estructurada, manejo de errores, modularización del código, validaciones de entrada, y operaciones CRUD sobre bases de datos relacionales.',
        'Como proyecto final, desarrollé una aplicación de consola para gestionar inventario de productos, aplicando principios de organización en módulos (main.py, db_methods.py, validations.py) y respetando buenas prácticas de desarrollo.'
      ],
      skills: [
        'SQLite',
        'Dictionaries',
        'Python',
        'Programación estructurada',
        'Manejo de base de datos con sqlite3',
        'Validaciones y manejo de errores'
      ],
      certificates: []
    },
    {
      id: 7,
      institution: 'Cilsa',
      degree: 'Testing & Automatization',
      field: 'Information Technology',
      startDate: 'Apr 2025',
      endDate: 'Jun 2025',
      duration: '3 meses',
      location: 'Argentina',
      description: [
        'Formación teórico-práctica orientada al control de calidad del software mediante testing manual y automatizado.',
        'Aprendí a diseñar y ejecutar casos de prueba, a gestionar incidencias y reportes, y a trabajar dentro de ciclos de desarrollo utilizando metodologías ágiles.',
        'Se abordaron conceptos clave como pruebas funcionales, E2E, de regresión y de caja negra. Realicé ejercicios prácticos utilizando herramientas específicas del entorno profesional.'
      ],
      skills: [
        'Test Planning',
        'Robot Framework',
        'Testing',
        'Selenium Testing',
        'Agile Methodologies',
        'Postman API',
        'Jira',
        'Test Cases',
        'Agile & Waterfall Methodologies',
        'Selenium WebDriver'
      ],
      certificates: []
    }
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
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header de Sección */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl gradient-primary-br shadow-lg shadow-primary/20" style={{ color: 'var(--color-on-primary)' }}>
              <GraduationCap size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {t('education.title')}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('education.subtitle')}
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
                  <p className="text-text-secondary text-sm font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-2 text-xs text-text-secondary mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary shrink-0" />
                  <span className="truncate">{edu.startDate} - {edu.endDate}</span>
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
                <span>{t('education.clickToView')}</span>
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
            {t('education.viewMore')}
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Modal */}
      <EducationModal education={selectedEducation} onClose={handleCloseModal} />
    </section>
  );
};
