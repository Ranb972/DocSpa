import { useEffect, useRef } from 'react';
import './Clinic.css';

const Clinic = () => {
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

  const features = [
    {
      icon: '🔬',
      title: 'ציוד מתקדם',
      description: 'טכנולוגיה חדשנית לאבחון וטיפול מדויק',
    },
    {
      icon: '🛋️',
      title: 'אווירה נעימה',
      description: 'עיצוב מודרני ומרגיע לחוויה נוחה',
    },
    {
      icon: '🧼',
      title: 'סטריליות מלאה',
      description: 'עמידה בסטנדרטים הגבוהים ביותר',
    },
  ];

  return (
    <section id="clinic" className="clinic section section-gray" ref={sectionRef}>
      <div className="container">
        <div className="clinic-content">
          <div className="clinic-text animate-on-scroll fade-in">
            <p className="eyebrow text-primary">המרפאה</p>
            <h2 className="headline-medium">
              סביבה מתקדמת ומרגיעה
            </h2>
            <p className="clinic-description">
              המרפאה ברחובות מצוידת בטכנולוגיות המתקדמות ביותר בתחום
              רפואת השיניים. אנו משלבים ציוד חדשני עם אווירה נעימה
              ומרגיעה, כדי להפוך את חווית הטיפול לנוחה ככל האפשר.
            </p>

            <div className="clinic-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`clinic-feature animate-on-scroll fade-in stagger-${index + 1}`}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="clinic-visual animate-on-scroll scale-in stagger-2">
            <div className="clinic-gallery">
              <div className="gallery-item gallery-main">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🏥</span>
                  <span className="gallery-label">המרפאה מבפנים</span>
                </div>
              </div>
              <div className="gallery-item gallery-small">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🪥</span>
                  <span className="gallery-label">חדר טיפולים</span>
                </div>
              </div>
              <div className="gallery-item gallery-small">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🛋️</span>
                  <span className="gallery-label">אזור המתנה</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
