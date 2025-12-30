import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'clinic', label: t.nav.clinic },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand" onClick={() => scrollToSection('hero')}>
            <span className="brand-name">{t.footer.brandName}</span>
          </div>

          <nav className="footer-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="footer-link"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {t.footer.brandName}. {t.footer.copyright}
          </p>
          <p className="footer-location">
            {t.footer.location} | 050-590-8582
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
