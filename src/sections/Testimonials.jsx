import { useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'שרה כ.',
      text: 'ד״ר מוריץ מקצועית ונעימה מאוד. הצוות אדיב ומסביר כל שלב בטיפול. ממליצה בחום!',
      initials: 'ש',
    },
    {
      name: 'דוד ל.',
      text: 'לאחר חיפושים רבים מצאתי סוף סוף מרפאה שאני סומך עליה. תוצאות מעולות.',
      initials: 'ד',
    },
    {
      name: 'מיכל א.',
      text: 'הגעתי עם פחד מרופאי שיניים ויצאתי עם חיוך. הצוות מבין ורגיש.',
      initials: 'מ',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section section-light" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header animate-on-scroll fade-in">
          <p className="eyebrow text-primary">המלצות</p>
          <h2 className="headline-medium">
            מה אומרים המטופלים
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card animate-on-scroll fade-in stagger-${index + 1}`}
            >
              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.initials}
                </div>
                <span className="author-name">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-rating animate-on-scroll fade-in stagger-4">
          <div className="rating-stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="rating-text">
            דירוג 5.0 מתוך 5 על בסיס ביקורות מטופלים
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
