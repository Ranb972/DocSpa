import './About.css';

const About = () => {
  const stats = [
    { number: '15+', label: 'שנות ניסיון' },
    { number: '5000+', label: 'מטופלים מרוצים' },
    { number: '10+', label: 'סוגי טיפולים' },
    { number: '100%', label: 'מחויבות לאיכות' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <div className="about-image-placeholder">
              <span className="placeholder-icon">🏥</span>
              <span className="placeholder-text">תמונת המרפאה</span>
            </div>
          </div>
          <div className="about-content">
            <div className="section-title about-title">
              <h2>אודות המרפאה</h2>
            </div>
            <p className="about-text">
              ברוכים הבאים למרפאת DocSpa, מרכז שיניים מתקדם המציע מגוון רחב
              של טיפולי שיניים באיכות הגבוהה ביותר. אנו מאמינים שכל מטופל
              ראוי לקבל טיפול מותאם אישית באווירה נעימה ומקצועית.
            </p>
            <p className="about-text">
              הצוות שלנו מורכב מרופאי שיניים מומחים עם ניסיון עשיר, המתעדכנים
              באופן שוטף בטכנולוגיות ובשיטות הטיפול המתקדמות ביותר. אנו משתמשים
              בציוד חדשני ומתקדם על מנת להבטיח תוצאות מיטביות.
            </p>
            <p className="about-text">
              המרפאה שלנו מעוצבת ליצור אווירה רגועה ונעימה, כי אנחנו מבינים
              שביקור אצל רופא השיניים יכול להיות מלחיץ. המטרה שלנו היא לגרום
              לכם להרגיש בנוח ובטוחים.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
