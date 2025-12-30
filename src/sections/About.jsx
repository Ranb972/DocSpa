import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      title: t.about.highlights.highlight1.title,
      subtitle: t.about.highlights.highlight1.subtitle,
      icon: '😊',
    },
    {
      title: t.about.highlights.highlight2.title,
      subtitle: t.about.highlights.highlight2.subtitle,
      icon: '⭐',
    },
    {
      title: t.about.highlights.highlight3.title,
      subtitle: t.about.highlights.highlight3.subtitle,
      icon: '💙',
    },
  ];

  return (
    <section id="about" className="about section section-gray">
      <div className="container">
        <div className="about-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">👩‍⚕️</span>
            <span className="badge-text">{t.about.badge}</span>
          </span>
          <h2 className="headline-medium">
            {t.about.title}
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content" data-aos="fade-up" data-aos-delay="100">
            <p className="about-lead">
              {t.about.lead}
            </p>
            <p className="about-text">
              {t.about.text1}
            </p>
            <p className="about-text">
              {t.about.text2}
            </p>
            <a href="#services" className="btn btn-secondary">
              {t.about.servicesBtn}
            </a>
          </div>

          <div className="about-visual" data-aos="zoom-in" data-aos-delay="200">
            <div className="about-stacked-photos">
              <div className="stacked-card stacked-card-back">
                <img
                  src="/dr-moritz-2.jpg"
                  alt={`${t.hero.name1} ${t.hero.name2}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => e.target.parentElement.style.display = 'none'}
                />
              </div>
              <div className="stacked-card stacked-card-front">
                <img
                  src="/dr-moritz-3.jpg"
                  alt={`${t.hero.name1} ${t.hero.name2}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => e.target.parentElement.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-item highlight-badge-item"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <span className="highlight-icon">{item.icon}</span>
              <span className="highlight-text">{item.title}</span>
              <span className="highlight-subtext">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
