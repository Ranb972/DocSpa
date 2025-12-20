import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            חיוך בריא מתחיל כאן
          </h1>
          <p className="hero-subtitle">
            מרפאת שיניים מתקדמת המציעה טיפולים מקצועיים
            באווירה נעימה ומרגיעה. אנו מחויבים לבריאות הפה שלכם
            ולחיוך מושלם.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              קביעת תור
            </button>
            <a href="tel:03-1234567" className="btn btn-secondary">
              03-1234567
            </a>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>ציוד מתקדם</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>צוות מקצועי</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span>אווירה נעימה</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span className="placeholder-icon">👨‍⚕️</span>
            <span className="placeholder-text">תמונת רופא שיניים</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
