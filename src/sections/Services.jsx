import { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '✨',
      title: 'הלבנת שיניים',
      description: 'טיפולי הלבנה מתקדמים להשגת חיוך לבן וזוהר',
      link: '#contact',
    },
    {
      icon: '🦷',
      title: 'השתלות',
      description: 'השתלות מתקדמות לשיקום שיניים עם תוצאות טבעיות',
      link: '#contact',
    },
    {
      icon: '💎',
      title: 'אסתטיקה דנטלית',
      description: 'ציפויים ועיצוב חיוך מושלם בהתאמה אישית',
      link: '#contact',
    },
    {
      icon: '🪥',
      title: 'טיפולים מונעים',
      description: 'ניקוי מקצועי ושמירה על בריאות הפה',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="services section section-light" ref={sectionRef}>
      <div className="container">
        <div className="services-header animate-on-scroll fade-in">
          <p className="eyebrow text-primary">טיפולים</p>
          <h2 className="headline-medium">
            מגוון טיפולים מתקדמים
          </h2>
          <p className="services-subtitle">
            המרפאה מציעה מגוון רחב של טיפולי שיניים באיכות הגבוהה ביותר
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className={`service-card animate-on-scroll fade-in stagger-${index + 1}`}
            >
              <div className="service-card-inner">
                <span className="service-icon">{service.icon}</span>
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

        <div className="services-cta animate-on-scroll fade-in stagger-5">
          <p className="cta-text">מעוניינים לשמוע עוד על הטיפולים שלנו?</p>
          <a href="#contact" className="btn btn-primary">
            צרו קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
