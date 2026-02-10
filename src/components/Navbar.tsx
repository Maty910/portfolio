import { Briefcase, FolderGit, Globe, GraduationCap, Languages, Moon, Sun } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload, FiHome, FiMail, FiTool } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import type { Section, SetActive } from "../types";

type HeaderProps = {
  activeSection: Section;
  setActiveSection: SetActive;
};

// --- 1. COMPONENTE ANIMADO TEMA (BOUNCY POP) ---
const AnimatedThemeIcon = ({ isDark, size = 20 }: { isDark: boolean; size?: number }) => (
  <div
    className="relative flex items-center justify-center overflow-hidden"
    style={{ width: size, height: size }}
  >
    <Sun
      size={size}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        ${
          isDark
            ? "scale-0 rotate-[180deg] opacity-0"
            : "scale-100 rotate-0 opacity-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
        }
      `}
    />
    <Moon
      size={size}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        ${
          isDark
            ? "scale-100 rotate-0 opacity-100 text-primary drop-shadow-[0_0_8px_rgba(99,83,242,0.6)]"
            : "scale-0 -rotate-[180deg] opacity-0"
        }
      `}
    />
  </div>
);

// --- 2. COMPONENTE ANIMADO IDIOMA (FLIP 3D) ---
const AnimatedLangIcon = ({ lang, size = 20 }: { lang: "es" | "en"; size?: number }) => (
  <div
    className="relative flex items-center justify-center"
    style={{ width: size, height: size, perspective: "1000px" }}
  >
    <div
      className={`relative w-full h-full transition-transform duration-700 preserve-3d`}
      style={{
        transformStyle: "preserve-3d",
        transform: lang === "en" ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center backface-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Globe size={size} className="text-primary drop-shadow-[0_0_8px_rgba(99,83,242,0.4)]" />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center backface-hidden"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <Languages
          size={size}
          className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
        />
      </div>
    </div>
  </div>
);

export const Navbar: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [expanded, setExpanded] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem("sidebarExpanded");
      return v ? JSON.parse(v) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Language change effect
  }, [lang]);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("sidebarExpanded", JSON.stringify(expanded));
    } catch {
      /* Error al guardar en localStorage */
    }
  }, [expanded]);

  const themeRef = useRef(theme);
  const expandedRef = useRef(expanded);

  useEffect(() => {
    themeRef.current = theme;
    expandedRef.current = expanded;
  }, [theme, expanded]);

  const scrollToSection = React.useCallback(
    (sectionId: Section) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(sectionId);
      }
    },
    [setActiveSection]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "1") scrollToSection("home");
      if (e.key === "2") scrollToSection("experience");
      if (e.key === "3") scrollToSection("projects");
      if (e.key === "4") scrollToSection("skills");
      if (e.key === "5") scrollToSection("education");
      if (e.key === "6") scrollToSection("contact");
      if (e.key.toLowerCase() === "m") setExpanded((v) => !v);
      if (e.key.toLowerCase() === "l") toggleLanguage();
      if (e.key.toLowerCase() === "t") setTheme(themeRef.current === "dark" ? "light" : "dark");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [scrollToSection, setExpanded, toggleLanguage, setTheme]);

  const nav = [
    { id: "home", label: t("nav.home"), Icon: FiHome },
    { id: "experience", label: t("nav.experience"), Icon: Briefcase },
    { id: "projects", label: t("nav.projects"), Icon: FolderGit },
    { id: "skills", label: t("nav.skills"), Icon: FiTool },
    { id: "education", label: t("nav.education"), Icon: GraduationCap },
    { id: "contact", label: t("nav.contact"), Icon: FiMail },
  ];

  return (
    <>
      {/* ========== DESKTOP SIDEBAR ========== */}
      <aside
        className="z-[999] hidden min-[881px]:fixed min-[881px]:left-0 min-[881px]:top-0 min-[881px]:h-screen min-[881px]:flex min-[881px]:flex-col min-[881px]:justify-between min-[881px]:bg-bg-base/80 min-[881px]:backdrop-blur-xl min-[881px]:border-r min-[881px]:border-text-primary/5 min-[881px]:shadow-[10px_0_30px_rgba(0,0,0,0.05)] dark:min-[881px]:shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-[width,padding] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] min-[881px]:py-6"
        style={{
          width: expanded ? "240px" : "88px",
          padding: expanded ? "24px 20px" : "24px 16px",
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        aria-expanded={expanded}
      >
        <div
          className={`hidden min-[881px]:flex flex-col gap-3 items-center w-full transition-all duration-[800ms] ${expanded ? "items-start" : ""}`}
        >
          <button
            className="group w-10 h-10 rounded-xl bg-transparent border-none flex flex-col items-end justify-center gap-[5px] hover:bg-text-primary/10 transition-colors cursor-pointer"
            onClick={() => setExpanded((v) => !v)}
            title={t("nav.toggleMenu")}
          >
            <span
              className={`h-0.5 bg-text-primary rounded-full transition-all duration-300 group-hover:w-5 ${expanded ? "w-5" : "w-4"}`}
            />
            <span
              className={`h-0.5 bg-text-primary rounded-full transition-all duration-300 group-hover:w-5 ${expanded ? "w-3" : "w-5"}`}
            />
            <span
              className={`h-0.5 bg-text-primary rounded-full transition-all duration-300 group-hover:w-5 ${expanded ? "w-5" : "w-3"}`}
            />
          </button>

          <div
            className={`flex items-center gap-3 overflow-hidden whitespace-nowrap transition-all duration-[800ms] ${expanded ? "w-full" : "w-10"}`}
          >
            <div
              className={`flex flex-col justify-center transition-all duration-[800ms] ${expanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}
            >
              <span className="font-bold text-text-primary text-sm leading-tight">
                {t("header.displayName")}
              </span>
              <span className="text-[8px] text-text-secondary uppercase tracking-tight">
                {t("header.name")}
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex items-center w-full">
          <ul className="w-full list-none p-0 m-0 flex flex-col gap-3">
            {nav.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id} className="relative group w-full">
                  <button
                    onClick={() => scrollToSection(id as Section)}
                    className={`relative w-full flex items-center p-2 rounded-xl cursor-pointer border border-transparent transition-all duration-300 ease-out outline-none overflow-hidden hover:bg-text-primary/5 hover:border-text-primary/5 ${
                      isActive ? "bg-primary/10 border-primary/20" : ""
                    } ${expanded ? "gap-3" : "gap-0 justify-center"}`}
                    title={label}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_10px_rgba(99,83,242,0.4)]" />
                    )}
                    <div className="flex items-center justify-center w-5 h-5 shrink-0">
                      <Icon
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-primary scale-110"
                            : "text-text-secondary group-hover:text-text-primary"
                        }`}
                        style={{ strokeWidth: 2 }}
                      />
                    </div>
                    <span
                      className={`font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "text-text-primary font-semibold"
                          : "text-text-secondary group-hover:text-text-primary"
                      } ${
                        !expanded
                          ? "opacity-0 w-0 translate-x-4"
                          : "opacity-100 w-auto translate-x-0"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`max-[880px]:hidden flex flex-col gap-3 pt-3 border-t border-text-primary/10 w-full ${!expanded ? "items-center" : ""}`}
        >
          <a
            href="/CV/CV Matias Chacon.pdf"
            download
            className={`group btn-shiny relative flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-r from-primary to-primary/80 font-bold shadow-[0_4px_14px_rgba(99,83,242,0.3)] transition-all duration-300 ease-out hover:shadow-[0_6px_20px_rgba(99,83,242,0.5)] hover:scale-[1.02] active:scale-95 h-11 ${expanded ? "w-full px-4 gap-3" : "w-11 px-0 gap-0"}`}
            style={{ color: "var(--color-on-primary)" }}
            title={t("header.downloadCv")}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            <FiDownload className="text-xl shrink-0 relative z-20" />
            <span
              className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-300 relative z-20 ${expanded ? "opacity-100 w-auto ml-1" : "opacity-0 w-0 ml-0 absolute"}`}
            >
              {t("header.downloadCv")}
            </span>
          </a>

          <div className={`flex flex-col gap-2 ${!expanded ? "items-center" : "items-stretch"}`}>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`relative group flex items-center rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-secondary hover:bg-text-primary/10 hover:text-text-primary hover:border-text-primary/20 transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 h-10 ${expanded ? "w-full gap-3 px-3 justify-start" : "w-10 p-0 justify-center"}`}
              title={t("theme.toggle")}
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5">
                <AnimatedThemeIcon isDark={isDark} size={expanded ? 18 : 20} />
              </div>
              <span
                className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${expanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4 absolute pointer-events-none"}`}
              >
                {isDark ? t("theme.dark") : t("theme.light")}
              </span>
            </button>

            <button
              onClick={toggleLanguage}
              className={`relative group flex items-center rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-secondary hover:bg-text-primary/10 hover:text-text-primary hover:border-text-primary/20 transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 h-10 ${expanded ? "w-full gap-3 px-3 justify-start" : "w-10 p-0 justify-center"}`}
              title={t("nav.toggleLang")}
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5">
                <AnimatedLangIcon lang={lang} size={expanded ? 18 : 20} />
              </div>
              <span
                className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${expanded ? "opacity-100 w-auto translate-x-0" : "opacity-0 w-0 -translate-x-4 absolute pointer-events-none"}`}
              >
                {lang === "en" ? "English" : "Español"}
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* ========== MOBILE MENU BUTTON ========== */}
      {mounted &&
        createPortal(
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`min-[881px]:hidden fixed top-6 right-6 z-[10000] w-14 h-14 rounded-2xl backdrop-blur-xl border shadow-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] animate-in fade-in slide-in-from-top-4 ${
              mobileMenuOpen
                ? "bg-transparent border-transparent text-text-primary scale-110"
                : "bg-bg-base/80 border-text-primary/10 text-text-primary hover:scale-105 active:scale-95"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ top: "calc(24px + env(safe-area-inset-top, 0px))" }}
          >
            {/* Icons container */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? "w-6 rotate-45" : "w-6 -translate-y-[7px]"}`}
              />
              <span
                className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? "w-0 opacity-0" : "w-4 translate-x-1"}`}
              />
              <span
                className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? "w-6 -rotate-45" : "w-3 translate-x-1.5 translate-y-[7px]"}`}
              />
            </div>
          </button>,
          document.body
        )}

      {/* ========== MOBILE FULLSCREEN OVERLAY MENU ========== */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="min-[881px]:hidden fixed inset-0 z-[9999] overflow-hidden">
            {/* Background - Consistent Glassmorphism with Reveal Animation */}
            <div
              className={`absolute inset-0 bg-bg-base/98 backdrop-blur-3xl transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            />

            {/* Circular Reveal Effect */}
            <div
              className="absolute top-6 right-6 w-14 h-14 bg-bg-base rounded-full animate-[expandCircle_0.6s_ease-out_forwards] pointer-events-none"
              style={{ top: "calc(24px + env(safe-area-inset-top, 0px))" }}
            />

            {/* Contenido del Menu */}
            <div
              className="relative h-full flex flex-col px-8 pt-8 pb-10 opacity-0 animate-[fadeIn_0.3s_ease-out_0.2s_forwards]"
              style={{
                paddingTop: "calc(32px + env(safe-area-inset-top, 0px))",
                paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex flex-col opacity-0 animate-[slideInLeft_0.5s_ease-out_0.1s_forwards]">
                  <h2 className="text-2xl font-bold font-heading text-text-primary">
                    {t("header.displayName")}
                  </h2>
                  <p className="text-xs text-text-secondary uppercase tracking-widest">
                    {t("header.name")}
                  </p>
                </div>
              </div>

              {/* Navigation Items - Consistent Typography */}
              <nav className="flex-1 flex flex-col justify-center gap-4">
                {nav.map(({ id, label, Icon }, index) => {
                  const isActive = activeSection === id;
                  const delay = index * 50 + 200;

                  return (
                    <button
                      key={id}
                      onClick={() => {
                        scrollToSection(id as Section);
                        setMobileMenuOpen(false);
                      }}
                      className={`group flex items-center gap-5 text-left p-2 rounded-xl transition-all duration-300 opacity-0 animate-[slideInBottom_0.5s_ease-out_forwards] ${
                        isActive ? "" : "hover:translate-x-2"
                      }`}
                      style={{
                        animationDelay: `${delay}ms`,
                      }}
                    >
                      <div
                        className={`p-3 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                            : "bg-text-primary/5 text-text-secondary group-hover:bg-text-primary/10 group-hover:text-text-primary"
                        }`}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <span
                        className={`text-3xl font-bold font-heading tracking-tight transition-colors ${
                          isActive
                            ? "text-text-primary"
                            : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Actions - Consistent Cards */}
              <div className="grid grid-cols-2 gap-3 animate-in slide-in-from-bottom-8 fade-in duration-500 delay-200">
                {/* CV Button */}
                <a
                  href="/CV/CV Matias Chacon.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 flex items-center justify-between p-4 rounded-xl bg-text-primary/5 hover:bg-text-primary/10 transition-colors group no-underline border border-text-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <FiDownload size={20} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold text-text-primary">
                        {t("header.downloadCv")}
                      </span>
                      <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                        PDF
                      </span>
                    </div>
                  </div>
                </a>

                {/* Theme Toggle */}
                <button
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTheme(
                      isDark ? "light" : "dark",
                      rect.left + rect.width / 2,
                      rect.top + rect.height / 2
                    );
                  }}
                  className="flex flex-row items-center justify-center gap-2 p-4 rounded-xl bg-text-primary/5 hover:bg-text-primary/10 transition-colors border border-text-primary/5 active:scale-95"
                >
                  <AnimatedThemeIcon isDark={isDark} size={20} />
                  <span className="text-xs font-bold text-text-primary">
                    {isDark ? "Dark" : "Light"}
                  </span>
                </button>

                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex flex-row items-center justify-center gap-2 p-4 rounded-xl bg-text-primary/5 hover:bg-text-primary/10 transition-colors border border-text-primary/5 active:scale-95"
                >
                  <AnimatedLangIcon lang={lang} size={20} />
                  <span className="text-xs font-bold text-text-primary uppercase">{lang}</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, 10px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, -5px) rotate(3deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Desktop floating controls - REMOVES as per request */}
    </>
  );
};
