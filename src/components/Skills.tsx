import { 
  SiReact, SiNodedotjs, SiCss3, SiExpress, SiJavascript, SiTypescript, 
  SiHtml5, SiPostgresql, SiSqlite, SiMongodb, SiPostman, SiPython, 
  SiGit, SiTailwindcss, SiJson, SiNetlify, SiGithub, SiFigma, SiCanva 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { 
  BrainCircuit, GitBranch, CheckCircle2, PenTool, 
  Terminal, Globe, Code2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// 1. Definimos la data fuera del componente para no recrearla en cada render
const TECH_SKILLS = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Express.js', icon: SiExpress },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'SQL', icon: SiPostgresql },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Postman', icon: SiPostman },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: SiGit },
  { name: 'React Native', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JSON', icon: SiJson },
  { name: 'Netlify', icon: SiNetlify },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Visual Studio Code', icon: VscVscode },
  { name: 'Figma', icon: SiFigma },
  { name: 'Canva', icon: SiCanva },
];

const SOFT_SKILLS = [
  { name: 'Problem Solving', icon: BrainCircuit },
  { name: 'Version Control', icon: GitBranch },
  { name: 'Agile Methodologies', icon: CheckCircle2 },
  { name: 'UI/UX Design', icon: PenTool },
  { name: 'Testing and Debugging', icon: Terminal },
  { name: 'Communication', icon: Globe },
  { name: 'Time Management', icon: CheckCircle2 },
  { name: 'Adaptability', icon: BrainCircuit },
  { name: 'Continuous Learning', icon: Code2 },
];

// Componente reutilizable para los items
const SkillTag = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <li className="flex items-center gap-2 bg-[rgba(99,83,242,0.2)] text-[var(--primary-color)] px-3 py-2 rounded font-medium text-sm border border-[rgba(99,83,242,0.3)] transition-transform duration-300 hover:scale-105">
    <Icon className="w-5 h-5 align-middle" /> 
    <span>{name}</span>
  </li>
);

export function Skills() {
  const { t } = useLanguage();

  return (
    <section 
      className="absolute right-[calc(var(--pad)*2)] bottom-[calc(var(--pad)*2)] w-[min(900px,60%)] h-[72vh] overflow-y-auto overflow-x-hidden py-4 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_1%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_84%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_5%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_100%)] max-[880px]:relative max-[880px]:bottom-auto max-[880px]:right-auto max-[880px]:w-full max-[880px]:h-auto max-[880px]:overflow-visible max-[880px]:[mask-image:none] max-[880px]:[-webkit-mask-image:none] max-[880px]:mb-[calc(var(--sidebar-mobile-height)+12px)] max-[880px]:py-4" 
      id="skills"
    >
      <h2 className="text-[2em] text-[var(--primary-color)] mb-4">
        {t('skills.title')}
      </h2>
      
      <p className="text-[var(--text-secondary)] text-base leading-[1.5] my-[10px]">
        {t('skills.sub')}
      </p>
      
      {/* Technical Skills */}
      <ul className="flex flex-wrap gap-2 list-none p-0 ml-[3px] mb-0">
        {TECH_SKILLS.map((skill) => (
          <SkillTag key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </ul>

      {/* Soft Skills */}
      <p className="text-[var(--text-secondary)] text-base leading-[1.5] my-[10px]">
        {t('skills.sub2')}
      </p>
      
      <ul className="flex flex-wrap gap-2 list-none p-0 ml-[3px] mb-0">
        {SOFT_SKILLS.map((skill) => (
          <SkillTag key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-4">
        <p className="text-[var(--text-secondary)] text-base leading-[1.5] my-[10px]">
            {t('skills.sub3')}
        </p>
        <a 
            href="#projects" 
            className="inline-block text-white no-underline px-4 py-2 bg-[var(--primary-color)] rounded-md text-sm font-medium transition-colors duration-300 hover:bg-[rgba(99,83,242,0.8)]"
        >
            {t('skills.projects')}
        </a>
      </div>
    </section>
  );
}