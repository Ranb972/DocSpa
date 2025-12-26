import './About.css';

const About = () => {
  const highlights = [
    {
      number: '15+',
      label: 'שנות ניסיון',
      icon: '📅',
    },
    {
      number: '5,000+',
      label: 'מטופלים מרוצים',
      icon: '😊',
    },
    {
      number: '100%',
      label: 'מחויבות לאיכות',
      icon: '✨',
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
              ד״ר עמית מוריץ היא רופאת שיניים מנוסה עם למעלה מ-15 שנות ניסיון
              ברפואת שיניים מתקדמת. המרפאה הפרטית ברחובות מציעה טיפולים
              באיכות הגבוהה ביותר.
            </p>
            <p className="about-text">
              הגישה שלנו מבוססת על הקשבה לצרכים הייחודיים של כל מטופל,
              תוך שימוש בטכנולוגיות המתקדמות ביותר בתחום. אנו מאמינים
              שטיפול שיניים איכותי צריך להיות נגיש ונעים.
            </p>
            <p className="about-text">
              המרפאה מעוצבת ליצור אווירה רגועה ומרגיעה,
              כי אנחנו מבינים שחווית המטופל חשובה לא פחות מהטיפול עצמו.
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
              className="highlight-item"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <span className="highlight-icon">{item.icon}</span>
              <span className="highlight-number">{item.number}</span>
              <span className="highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
