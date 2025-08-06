import { Link } from 'react-scroll';

export function Navigation() {
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
            Projects
          </Link>
        </li>
        {/* Add other navigation items as needed */}
      </ul>
    </nav>
  );
}
