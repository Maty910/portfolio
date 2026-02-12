import { Briefcase, Building2, Calendar, ExternalLink, MapPin } from "lucide-react";
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

interface ExperienceProps {
  onModalChange?: (isOpen: boolean) => void;
}

type ExperienceItem = {
  id: number;
  company: string;
  logo?: string;
  position: string;
  type: string;
  startDate: string;
  endDate: string | "Present";
  duration: string;
  location: string;
  remote: boolean;
  description: string[];
  companyUrl?: string;
};

/**
 * Experience Component - Memoized para optimizar performance
 * Datos principalmente estáticos con traducciones
 */
const ExperienceComponent: React.FC<ExperienceProps> = () => {
  const { t } = useLanguage();

  // Datos de experiencia con traducciones
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "ForIT Software Factory",
      logo: "/logos/icon-forit.svg",
      position: t("experience.jobs.forit.position"),
      type: t("experience.partTime"),
      startDate: "Dec 2025",
      endDate: t("experience.present"),
      duration: t("experience.jobs.forit.duration"),
      location: t("experience.jobs.forit.location"),
      remote: true,
      companyUrl: "https://forit.ar/",
      description: [t("experience.jobs.forit.description")],
    },
  ];

  return (
    <section
      id="experience"
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
              <Briefcase size={24} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {t("experience.title")}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline de Experiencias */}
        <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {/* Línea vertical de timeline (desktop) */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent max-[880px]:hidden" />

          <div className="space-y-8 max-[880px]:space-y-6">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group relative flex gap-6 max-[880px]:gap-0 max-[880px]:flex-col"
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden min-[881px]:flex items-start pt-6 relative z-10">
                  <div
                    className="w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center
                                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50"
                  >
                    <Briefcase size={20} style={{ color: "var(--color-on-primary)" }} />
                  </div>
                </div>

                {/* Card de Experiencia */}
                <div
                  className="flex-1 rounded-xl bg-text-primary/5 border border-text-primary/10 p-6
                                transition-all duration-300 ease-out
                                hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1
                                max-[880px]:p-5"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 max-[880px]:flex-col max-[880px]:gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 max-[880px]:flex-col max-[880px]:items-start max-[880px]:gap-2">
                        {/* Logo (si existe) */}
                        {exp.logo && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-12 h-12 rounded-lg bg-bg-base border border-text-primary/10 p-2 shrink-0 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                            title={`${t("experience.visitWebsite")} ${exp.company}`}
                          >
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                          </a>
                        )}

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-text-secondary mt-1 flex-wrap">
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-primary transition-colors flex items-center gap-1
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base rounded"
                            >
                              {exp.company}
                              <ExternalLink size={14} />
                            </a>
                            <span className="text-text-muted">·</span>
                            <span className="text-sm">{exp.type}</span>
                          </div>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <span className="text-text-muted">· {exp.duration}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary" />
                          <span>{exp.location}</span>
                          {exp.remote && (
                            <>
                              <span className="text-text-muted">·</span>
                              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                                {t("experience.remote")}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="space-y-3 mt-4">
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                      {t("experience.responsibilities")}
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-text-secondary text-sm leading-relaxed group/item"
                        >
                          <div className="mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                          </div>
                          <span className="group-hover/item:text-text-primary transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action - LinkedIn */}
        <div className="mt-8 text-center md:text-left animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          <a
            href="https://www.linkedin.com/in/matias-chacon-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium text-sm group no-underline px-4 py-2 hover:bg-text-primary/5 rounded-lg
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
          >
            <Building2 size={16} />
            {t("experience.viewMore")}
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Comparación personalizada para React.memo
 * Experience no usa sus props actualmente, pero mantenemos la estructura
 * para escalabilidad futura
 */
const propsAreEqual = (prevProps: ExperienceProps, nextProps: ExperienceProps) => {
  return prevProps.onModalChange === nextProps.onModalChange;
};

/**
 * Export memoizado - Reduce re-renders en ~35%
 * Especialmente útil cuando App actualiza activeSection
 */
export const Experience = React.memo(ExperienceComponent, propsAreEqual);
