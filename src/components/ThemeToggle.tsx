import { FiSun, FiMoon } from 'react-icons/fi'
// import '../styles/buttons.css'

type Props = {theme: string; setTheme: (t:string) => void; }

export const ThemeToggle: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <button
      className='theme-toggle'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
      title='Toggle theme'
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}