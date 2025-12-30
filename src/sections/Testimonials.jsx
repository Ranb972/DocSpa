import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.reviews.review1.name,
      text: t.testimonials.reviews.review1.text,
      initials: t.testimonials.reviews.review1.initials,
      rating: 5,
    },
    {
      name: t.testimonials.reviews.review2.name,
      text: t.testimonials.reviews.review2.text,
      initials: t.testimonials.reviews.review2.initials,
      rating: 5,
    },
    {
      name: t.testimonials.reviews.review3.name,
      text: t.testimonials.reviews.review3.text,
      initials: t.testimonials.reviews.review3.initials,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section section-light">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">{t.testimonials.badge}</span>
          </span>
          <h2 className="headline-medium">
            {t.testimonials.title}
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
            {t.testimonials.summaryText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
