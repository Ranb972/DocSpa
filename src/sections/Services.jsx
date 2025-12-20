import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🪥',
      title: 'ניקוי שיניים מקצועי',
      description: 'ניקוי יסודי והסרת אבנית לשמירה על בריאות החניכיים והשיניים',
    },
    {
      icon: '✨',
      title: 'הלבנת שיניים',
      description: 'טיפולי הלבנה מתקדמים להשגת חיוך לבן וזוהר בטכנולוגיה המתקדמת ביותר',
    },
    {
      icon: '🦷',
      title: 'השתלות שיניים',
      description: 'השתלות מתקדמות לשיקום שיניים חסרות עם תוצאות טבעיות ועמידות',
    },
    {
      icon: '👑',
      title: 'כתרים וגשרים',
      description: 'שחזורים אסתטיים ופונקציונליים מחומרים איכותיים המותאמים לצבע השן',
    },
    {
      icon: '📐',
      title: 'יישור שיניים',
      description: 'טיפולי יישור מתקדמים כולל קשתיות שקופות ליישור דיסקרטי ונוח',
    },
    {
      icon: '🔬',
      title: 'טיפולי שורש',
      description: 'טיפולי שורש מקצועיים להצלת שיניים פגועות ומניעת עקירה',
    },
    {
      icon: '👶',
      title: 'רפואת שיניים לילדים',
      description: 'טיפולים מותאמים לילדים באווירה ידידותית ונעימה',
    },
    {
      icon: '💎',
      title: 'אסתטיקה דנטלית',
      description: 'ציפויי חרסינה, סגירת רווחים ועיצוב חיוך מושלם',
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>השירותים שלנו</h2>
          <p>אנו מציעים מגוון רחב של טיפולי שיניים מתקדמים לכל המשפחה</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
