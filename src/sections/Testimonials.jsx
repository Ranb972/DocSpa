import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'שרה כ.',
      text: 'ד״ר מוריץ מקצועית ונעימה מאוד. הצוות אדיב ומסביר כל שלב בטיפול. ממליצה בחום!',
      initials: 'ש',
      rating: 5,
    },
    {
      name: 'דוד ל.',
      text: 'לאחר חיפושים רבים מצאתי סוף סוף מרפאה שאני סומך עליה. תוצאות מעולות.',
      initials: 'ד',
      rating: 5,
    },
    {
      name: 'מיכל א.',
      text: 'הגעתי עם פחד מרופאי שיניים ויצאתי עם חיוך. הצוות מבין ורגיש.',
      initials: 'מ',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section section-light">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">המלצות</span>
          </span>
          <h2 className="headline-medium">
            מה אומרים המטופלים
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
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

        <div className="testimonials-summary" data-aos="fade-up" data-aos-delay="400">
          <div className="summary-rating">
            <span className="summary-stars">⭐⭐⭐⭐⭐</span>
            <span className="summary-score">5.0</span>
          </div>
          <p className="summary-text">
            דירוג מושלם על בסיס ביקורות מטופלים מרוצים
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
