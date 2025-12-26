import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './Services.css';

const Services = () => {
  const [animationData, setAnimationData] = useState(null);

  // Dynamically load the Lottie animation
  useEffect(() => {
    import('../assets/Cleaning_Teeth.json')
      .then((data) => setAnimationData(data.default || data))
      .catch(() => setAnimationData(null));
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
    <section id="services" className="services section section-light">
      {/* Decorative Lottie Animation - floating on the side */}
      {animationData && (
        <div
          className="services-lottie-decoration"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="lottie-animation"
          />
        </div>
      )}

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
            המרפאה מציעה מגוון רחב של טיפולי שיניים באיכות הגבוהה ביותר
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
