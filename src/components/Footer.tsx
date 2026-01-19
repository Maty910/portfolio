import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer 
      id="footer"
      className={`
        /* Desktop: Fijo abajo a la derecha, sutil */
        fixed bottom-4 right-6 z-10
        
        /* Mobile: Flujo normal, centrado y con espacio para la nav bar */
        max-[880px]:static max-[880px]:w-full max-[880px]:text-center
        max-[880px]:pb-[calc(var(--sidebar-mobile-height)+10px)] max-[880px]:pt-4
      `}
    >
      <p className="text-xs text-[var(--text-muted)] font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Matías Chacón. {t('footer.copyRight')}
      </p>
    </footer>
  )
}