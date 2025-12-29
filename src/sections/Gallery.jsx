import { useState, useEffect, useRef, useCallback } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const intervalRef = useRef(null);

  const slides = [
    {
      image: '/gallery-1.jpg',
      caption: 'ד"ר קובי וד"ר עמית מרוצים אחרי יום עמוס 😊',
      emoji: '😊',
    },
    {
      image: '/gallery-2.jpg',
      caption: 'זכרונות מהמרפאה הישנה והאהובה 💙',
      emoji: '💙',
    },
    {
      image: '/gallery-3.jpg',
      caption: 'עם הדיקן לשעבר של אונ\' לרפואת שיניים בתל אביב 🤓',
      emoji: '🤓',
    },
    {
      image: '/gallery-4.jpg',
      caption: 'בכנס הר״ש 2025 👨‍⚕️👩‍⚕️',
      emoji: '👨‍⚕️',
    },
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advancement every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Touch/swipe support (RTL - swipe left = next, swipe right = prev)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // RTL: swipe left = next, swipe right = prev
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">📸</span>
            <span className="badge-text">גלריה</span>
          </span>
          <h2 className="headline-medium">הגלריה שלנו</h2>
          <p className="gallery-subtitle">רגעים מיוחדים מהמרפאה</p>
        </div>

        <div
          className="gallery-carousel"
          data-aos="fade-up"
          data-aos-delay="100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            className="gallery-arrow gallery-arrow-prev"
            onClick={prevSlide}
            aria-label="התמונה הקודמת"
          >
            ›
          </button>
          <button
            className="gallery-arrow gallery-arrow-next"
            onClick={nextSlide}
            aria-label="התמונה הבאה"
          >
            ‹
          </button>

          {/* Slides Container */}
          <div className="gallery-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="gallery-image-wrapper">
                  {imageErrors[index] ? (
                    <div className="gallery-placeholder">
                      <span className="gallery-placeholder-emoji">{slide.emoji}</span>
                      <span className="gallery-placeholder-text">תמונה בקרוב</span>
                    </div>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="gallery-image"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
                <p className="gallery-caption">{slide.caption}</p>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="gallery-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
