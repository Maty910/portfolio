import { 
  SiReact, SiNodedotjs, SiCss3, SiExpress, SiJavascript, SiTypescript, 
  SiHtml5, SiPostgresql, SiSqlite, SiMongodb, SiPostman, SiPython, 
  SiGit, SiTailwindcss, SiJson, SiNetlify, SiGithub, SiFigma,
  SiNextdotjs, SiDocker, SiCanva,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { 
  BrainCircuit, Globe, Code2, Cpu, Database, Layout, Wrench, Terminal, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- DATA CONFIGURATION ---
const SKILL_CATEGORIES = [
  {
    title: 'Frontend & UI',
    icon: Layout,
    // Usamos clases de Tailwind para los colores de acento, que se ven bien en ambos temas
    accentClass: 'text-purple-500',
    borderClass: 'group-hover:border-purple-500/50',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#888888' }, // Gris neutro para Next
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'Canva', icon: SiCanva, color: '#00c4cc' },
    ]
  },
  {
    title: 'Backend & Data',
    icon: Database,
    accentClass: 'text-emerald-500',
    borderClass: 'group-hover:border-emerald-500/50',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#8cc84b' },
      { name: 'Express', icon: SiExpress, color: '#888888' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'SQLite', icon: SiSqlite, color: '#0f80cc' },
      { name: 'JSON', icon: SiJson, color: '#f7df1e' },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    accentClass: 'text-blue-500',
    borderClass: 'group-hover:border-blue-500/50',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#888888' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
    ]
  }
];

const SOFT_SKILLS = [
  { name: 'Problem Solving', icon: BrainCircuit, color: 'text-purple-500' },
  { name: 'Team Work', icon: Globe, color: 'text-blue-500' },
  { name: 'Fast Learning', icon: Sparkles, color: 'text-amber-500' },
  { name: 'Adaptability', icon: Code2, color: 'text-emerald-500' },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section 
      id="skills"
      className="snap-start min-h-screen w-full flex flex-col justify-start relative
                transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                 /* Padding consistente con las otras secciones */
                min-[881px]:pl-[280px]
                max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal */}
      <div className="w-full max-w-[1000px] px-6 md:px-12 py-12 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-8">
        
        {/* Header de Sección */}
        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              {t('skills.title')}
            </h2>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed max-[880px]:text-sm">
            {t('skills.sub')}
          </p>
        </div>

        {/* --- GRID DE CATEGORÍAS (Tech Stack) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`group flex flex-col p-5 rounded-2xl
                          /* Fondo Glass Adaptable */
                          bg-text-primary/5 border border-text-primary/10
                          /* Hover Effects */
                          hover:bg-text-primary/10 ${category.borderClass} hover:shadow-lg
                          transition-all duration-500 ease-out
                          max-[880px]:p-4`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Header de categoría */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-text-primary/10">
                <div className={`p-2 rounded-lg bg-bg-base border border-text-primary/10 shadow-sm ${category.accentClass}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-text-primary text-lg tracking-wide">{category.title}</h3>
              </div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group/skill relative flex items-center gap-2 px-3 py-1.5 rounded-lg 
                              border border-text-primary/10 cursor-default transition-all duration-300
                              bg-bg-base hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
                    // Inyectamos el color para el hover dinámico
                    style={{ '--skill-color': skill.color } as React.CSSProperties}
                  >
                    {/* Background con color al hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 bg-[var(--skill-color)]" />
                    
                    {/* Borde con color al hover */}
                    <div className="absolute inset-0 border border-transparent group-hover/skill:border-[var(--skill-color)]/30 rounded-lg transition-colors duration-300" />

                    {/* Icono */}
                    <skill.icon 
                      className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/skill:scale-110" 
                      style={{ color: skill.color }} // Color base del icono siempre visible
                    />
                    
                    {/* Texto */}
                    <span className="text-xs font-medium text-text-secondary group-hover/skill:text-text-primary relative z-10 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- SOFT SKILLS & CTA --- */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          
          {/* Soft Skills */}
          <div className="flex-1 p-5 rounded-2xl bg-text-primary/5 border border-text-primary/10 
                          hover:border-primary/30 transition-all duration-500 max-[880px]:p-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <BrainCircuit size={18} className="text-primary" />
              {t('skills.sub2')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SOFT_SKILLS.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-bg-base border border-text-primary/10 
                            hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center gap-2 group/soft"
                >
                  <skill.icon size={20} className={`${skill.color} group-hover/soft:scale-110 transition-transform`} />
                  <span className="text-xs font-medium text-text-secondary group-hover/soft:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="lg:w-[320px] p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent 
                          border border-primary/20 flex flex-col gap-4 justify-between
                          hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 max-[880px]:p-5">
            
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-primary mt-1 animate-pulse" />
              <p className="text-sm text-text-secondary leading-relaxed italic">
                "{t('skills.sub3')}"
              </p>
            </div>
            
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl 
                        bg-primary text-white font-bold text-sm
                        hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]
                        transition-all duration-300 no-underline group/link"
            >
              {t('skills.projects')}
              <Terminal size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}