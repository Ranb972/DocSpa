import { useLanguage } from '../context/LanguageContext';
import './Clinic.css';

const Clinic = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '🎓',
      title: t.clinic.features.knowledge.title,
      description: t.clinic.features.knowledge.description,
    },
    {
      icon: '🛋️',
      title: t.clinic.features.atmosphere.title,
      description: t.clinic.features.atmosphere.description,
    },
    {
      icon: '🧼',
      title: t.clinic.features.sterility.title,
      description: t.clinic.features.sterility.description,
    },
  ];

  return (
    <section id="clinic" className="clinic section section-gray">
      <div className="container">
        <div className="clinic-content">
          <div className="clinic-text">
            <div data-aos="fade-up">
              <span className="section-badge">
                <span className="badge-icon">🏥</span>
                <span className="badge-text">{t.clinic.badge}</span>
              </span>
              <h2 className="headline-medium">
                {t.clinic.title}
              </h2>
              <p className="clinic-description">
                {t.clinic.description}
              </p>
            </div>

            <div className="clinic-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="clinic-feature"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="clinic-visual" data-aos="zoom-in" data-aos-delay="200">
            <div className="clinic-gallery">
              <div className="gallery-item gallery-main">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🏥</span>
                  <span className="gallery-label">{t.clinic.gallery.inside}</span>
                </div>
              </div>
              <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="300">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🪥</span>
                  <span className="gallery-label">{t.clinic.gallery.treatment}</span>
                </div>
              </div>
              <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="400">
                <div className="gallery-placeholder">
                  <span className="gallery-icon">🛋️</span>
                  <span className="gallery-label">{t.clinic.gallery.waiting}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
