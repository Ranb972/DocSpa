import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '📸', label: 'Instagram', url: '#' },
    { icon: '💬', label: 'WhatsApp', url: '#' },
  ];

  const quickLinks = [
    { label: 'ראשי', id: 'hero' },
    { label: 'אודות', id: 'about' },
    { label: 'שירותים', id: 'services' },
    { label: 'המלצות', id: 'testimonials' },
    { label: 'צור קשר', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🦷</span>
              <span className="logo-text">DocSpa</span>
            </div>
            <p className="footer-description">
              מרפאת שיניים מתקדמת המציעה טיפולים מקצועיים באווירה נעימה.
              בריאות הפה שלכם היא העדיפות שלנו.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>קישורים מהירים</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(link.id)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>יצירת קשר</h4>
            <ul>
              <li>
                <span>📞</span>
                <a href="tel:03-1234567">03-1234567</a>
              </li>
              <li>
                <span>📧</span>
                <a href="mailto:info@docspa.co.il">info@docspa.co.il</a>
              </li>
              <li>
                <span>📍</span>
                <span>רחוב הרופאים 15, תל אביב</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} DocSpa. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
