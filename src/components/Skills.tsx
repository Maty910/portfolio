import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import {
  SiCanva,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSolidity,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useLanguage } from "../hooks/useLanguage";

// --- DATA CONFIGURATION ---
const SKILL_CATEGORIES = [
  {
    id: "frontend_ui",
    title: "Frontend & UI",
    icon: Layout,
    // Colores semánticos para los acentos
    accentClass: "text-purple-500",
    borderClass: "group-hover:border-purple-500/30",
    skills: [
      { name: "React", icon: SiReact, color: "var(--color-react)" },
      { name: "TypeScript", icon: SiTypescript, color: "var(--color-typescript)" },
      { name: "Tailwind", icon: SiTailwindcss, color: "var(--color-tailwind)" },
      { name: "HTML5", icon: SiHtml5, color: "var(--color-html5)" },
      { name: "CSS3", icon: SiCss3, color: "var(--color-css3)" },
      { name: "JavaScript", icon: SiJavascript, color: "var(--color-javascript)" },
      { name: "Figma", icon: SiFigma, color: "var(--color-figma)" },
      { name: "Canva", icon: SiCanva, color: "var(--color-canva)" },
    ],
  },
  {
    id: "backend_data",
    title: "Backend & Data",
    icon: Database,
    accentClass: "text-emerald-500",
    borderClass: "group-hover:border-emerald-500/30",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "var(--color-nodejs)" },
      { name: "Express", icon: SiExpress, color: "var(--color-express)" },
      { name: "Python", icon: SiPython, color: "var(--color-python)" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "var(--color-postgresql)" },
      { name: "MongoDB", icon: SiMongodb, color: "var(--color-mongodb)" },
      { name: "SQLite", icon: SiSqlite, color: "var(--color-sqlite)" },
      { name: "JSON", icon: SiJson, color: "var(--color-json)" },
      { name: "Solidity", icon: SiSolidity, color: "var(--color-solidity)" },
    ],
  },
  {
    id: "tools_devops",
    title: "Tools & DevOps",
    icon: Wrench,
    accentClass: "text-blue-500",
    borderClass: "group-hover:border-blue-500/30",
    skills: [
      { name: "Git", icon: SiGit, color: "var(--color-git)" },
      { name: "GitHub", icon: SiGithub, color: "var(--color-github)" },
      { name: "VS Code", icon: VscVscode, color: "var(--color-vscode)" },
      { name: "Postman", icon: SiPostman, color: "var(--color-postman)" },
      { name: "Netlify", icon: SiNetlify, color: "var(--color-netlify)" },
      { name: "Docker", icon: SiDocker, color: "var(--color-docker)" },
    ],
  },
];

