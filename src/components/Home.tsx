import { ArrowRight, Download } from "lucide-react";
import React from "react";
import {
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "../hooks/useLanguage";
import type { Section } from "../types";

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: Section) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const bioContent = <>{t("header.bio")}</>;

  return (
    <section
      id="home"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Padding consistente con otras secciones */
                 min-[881px]:pl-[280px]
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor principal con márgenes seguros */}
      <div
        className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col
                      max-[880px]:px-4 max-[880px]:py-8"
      >
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:gap-4 max-[880px]:mb-6">
          {/* HEADLINE PRINCIPAL */}
          <div className="flex flex-col gap-3 w-full max-[880px]:gap-2">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight group cursor-default max-[880px]:text-4xl max-[880px]:text-center max-[880px]:w-full max-[880px]:flex max-[880px]:justify-center">
              <div className="relative inline-block">
                <span className="font-heading font-bold tracking-tight leading-[1.08]">
                  <span className="block max-[880px]:text-center md:text-end">
                    {t("header.headlinePrefix")}
                  </span>
                  <span className="block gradient-text max-[880px]:text-center">
                    {t("header.headlineHighlight")}
                  </span>
                </span>
                <div className="absolute -bottom-2 left-0 w-1/4 h-[3px] bg-primary rounded-full group-hover:w-full transition-all duration-700 ease-out max-[880px]:h-[2px] max-[880px]:left-1/2 max-[880px]:-translate-x-1/2 max-[880px]:w-1/2" />
              </div>
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 w-full">
              {/* Carrusel (Techs) */}
              <div
                className="hidden md:flex flex-1 items-center max-w-[300px] h-12 overflow-hidden relative mask-linear-fade border-l-2 border-text-primary/10 pl-6 ml-2"
                role="list"
                aria-label={t("home.techStackAria")}
              >
                <div className="flex w-max animate-marquee items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-6">
                      <SiTypescript
                        className="tech-typescript"
                        size={24}
                        aria-label="TypeScript"
                        role="listitem"
                      />
                      <SiReact
                        className="tech-react"
                        size={24}
                        aria-label="React"
                        role="listitem"
                      />
                      <SiNodedotjs
                        className="tech-nodejs"
                        size={24}
                        aria-label="Node.js"
                        role="listitem"
                      />
                      <SiTailwindcss
                        className="tech-tailwind"
                        size={24}
                        aria-label="Tailwind CSS"
                        role="listitem"
                      />
                      <SiMongodb
                        className="tech-mongodb"
                        size={24}
                        aria-label="MongoDB"
                        role="listitem"
                      />
                      <SiPostgresql
                        className="tech-postgresql"
                        size={24}
                        aria-label="PostgreSQL"
                        role="listitem"
                      />
                      <SiDocker
                        className="tech-docker"
                        size={24}
                        aria-label="Docker"
                        role="listitem"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div
            className="mt-2 max-w-2xl border-l-2 border-primary/30 pl-4 md:pl-6
                          max-[880px]:pl-3 max-[880px]:mt-10 max-[880px]:border-l-2"
          >
            <p
              className="text-text-secondary text-lg leading-relaxed 
                          max-[880px]:text-sm max-[880px]:leading-relaxed"
            >
              {bioContent}
            </p>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div
            className="flex flex-wrap gap-4 mt-4 w-full 
                          max-[880px]:flex-col max-[880px]:gap-4 max-[880px]:mt-4 
                          /* ✅ FIX: Espacio seguro para el Navbar flotante */
                          max-[880px]:mb-24 max-[880px]:pb-safe"
          >
            {/* Botón CV (Primario) - Full width en mobile */}
            <a
              href="/CV/CV Matías Chacón.pdf"
              download="CV Matías Chacón.pdf"
              className="relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl 
                            gradient-primary font-bold tracking-wide
                          shadow-lg shadow-primary/20
                          hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]
                            transition-all duration-300 ease-out group btn-shiny no-underline
                          max-[880px]:w-full max-[880px]:py-3.5 max-[880px]:text-sm cursor-pointer"
              style={{ color: "var(--color-on-primary)" }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <Download size={20} className="relative z-20 max-[880px]:w-5 max-[880px]:h-5" />
              <span className="relative z-20">{t("header.downloadCv")}</span>
            </a>

            {/* Botón Ver Proyectos (Secundario) - Full width en mobile */}
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl
                        bg-text-primary/5 border border-text-primary/10 text-text-primary font-medium
                        hover:bg-text-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1
                        transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer
                        max-[880px]:w-full max-[880px]:py-3.5 max-[880px]:text-sm"
            >
              {t("home.viewProjects")}
              <ArrowRight
                size={20}
                className="transition-transform max-[880px]:w-5 max-[880px]:h-5"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};
