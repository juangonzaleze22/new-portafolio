import React from "react";
import "./CardGallery.css";

export const CardGallery = ({ src, title, description, link, skills }) => {
  return (
    <div className="CardGallery">
      <div className="CardGallery__content">
        <img className="CardGallery__img" src={src} alt="" />
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
                  Android
                </a>
                <a
                  href={link[1]}
                  target="_blank"
                  className="CardGallery__link"
                  rel="noreferrer"
                >
                  Ios
                </a>
              </div>
            </>
          ) : (
            <a
              href={link}
              target="_blank"
              className="CardGallery__link"
              rel="noreferrer"
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
