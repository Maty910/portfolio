import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage();

  return (
    <section 
      id="contact"
      className="snap-start min-h-screen w-full flex items-center justify-center relative
                transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                pl-[var(--sidebar-collapsed)] max-[880px]:pl-0
                max-[880px]:min-h-[calc(100vh-var(--sidebar-mobile-height))]"
    >
      <div className="w-full max-w-[900px] px-8 md:px-16 py-12 max-[880px]:px-4 max-[880px]:py-8">
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
      </div>
    </section>
  )
}