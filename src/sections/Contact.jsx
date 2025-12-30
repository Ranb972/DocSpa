import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  const workingHours = [
    { day: t.contact.days.sunday, hours: '12:30 - 18:30' },
    { day: t.contact.days.tuesday, hours: '08:00 - 16:00' },
    { day: t.contact.days.wednesday, hours: '12:00 - 19:00' },
  ];

  return (
    <section id="contact" className="contact section section-gray">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">📞</span>
            <span className="badge-text">{t.contact.badge}</span>
          </span>
          <h2 className="headline-medium">
            {t.contact.title}
          </h2>
          <p className="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-content">
                <h4>{t.contact.address}</h4>
                <p>{t.contact.addressValue}<br />{t.contact.city}</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-content">
                <h4>{t.contact.phone}</h4>
                <a href="tel:+972505908582">050-590-8582</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">👩‍⚕️</span>
              <div className="contact-content">
                <h4>{t.contact.doctorName}</h4>
                <p>{t.contact.doctorTitle}</p>
              </div>
            </div>

            <a href="tel:+972505908582" className="btn btn-primary btn-glow contact-cta">
              <span className="btn-text">{t.contact.callNow}</span>
              <span className="btn-icon">📞</span>
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="hours-card" data-aos="fade-up" data-aos-delay="200">
            <div className="hours-header">
              <span className="hours-icon">🕐</span>
              <h3>{t.contact.workingHours}</h3>
            </div>
            <div className="hours-list">
              {workingHours.map((item, index) => (
                <div key={index} className="hours-row">
                  <span className="hours-day">{item.day}</span>
                  <span className="hours-time">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="map-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="map-placeholder">
              <div className="map-pin-container">
                <span className="map-pin">📍</span>
                <div className="map-pulse"></div>
              </div>
              <span className="map-label">{t.contact.mapLabel}</span>
              <span className="map-address">{t.footer.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
