import Lottie from 'lottie-react';
import './Clinic.css';
import cleaningTeethAnimation from '../assets/Cleaning_Teeth.json';

const Clinic = () => {

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
    <section id="clinic" className="clinic section section-gray">
      <div className="container">
        <div className="clinic-content">
          {/* Floating Lottie Animation - positioned between gallery and heading */}
          <div className="clinic-lottie-wrapper" data-aos="zoom-in" data-aos-delay="300">
            <Lottie
              animationData={cleaningTeethAnimation}
              loop={true}
              autoplay={true}
              className="clinic-lottie"
            />
          </div>

          <div className="clinic-text">
            <div data-aos="fade-up">
              <span className="section-badge">
                <span className="badge-icon">🏥</span>
                <span className="badge-text">המרפאה</span>
              </span>
              <h2 className="headline-medium">
                סביבה מתקדמת ומרגיעה
              </h2>
              <p className="clinic-description">
                המרפאה ברחובות מצוידת בטכנולוגיות המתקדמות ביותר בתחום
                רפואת השיניים. אנו משלבים ציוד חדשני עם אווירה נעימה
                ומרגיעה, כדי להפוך את חווית הטיפול לנוחה ככל האפשר.
              </p>
            </div>

            <div className="clinic-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="clinic-feature"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
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

          <div className="clinic-visual" data-aos="zoom-in" data-aos-delay="200">
            <div className="clinic-gallery">
              <div className="gallery-item gallery-main">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🏥</span>
                  <span className="gallery-label">המרפאה מבפנים</span>
                </div>
              </div>
              <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="300">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🪥</span>
                  <span className="gallery-label">חדר טיפולים</span>
                </div>
              </div>
              <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="400">
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
