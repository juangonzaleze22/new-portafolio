import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./CardGallery.css";

export const CardGallery = ({ src, title, description, link, skills, index = 0 }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const animationDelay = index * 0.05;

  return (
    <div 
      className="CardGallery"
      style={{ '--animation-delay': `${animationDelay}s` }}
    >
      <div className="CardGallery__content">
        <div className="CardGallery__img-wrapper">
          {!imageLoaded && <div className="CardGallery__img-placeholder"></div>}
          <img 
            className={`CardGallery__img ${imageLoaded ? 'loaded' : ''}`}
            src={src} 
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
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
