import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Doctor images from public folder
  const drMoritzImg1 = '/dr-moritz-2.jpg';
  const drMoritzImg2 = '/dr-moritz-3.jpg';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div
          className="hero-bg-circle hero-bg-circle-1"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="hero-bg-circle hero-bg-circle-2"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="hero-bg-gradient"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div
            className="hero-badge"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <span className="badge-icon">🦷</span>
            <span className="badge-text">מרפאה פרטית ברחובות</span>
          </div>

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="title-line">ד״ר עמית</span>
            <span className="title-line title-accent">מוריץ</span>
          </h1>

          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="subtitle-text">רופאת שיניים</span>
            <span className="subtitle-sparkle">✨</span>
          </p>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            חווית טיפול מתקדמת ומותאמת אישית,
            <br />
            באווירה נעימה ומקצועית.
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="btn btn-primary btn-large btn-glow" onClick={scrollToContact}>
              <span className="btn-text">קביעת תור</span>
              <span className="btn-icon">📅</span>
            </button>
            <a href="#about" className="btn btn-secondary btn-large">
              למידע נוסף
            </a>
          </div>

          <div
            className="hero-stats"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">שנות ניסיון</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">מטופלים מרוצים</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">שביעות רצון</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        >
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>

            {/* Stacked photo cards */}
            <div className="hero-stacked-photos">
              <div className="stacked-photo stacked-photo-back">
                <img
                  src={drMoritzImg1}
                  alt="ד״ר עמית מוריץ"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div className="stacked-photo stacked-photo-front">
                <img
                  src={drMoritzImg2}
                  alt="ד״ר עמית מוריץ"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>

            {/* Floating dental icons */}
            <div className="floating-icon floating-icon-1">🦷</div>
            <div className="floating-icon floating-icon-2">✨</div>
            <div className="floating-icon floating-icon-3">💎</div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">גלול למטה</span>
      </div>
    </section>
  );
};

export default Hero;
