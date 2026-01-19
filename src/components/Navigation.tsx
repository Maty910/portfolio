import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { t } = useLanguage();
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t('nav.projects')}
          </Link>
        </li>
        {/* Add other navigation items as needed */}
      </ul>
    </nav>
  );
}
