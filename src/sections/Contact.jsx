import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📞',
      title: 'טלפון',
      details: ['03-1234567', '050-1234567'],
      link: 'tel:03-1234567',
    },
    {
      icon: '📧',
      title: 'דוא"ל',
      details: ['info@docspa.co.il'],
      link: 'mailto:info@docspa.co.il',
    },
    {
      icon: '📍',
      title: 'כתובת',
      details: ['רחוב הרופאים 15', 'תל אביב, ישראל'],
      link: null,
    },
  ];

  const workingHours = [
    { day: 'ראשון - חמישי', hours: '08:00 - 20:00' },
    { day: 'שישי', hours: '08:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>צור קשר</h2>
          <p>נשמח לענות על כל שאלה ולקבוע עבורכם תור</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card card">
                <span className="contact-icon">{info.icon}</span>
                <h3 className="contact-title">{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, i) => (
                    <span key={i}>
                      {info.link ? (
                        <a href={info.link}>{detail}</a>
                      ) : (
                        detail
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hours-section">
            <div className="hours-card card">
              <span className="hours-icon">🕐</span>
              <h3>שעות פעילות</h3>
              <div className="hours-list">
                {workingHours.map((item, index) => (
                  <div key={index} className="hours-row">
                    <span className="hours-day">{item.day}</span>
                    <span className="hours-time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <span className="map-text">מפה - Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
