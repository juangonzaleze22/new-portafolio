import React, { useState } from "react";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { MOCK_PORTFOLIO } from "../../consts/portfolio";

import "./Gallery.css";

export const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All"); 

  const skills = ["All", "Angular", "Vue", "React", "Ionic"]

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
      <TitleSection title="Portfolio" />
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
                {skill}
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
            />
          );
        })}
      </div>
    </div>
  );
};
