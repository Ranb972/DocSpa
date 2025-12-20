import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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

  const highlights = [
    {
      number: '15+',
      label: 'שנות ניסיון',
    },
    {
      number: '5,000+',
      label: 'מטופלים מרוצים',
    },
    {
      number: '100%',
      label: 'מחויבות לאיכות',
    },
  ];

  return (
    <section id="about" className="about section section-gray" ref={sectionRef}>
      <div className="container">
        <div className="about-header animate-on-scroll fade-in">
          <p className="eyebrow text-primary">אודות</p>
          <h2 className="headline-medium">
            גישה אישית לכל מטופל
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content animate-on-scroll fade-in stagger-1">
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
            <a href="#services" className="link-arrow">
              לטיפולים שלנו
            </a>
          </div>

          <div className="about-visual animate-on-scroll scale-in stagger-2">
            <div className="about-image-card">
              <div className="image-placeholder-modern">
                <span className="placeholder-emoji">👩‍⚕️</span>
                <span className="placeholder-label">ד״ר עמית מוריץ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights animate-on-scroll fade-in stagger-3">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
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
