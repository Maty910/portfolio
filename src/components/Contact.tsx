import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
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