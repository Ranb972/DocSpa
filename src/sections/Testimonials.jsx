import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'שרה כהן',
      role: 'מטופלת קבועה',
      text: 'מרפאה מקצועית ונעימה מאוד. הצוות אדיב ומסביר כל שלב בטיפול. ממליצה בחום!',
      rating: 5,
    },
    {
      name: 'דוד לוי',
      role: 'מטופל מזה 3 שנים',
      text: 'לאחר חיפושים רבים מצאתי סוף סוף מרפאה שאני סומך עליה. טיפול מקצועי ותוצאות מעולות.',
      rating: 5,
    },
    {
      name: 'מיכל אברהם',
      role: 'מטופלת חדשה',
      text: 'הגעתי עם פחד מרופאי שיניים ויצאתי עם חיוך. הצוות מבין ורגיש, ממליצה לכל מי שחושש.',
      rating: 5,
    },
    {
      name: 'יוסי ישראלי',
      role: 'מטופל קבוע',
      text: 'עשיתי השתלת שיניים והתוצאה מדהימה. הרופא מקצועי ביותר והמרפאה מצוידת בטכנולוגיה מתקדמת.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>מה המטופלים אומרים</h2>
          <p>אלפי מטופלים מרוצים בחרו במרפאת DocSpa</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
