import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import "./CardGallery.css";

export const CardGallery = ({ src, title, description, link, skills, index = 0 }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const animationDelay = index * 0.05;
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Cargar cuando está a 50px del viewport
        threshold: 0.01
      }
    );

    observer.observe(cardElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.03,
      y: -8,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      ref={cardRef}
      className="CardGallery"
      style={{ '--animation-delay': `${animationDelay}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CardGallery__content">
        <div className="CardGallery__img-wrapper">
          {!imageLoaded && <div className="CardGallery__img-placeholder"></div>}
          {isInView ? (
            <img 
              ref={imgRef}
              className={`CardGallery__img ${imageLoaded ? 'loaded' : ''}`}
              src={src}
              alt={title}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={() => setImageLoaded(true)} // En caso de error, ocultar placeholder
            />
          ) : (
            <div className="CardGallery__img-placeholder"></div>
          )}
        </div>
        <div className="CardGallery__body">
          <h3 className="CardGallery__title">{title}</h3>
          <div className="CardGallery__description">
            {description}
            <ul className="CardGallery__contentSkills">
              {skills &&
                skills.map((skill, index) => (
                  <li key={"key" + index} className="CardGallery__skill">
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="CardGallery__footer">
          {link && Array.isArray(link) ? (
            <>
              <div className="CardGallery__appButtons">
                <a
                  href={link[0]}
                  target="_blank"
                  className="CardGallery__link"
                  rel="noreferrer"
                >
                  {t('gallery.buttonAndroid')}
                </a>
                <a
                  href={link[1]}
                  target="_blank"
                  className="CardGallery__link"
                  rel="noreferrer"
                >
                  {t('gallery.buttonIos')}
                </a>
              </div>
            </>
          ) : (
            <a
              href={link}
              target="_blank"
              className="CardGallery__link"
              rel="noreferrer"
              disabled={link}
            >
              {t('gallery.buttonVisit')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
