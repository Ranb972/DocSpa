import { useLanguage } from '../context/LanguageContext';
import { Stethoscope, Wrench, Syringe, Sparkles, Microscope } from 'lucide-react';
import './Services.css';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: t.services.items.conservative.title,
      description: t.services.items.conservative.description,
      link: '#contact',
    },
    {
      icon: Wrench,
      title: t.services.items.restorative.title,
      description: t.services.items.restorative.description,
      link: '#contact',
    },
    {
      icon: Syringe,
      title: t.services.items.surgical.title,
      description: t.services.items.surgical.description,
      link: '#contact',
    },
    {
      icon: Sparkles,
      title: t.services.items.aesthetic.title,
      description: t.services.items.aesthetic.description,
      link: '#contact',
    },
    {
      icon: Microscope,
      title: t.services.items.lab.title,
      description: t.services.items.lab.description,
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="services section section-light">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <span className="section-badge">
            <span className="badge-icon">🦷</span>
            <span className="badge-text">{t.services.badge}</span>
          </span>
          <h2 className="headline-medium">
            {t.services.title}
          </h2>
          <p className="services-subtitle">
            {t.services.subtitle}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="service-card-inner">
                <div className="service-icon-wrapper">
                  <service.icon
                    className="service-icon"
                    size={36}
                    strokeWidth={1.5}
                    color="#B8860B"
                  />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-link">
                  {t.services.moreDetails}
                  <span className="arrow">{isRTL ? '‹' : '›'}</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up" data-aos-delay="500">
          <p className="cta-text">{t.services.ctaText}</p>
          <a href="#contact" className="btn btn-primary btn-glow">
            <span className="btn-text">{t.services.ctaButton}</span>
            <span className="btn-icon">📞</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
