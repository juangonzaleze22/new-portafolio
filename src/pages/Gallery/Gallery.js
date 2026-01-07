import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { MOCK_PORTFOLIO } from "../../consts/portfolio";

import "./Gallery.css";

export const Gallery = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState("All"); 

  const skills = ["All", "Angular", "Vue", "React", "Ionic"];

  const getFilterLabel = (skill) => {
    if (skill === "All") return t('gallery.filterAll');
    if (skill === "Angular") return t('gallery.filterAngular');
    if (skill === "Vue") return t('gallery.filterVue');
    if (skill === "React") return t('gallery.filterReact');
    if (skill === "Ionic") return t('gallery.filterIonic');
    return skill;
  };

  const filteredPortfolio = () => {
    if (selectedFilter === "All") {
      return MOCK_PORTFOLIO;
    } else {
      return MOCK_PORTFOLIO.filter((item) => item.skills.includes(selectedFilter));
    }
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="container space-section-top GallerySection ">
      <TitleSection title={t('gallery.title')} />
      <div className="GallerySection__filters">
        {
          skills && skills.map((skill, index) => { 
            return (
              <button
                key={index}
                value={skill}
                className={`GallerySection__filter-button ${
                  selectedFilter === skill ? "active" : ""
                }`}
                onClick={handleFilterChange}
              >
                {getFilterLabel(skill)}
              </button>
            )
          })
        }
      </div>
      <div className="GallerySection__grid">
         {filteredPortfolio().map((item, index) => {
          return (
            <CardGallery
              key={index}
              src={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
              skills={item.skills}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
