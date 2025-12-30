import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);
  const { t, language } = useLanguage();

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
            <span className="badge-text">{t.hero.badge}</span>
          </div>

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="title-line">{t.hero.name1}</span>
            <span className="title-line title-accent">{t.hero.name2}</span>
          </h1>

          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="subtitle-text">{t.hero.title}</span>
            <span className="subtitle-sparkle">✨</span>
          </p>

          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t.hero.description}
            <br />
            {t.hero.descriptionLine2}
          </p>

          <div
            className="hero-actions"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="tel:+972505908582" className="btn btn-primary btn-large btn-glow">
              <span className="btn-text">{t.hero.callNow}</span>
              <span className="btn-icon">📞</span>
            </a>
            <a href="#about" className="btn btn-secondary btn-large">
              {t.hero.moreInfo}
            </a>
          </div>

          <div className="stats-container" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-card">
              <span className="stat-emoji">😊</span>
              <span className="stat-text">{t.hero.stats.stat1}</span>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">⭐</span>
              <span className="stat-text">{t.hero.stats.stat2}</span>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">💙</span>
              <span className="stat-text">{t.hero.stats.stat3}</span>
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
                  alt={`${t.hero.name1} ${t.hero.name2} - ${t.hero.title}`}
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
                  <span className="placeholder-text">{t.hero.name1} {t.hero.name2}</span>
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
        <span className="scroll-text">{t.hero.scrollDown}</span>
      </div>
    </section>
  );
};

export default Hero;
