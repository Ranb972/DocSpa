import './Contact.css';

const Contact = () => {
  const workingHours = [
    { day: 'יום ראשון', hours: '12:30 - 18:30' },
    { day: 'יום שלישי', hours: '08:00 - 16:00' },
    { day: 'יום רביעי', hours: '12:00 - 19:00' },
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
                <p>הבנים 21, קומת קרקע מצד שמאל<br />רחובות</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-content">
                <h4>טלפון</h4>
                <a href="tel:+972505908582">050-590-8582</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">👩‍⚕️</span>
              <div className="contact-content">
                <h4>ד״ר עמית מוריץ</h4>
                <p>רופאת שיניים</p>
              </div>
            </div>

            <a href="tel:+972505908582" className="btn btn-primary btn-glow contact-cta">
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
              <span className="map-address">הבנים 21, רחובות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
