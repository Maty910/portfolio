import { 
  SiReact, SiNodedotjs, SiCss3, SiExpress, SiJavascript, SiTypescript, 
  SiHtml5, SiPostgresql, SiSqlite, SiMongodb, SiPostman, SiPython, 
  SiGit, SiTailwindcss, SiJson, SiNetlify, SiGithub, SiFigma, SiCanva,
  SiNextdotjs, SiDocker,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { 
  BrainCircuit, CheckCircle2, 
  Globe, Code2, Cpu, Database, Layout, Wrench, Terminal, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- DATA CONFIGURATION ---
const SKILL_CATEGORIES = [
  {
    title: 'Frontend & UI',
    icon: Layout,
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
    ]
  },
  {
    title: 'Backend & Data',
    icon: Database,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#8cc84b' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'SQLite', icon: SiSqlite, color: '#0f80cc' },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
    ]
  }
];

const SOFT_SKILLS = [
  { name: 'Problem Solving', icon: BrainCircuit, color: 'from-purple-500 to-pink-500' },
  { name: 'Team Work', icon: Globe, color: 'from-blue-500 to-cyan-500' },
  { name: 'Fast Learning', icon: Sparkles, color: 'from-amber-500 to-orange-500' },
  { name: 'Adaptability', icon: Code2, color: 'from-emerald-500 to-teal-500' },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section 
      id="skills"
      className="skills-section snap-start min-h-screen w-full flex flex-col justify-start relative
                 max-[880px]:min-h-[calc(100vh-80px)]"
    >
      {/* Contenedor Principal */}
      <div className="w-full max-w-[1200px] px-6 md:px-12 py-16 mx-auto flex flex-col justify-center h-full
                      max-[880px]:px-4 max-[880px]:py-10">
        
        {/* Header de Sección con animación de entrada */}
        <div className="flex flex-col gap-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 max-[880px]:mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#6353f2] to-[#8b5cf6] shadow-lg shadow-[#6353f2]/20 text-white">
              <Cpu size={28} className="max-[880px]:w-5 max-[880px]:h-5" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-[880px]:text-3xl">
              {t('skills.title')}
            </h2>
          </div>
          <p className="text-[#a7a9be] text-lg max-w-2xl leading-relaxed max-[880px]:text-base ml-14 max-[880px]:ml-0">
            {t('skills.sub')}
          </p>
        </div>

        {/* --- GRID DE CATEGORÍAS (Tech Stack) con stagger animation --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-[880px]:gap-4 max-[880px]:mb-8">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group flex flex-col p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl
                         hover:from-white/[0.08] hover:to-white/[0.04] hover:border-white/20 hover:shadow-xl hover:shadow-black/20
                         transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                         animate-in fade-in slide-in-from-bottom-8 
                         max-[880px]:p-5"
              style={{ 
                animationDelay: `${150 + categoryIndex * 100}ms`,
                animationDuration: '700ms'
              }}
            >
              {/* Header de categoría */}
              <div className={`flex items-center gap-3 mb-5 pb-4 border-b border-white/5`}>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} ${category.borderColor} border backdrop-blur-sm
                                transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg tracking-wide">{category.title}</h3>
              </div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-badge group/skill relative flex items-center gap-2 px-3 py-2 rounded-lg 
                               border border-white/10 backdrop-blur-sm
                               bg-[#0f0e17]/80
                               hover:scale-105 hover:border-white/30 hover:-translate-y-0.5
                               transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                               cursor-default overflow-hidden"
                    style={{
                      animationDelay: `${300 + categoryIndex * 100 + skillIndex * 50}ms`
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 blur-xl transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)` 
                      }}
                    />
                    
                    {/* Background con color de la tecnología en hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-[800ms]"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` 
                      }}
                    />
                    
                    {/* Icono con colores originales */}
                    <skill.icon 
                      className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-6" 
                      style={{ color: skill.color }}
                    />
                    
                    {/* Texto */}
                    <span className="text-sm font-medium text-[#a7a9be] group-hover/skill:text-white relative z-10 transition-colors duration-500">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- SOFT SKILLS & CTA --- */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-700"
             style={{ animationDelay: '500ms' }}>
          
          {/* Soft Skills con gradientes */}
          <div className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 
                          hover:from-white/[0.08] hover:border-white/20 transition-all duration-[800ms] max-[880px]:p-5">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <BrainCircuit size={18} className="text-[#6353f2]" />
              {t('skills.sub2')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {SOFT_SKILLS.map((skill) => (
                <div 
                  key={skill.name}
                  className="group/soft relative px-4 py-3 rounded-xl bg-[#0f0e17]/50 border border-white/10 
                             hover:border-white/30 hover:scale-105 hover:-translate-y-0.5
                             transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-default overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover/soft:opacity-100 bg-gradient-to-br ${skill.color} 
                                  transition-opacity duration-500`}
                       style={{ opacity: 0.1 }} 
                  />
                  
                  <div className="relative z-10 flex items-center gap-2">
                    <skill.icon size={16} className="text-[#6353f2] group-hover/soft:text-white transition-colors duration-500" />
                    <span className="text-sm font-medium text-[#a7a9be] group-hover/soft:text-white transition-colors duration-500">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box mejorado */}
          <div className="lg:w-[340px] p-6 rounded-2xl bg-gradient-to-br from-[#6353f2]/20 via-[#8b5cf6]/10 to-transparent 
                          border border-[#6353f2]/30 flex flex-col gap-4 justify-between
                          hover:from-[#6353f2]/25 hover:border-[#6353f2]/50 hover:shadow-xl hover:shadow-[#6353f2]/10
                          transition-all duration-[800ms] relative overflow-hidden group/cta max-[880px]:p-5">
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6353f2]/0 via-[#8b5cf6]/10 to-[#6353f2]/0 
                           opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-2 mb-3">
                <Sparkles size={18} className="text-[#a8a1ff] mt-0.5 animate-pulse" />
                <p className="text-sm text-[#a7a9be] leading-relaxed italic">
                  "{t('skills.sub3')}"
                </p>
              </div>
              
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                          bg-[#6353f2] text-white font-bold text-sm
                          hover:bg-[#7c6aff] hover:shadow-lg hover:shadow-[#6353f2]/30 hover:scale-105
                          transition-all duration-500 no-underline group/link"
              >
                {t('skills.projects')}
                <Terminal size={16} className="group-hover/link:translate-x-1 transition-transform duration-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}