const SOFT_SKILLS = [
  { key: "problemSolving", icon: BrainCircuit, color: "text-purple-500" },
  { key: "teamWork", icon: Globe, color: "text-blue-500" },
  { key: "fastLearning", icon: Sparkles, color: "text-amber-500" },
  { key: "adaptability", icon: Code2, color: "text-emerald-500" },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Mantenemos tu padding original para desktop */
                 min-[881px]:pl-[280px]
                 /* En mobile ocupa el alto necesario */
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal */}
      <div
        className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8 max-[880px]:justify-start"
      >
        {/* Header de Sección */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-500 shadow-lg shadow-primary/20">
              <Cpu
                size={24}
                className="max-[880px]:w-5 max-[880px]:h-5"
                style={{ color: "var(--color-on-primary)" }}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight max-[880px]:text-2xl">
              {t("skills.title")}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t("skills.sub")}
          </p>
        </div>

        {/* --- GRID FLUIDO INTELIGENTE ---
            El secreto está en `minmax(280px, 1fr)`.
            Esto dice: "Hacé columnas que midan al menos 280px. Si no entran 3, poné 2. Si no entran 2, poné 1".
            Así, cuando el sidebar se expande, el grid se reacomoda solo y no se rompe.
        */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 max-[880px]:gap-4">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group flex flex-col p-6 rounded-2xl h-full
                          /* Fondo Semántico: Se ve bien en Dark y Light */
                          bg-text-primary/5 border border-text-primary/10
                          /* Hover: Efecto sutil de elevación y borde de color */
                          hover:bg-text-primary/[0.07] ${category.borderClass} hover:shadow-xl hover:-translate-y-1
                          transition-all duration-500 ease-out
                          max-[880px]:p-5`}
              style={{
                animationDelay: `${150 + categoryIndex * 100}ms`,
              }}
            >
              {/* Header de la Tarjeta */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-text-primary/10">
                <div
                  className={`p-2 rounded-lg bg-bg-base border border-text-primary/10 shadow-sm ${category.accentClass}`}
                >
                  {/* El icono usa el color de acento definido */}
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-text-primary text-lg tracking-wide">
                  {t(`skills.categories.${category.id}.title`) || category.title}
                </h3>
              </div>

              {/* Grid de Badges */}
              <div className="flex flex-wrap gap-2 content-start">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill relative flex items-center gap-2 px-3 py-1.5 rounded-lg 
                               border border-text-primary/10 cursor-default overflow-hidden
                               bg-bg-base 
                               hover:scale-105 hover:border-transparent hover:shadow-md
                               transition-all duration-300 ease-out"
                    // Inyectamos el color para usarlo en CSS dinámico
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                  >
                    {/* Fondo con color al hacer hover (muy sutil) */}
                    <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 bg-[var(--skill-color)]" />

                    {/* Borde coloreado al hover */}
                    <div className="absolute inset-0 border border-transparent group-hover/skill:border-[var(--skill-color)]/40 rounded-lg transition-colors duration-300" />

                    {/* Icono (siempre con su color original para identidad visual) */}
                    <skill.icon
                      className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6"
                      style={{ color: skill.color }}
                    />

                    {/* Texto (se adapta al tema, pero al hover se ilumina levemente con el color de la skill) */}
                    <span className="text-xs font-medium text-text-secondary group-hover/skill:text-text-primary relative z-10 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM ROW: Soft Skills & CTA --- */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          {/* Soft Skills Card */}
          <div
            className="flex-1 p-6 rounded-2xl bg-text-primary/5 border border-text-primary/10 
                          hover:border-primary/30 transition-all duration-500 max-[880px]:p-5"
          >
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
              <BrainCircuit size={18} className="text-primary" />
              {t("skills.sub2")}
            </h3>

            {/* Grid 2x2 en mobile, 4x1 en desktop si da el ancho */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SOFT_SKILLS.map((skill) => (
                <div
                  key={skill.key}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-bg-base border border-text-primary/10 
                             hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5
                             transition-all duration-300 text-center gap-2 group/soft cursor-default h-full"
                >
                  <skill.icon
                    size={20}
                    className={`${skill.color} group-hover/soft:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-xs font-medium text-text-secondary group-hover/soft:text-text-primary transition-colors">
                    {t(`skills.soft.${skill.key}`) || skill.key}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box (Call to Action) */}
          <div
            className="lg:w-[340px] p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent 
                          border border-primary/20 flex flex-col gap-4 justify-between
                          hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1
                          transition-all duration-500 group/cta max-[880px]:p-5"
          >
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles size={20} className="text-primary mt-1 animate-pulse" />
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  "{t("skills.sub3")}"
                </p>
              </div>

              <a
                href="#projects"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl w-full
                           bg-primary font-bold text-sm
                           shadow-lg shadow-primary/20
                           hover:bg-primary/90 hover:shadow-primary/30 hover:scale-[1.02]
                           transition-all duration-300 no-underline group/link"
                style={{ color: "var(--color-on-primary)" }}
              >
                {/* Brillo animado al hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/link:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                <span className="relative z-20">{t("skills.projects")}</span>
                <Terminal
                  size={16}
                  className="relative z-20 group-hover/link:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo local para la animación del brillo */}
      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}
