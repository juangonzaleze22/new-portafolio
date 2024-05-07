import React from "react";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { portfolio } from "../../const/portfolio";

import "./Gallery.css";

export const Gallery = () => {

  return (
    <div className="container space-section-top GallerySection ">
      <TitleSection title="Portfolio" />
      <div className="GallerySection__grid">
        {portfolio.map((item, index) => {
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
