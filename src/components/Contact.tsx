import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage();

  return (
    <section 
      className="absolute right-[calc(var(--pad)*2)] bottom-[calc(var(--pad)*2)] w-[min(900px,60%)] h-[72vh] overflow-y-auto overflow-x-hidden py-4 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_1%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_84%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_5%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_100%)] max-[880px]:relative max-[880px]:bottom-auto max-[880px]:right-auto max-[880px]:w-full max-[880px]:h-auto max-[880px]:overflow-visible max-[880px]:[mask-image:none] max-[880px]:[-webkit-mask-image:none] max-[880px]:mb-[calc(var(--sidebar-mobile-height)+12px)] max-[880px]:py-4" 
      id="contact"
    >
      <h2 className="text-[2em] text-[var(--primary-color)] mb-4">{t('contact.title')}</h2>
      <p className="text-[var(--text-secondary)] text-base leading-[1.5] mb-6">{t('contact.sub')}</p>
      <ul className="list-none p-0 m-0">
        <li className="my-[10px]">
          <a 
            href="mailto:matychacong@gmail.com"
            className="text-[var(--primary-color)] no-underline font-medium transition-all duration-300 hover:text-[var(--text-secondary)] hover:translate-x-1.5 inline-flex items-center"
          >
            <EmailIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Email
          </a>
        </li>
        <li className="my-[10px]">
          <a 
            href="https://github.com/Maty910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color)] no-underline font-medium transition-all duration-300 hover:text-[var(--text-secondary)] hover:translate-x-1.5 inline-flex items-center"
          >
            <GitHubIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            GitHub
          </a>
        </li>
        <li className="my-[10px]">
          <a 
            href="https://www.linkedin.com/in/matias-chacon-t934/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color)] no-underline font-medium transition-all duration-300 hover:text-[var(--text-secondary)] hover:translate-x-1.5 inline-flex items-center"
          >
            <LinkedInIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  )
}