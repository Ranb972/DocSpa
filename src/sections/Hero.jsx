import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Doctor image from public folder
  const drMoritzImg = '/dr-moritz.jpg';

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
            טיפול שיניים ברמה הגבוהה ביותר,
            <br />
            עם תשומת לב אישית לכל מטופל.
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="tel:+972505908582" className="btn btn-primary btn-large btn-glow">
              <span className="btn-text">התקשרו עכשיו</span>
              <span className="btn-icon">📞</span>
            </a>
            <a href="#about" className="btn btn-secondary btn-large">
              למידע נוסף
            </a>
          </div>

          <div className="stats-container" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-card">
              <span className="stat-emoji">😊</span>
              <span className="stat-text">עשרות לקוחות מרוצים</span>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">⭐</span>
              <span className="stat-text">מקצועיות ברמה גבוהה</span>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">💙</span>
              <span className="stat-text">גישה אנושית - רואים את הבן אדם לפני השיניים</span>
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
            {!imageError ? (
              <div className="hero-image-frame">
                <img
                  src={drMoritzImg}
                  alt="ד״ר עמית מוריץ - רופאת שיניים"
                  className="hero-doctor-image"
                  loading="eager"
                  decoding="async"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="hero-image-placeholder">
                <div className="placeholder-inner">
                  <span className="placeholder-icon">👩‍⚕️</span>
                  <span className="placeholder-text">ד״ר עמית מוריץ</span>
                </div>
              </div>
            )}
            <div className="hero-image-ring hero-image-ring-1"></div>
            <div className="hero-image-ring hero-image-ring-2"></div>

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
