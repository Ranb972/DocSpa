import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'ראשי' },
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'טיפולים' },
    { id: 'clinic', label: 'המרפאה' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand" onClick={() => scrollToSection('hero')}>
            <span className="brand-name">ד״ר עמית מוריץ</span>
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
            © {currentYear} ד״ר עמית מוריץ. כל הזכויות שמורות.
          </p>
          <p className="footer-location">
            הבנים 21, רחובות | 050-590-8582
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
