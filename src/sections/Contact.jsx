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

            {/* WhatsApp Section */}
            <div className="whatsapp-section">
              <p className="whatsapp-text">{t.contact.whatsappAvailable}</p>
              <a
                href="https://wa.me/972505908582"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.79l4.925-1.293A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.487 0-4.807-.778-6.724-2.1l-.483-.29-2.921.766.78-2.853-.318-.505A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span>{t.contact.whatsappButton}</span>
              </a>
            </div>
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
