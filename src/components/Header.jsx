import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'clinic', label: t.nav.clinic },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">DocSpa</span>
          </div>

          <nav className="header-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={language === 'he' ? 'Switch to English' : 'Switch to Hebrew'}
            >
              {language === 'he' ? 'EN' : 'עב'}
            </button>

            <button
              className="header-cta"
              onClick={() => scrollToSection('contact')}
            >
              {t.nav.bookAppointment}
            </button>
          </div>

          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t.nav.menu}
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="lang-toggle-mobile"
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
          >
            {language === 'he' ? 'English' : 'עברית'}
          </button>
          <button
            className="mobile-cta"
            onClick={() => scrollToSection('contact')}
          >
            {t.nav.bookAppointment}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
