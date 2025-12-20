import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow animate-on-scroll fade-in">
            מרפאה פרטית ברחובות
          </p>
          <h1 className="hero-title animate-on-scroll fade-in stagger-1">
            ד״ר עמית מוריץ
          </h1>
          <p className="hero-subtitle animate-on-scroll fade-in stagger-2">
            רופאת שיניים
          </p>
          <p className="hero-description animate-on-scroll fade-in stagger-3">
            חווית טיפול מתקדמת ומותאמת אישית,
            <br />
            באווירה נעימה ומקצועית.
          </p>
          <div className="hero-actions animate-on-scroll fade-in stagger-4">
            <button className="btn btn-primary btn-large" onClick={scrollToContact}>
              קביעת תור
            </button>
            <a href="#about" className="link-arrow">
              למידע נוסף
            </a>
          </div>
        </div>

        <div className="hero-visual animate-on-scroll scale-in stagger-2">
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <div className="placeholder-inner">
                <span className="placeholder-icon">👩‍⚕️</span>
                <span className="placeholder-text">תמונת הרופאה</span>
              </div>
            </div>
            <div className="hero-image-bg"></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator animate-on-scroll fade-in stagger-5">
        <span className="scroll-text">גלול למטה</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
