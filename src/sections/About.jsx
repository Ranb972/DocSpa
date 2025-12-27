import './About.css';

const About = () => {
  const highlights = [
    {
      text: 'שביעות רצון',
      subtext: '100%',
      icon: '💯',
    },
    {
      text: 'מצוינות',
      subtext: 'ברמה הגבוהה ביותר',
      icon: '⭐',
    },
    {
      text: 'איכפתיות',
      subtext: 'תשומת לב מהלב',
      icon: '💙',
    },
  ];

  return (
    <section id="about" className="about section section-gray">
      <div className="container">
        <div className="about-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">👩‍⚕️</span>
            <span className="badge-text">אודות</span>
          </span>
          <h2 className="headline-medium">
            גישה אישית לכל מטופל
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content" data-aos="fade-up" data-aos-delay="100">
            <p className="about-lead">
              ד"ר עמית מוריץ רופאת שיניים בכירה וסגנית מנהל מרפאת השיניים ברחובות,
              המתמחה במתן טיפולי שיניים באיכות הגבוהה ביותר
              עם דגש על יחס אישי וחם לכל מטופל.
            </p>
            <p className="about-text">
              במרפאה שלנו כל מטופל מקבל תשומת לב מלאה והקשבה אמיתית
              לצרכים הייחודיים שלו. אנו מאמינים שטיפול שיניים איכותי
              מתחיל ביחס אנושי ובאווירה נעימה.
            </p>
            <p className="about-text">
              המרפאה מצוידת בציוד מתקדם ומציעה מגוון רחב של טיפולים -
              משמירה על בריאות הפה ועד לטיפולים אסתטיים ושיקומיים.
            </p>
            <a href="#services" className="btn btn-secondary">
              לטיפולים שלנו
            </a>
          </div>

          <div className="about-visual" data-aos="zoom-in" data-aos-delay="200">
            <div className="about-stacked-photos">
              <div className="stacked-card stacked-card-back">
                <img
                  src="/dr-moritz-2.jpg"
                  alt="ד״ר עמית מוריץ"
                  onError={(e) => e.target.parentElement.style.display = 'none'}
                />
              </div>
              <div className="stacked-card stacked-card-front">
                <img
                  src="/dr-moritz-3.jpg"
                  alt="ד״ר עמית מוריץ"
                  onError={(e) => e.target.parentElement.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-item highlight-badge-item"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <span className="highlight-icon">{item.icon}</span>
              <span className="highlight-text">{item.text}</span>
              <span className="highlight-subtext">{item.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
