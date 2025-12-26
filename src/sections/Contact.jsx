import './Contact.css';

const Contact = () => {
  const workingHours = [
    { day: 'ראשון - חמישי', hours: '08:00 - 20:00' },
    { day: 'שישי', hours: '08:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <section id="contact" className="contact section section-gray">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">📞</span>
            <span className="badge-text">צור קשר</span>
          </span>
          <h2 className="headline-medium">
            נשמח לשמוע מכם
          </h2>
          <p className="contact-subtitle">
            לקביעת תור או לכל שאלה, אנחנו כאן בשבילכם
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-content">
                <h4>כתובת</h4>
                <p>רחוב הרצל 50<br />רחובות, ישראל</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-content">
                <h4>טלפון</h4>
                <a href="tel:08-1234567">08-1234567</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-content">
                <h4>דוא״ל</h4>
                <a href="mailto:info@docspa.co.il">info@docspa.co.il</a>
              </div>
            </div>

            <a href="tel:08-1234567" className="btn btn-primary btn-glow contact-cta">
              <span className="btn-text">התקשרו עכשיו</span>
              <span className="btn-icon">📞</span>
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="hours-card" data-aos="fade-up" data-aos-delay="200">
            <div className="hours-header">
              <span className="hours-icon">🕐</span>
              <h3>שעות פעילות</h3>
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
              <span className="map-label">מפת המרפאה</span>
              <span className="map-address">רחוב הרצל 50, רחובות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
