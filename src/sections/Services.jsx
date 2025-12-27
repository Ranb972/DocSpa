import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🦷',
      title: 'טיפולי שיניים משמרים',
      description: 'סתימות, טיפולי שורש ושמירה על בריאות השיניים לטווח ארוך',
      link: '#contact',
    },
    {
      icon: '🔧',
      title: 'טיפולים משקמים',
      description: 'שיקום מלא של השיניים והפה להחזרת התפקוד והאסתטיקה',
      link: '#contact',
    },
    {
      icon: '⚕️',
      title: 'טיפולים כירורגיים',
      description: 'עקירות, ניתוחים קטנים וטיפולים כירורגיים מתקדמים',
      link: '#contact',
    },
    {
      icon: '✨',
      title: 'טיפולים אסתטיים',
      description: 'הלבנת שיניים, ציפויים ועיצוב חיוך מושלם',
      link: '#contact',
    },
    {
      icon: '🔬',
      title: 'עבודות מעבדה',
      description: 'תותבות ועבודות על שתלים בהתאמה אישית',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="services section section-light">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">🦷</span>
            <span className="badge-text">טיפולים</span>
          </span>
          <h2 className="headline-medium">
            מגוון טיפולים מתקדמים
          </h2>
          <p className="services-subtitle">
            מרפאת ד״ר עמית מוריץ מציעה מגוון טיפולי שיניים מקצועיים
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="service-card-inner">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-link">
                  פרטים נוספים
                  <span className="arrow">‹</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up" data-aos-delay="500">
          <p className="cta-text">מעוניינים לשמוע עוד על הטיפולים שלנו?</p>
          <a href="#contact" className="btn btn-primary btn-glow">
            <span className="btn-text">צרו קשר</span>
            <span className="btn-icon">📞</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
