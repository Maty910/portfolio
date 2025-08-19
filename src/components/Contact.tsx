import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Contact.css'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.sub')}</p>
      <ul>
        <li>
          <a href="mailto:matychacong@gmail.com">
            <EmailIcon style={{ marginRight: '8px' }} />
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/Maty910">
            <GitHubIcon style={{ marginRight: '8px' }} />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matias-chacon-t934/">
            <LinkedInIcon style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  )
}