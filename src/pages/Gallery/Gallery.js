import React from "react";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { CardGallery } from "../../components/CardGallery/CardGallery";

import ImgEstimatu from "../../assets/portfolio/img-estimatu.png";
import ImgNotaria from "../../assets/portfolio/img-notaria.png";
import ImgIolsi from "../../assets/portfolio/img-iolsi.png";
import ImgEconollantas from "../../assets/portfolio/img-econollantas.png";
import ImgImpromine from "../../assets/portfolio/img-impromine.png";
import ImgElectroMecanic from "../../assets/portfolio/img-electromecanic.png";
import ImgEmet from "../../assets/portfolio/img-emet-business-group.png";
import ImgEmetBG from "../../assets/portfolio/img-emetbg.png";
import ImgSpiffyProApp from "../../assets/portfolio/spiffyProApp.png";
import ImgSpiffyApp from "../../assets/portfolio/spiffyApp.png";
import imgDeliveryGo from "../../assets/portfolio/deliverygo.png";
import imgAilewux from "../../assets/portfolio/ailewux.png";
import imgSagal from "../../assets/portfolio/appVentas.png";
import imgEstimatuApp from "../../assets/portfolio/estimatuApp.png";


import "./Gallery.css";

export const Gallery = () => {
  const portfolio = [
    {
      title: "Estimatu",
      description:
        "CRM for management and organization of construction companies",
      img: ImgEstimatu,
      link: "https://www.estimatu.com/",
      skills: ["Angular", "SASS", "NodeJs", "TypeScript", "Stripe"],
    },
    {
      title: "Estimatu App Web",
      description: "Informative landing page to showcase mobile application",
      img: imgEstimatuApp,
      link: "https://www.estimatu.com/",
      skills: ["Angular", "SASS", "NodeJs", "TypeScript", "Stripe"],
    },
    {
      title: "DeliveryGo",
      description:
        "Delivery application, for delivery and products. front and back",
      img: imgDeliveryGo,
      link: "https://deliverygo.netlify.app",
      skills: ["Angular", "TypeScript", "NodeJs", "Expreess", "MongoDB"],
    },
    {
      title: "SAGAL",
      description: "Web application for company management",
      img: imgSagal,
      link: "https://appventas.netlify.app/login",
      skills: ["React", "JavaScript", "Tailwind"],
    },
    {
      title: "Notaria",
      description: "Informative website for Hermosillo notary",
      img: ImgNotaria,
      link: "https://notaria101hermosillo.com/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: "Econollantas",
      description: "...",
      img: ImgEconollantas,
      link: "https://econollantas.com/",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Emet Business Group",
      description: "Corporate website about the company",
      img: ImgEmet,
      link: "https://emetbusinessgroup.com/",
      skills: ["HTML", "CSS", "JavaScript", "Webpack", "jQuery", "Bootstrap"],
    },
    {
      title: "Ailewux",
      description:
        "Informative landing page to showcase information about the device",
      img: imgAilewux,
      link: "https://ailewux.com/es",
      skills: ["HTML", "CSS", "JavaScript", "Webpack", "Bootstrap"],
    },
    {
      title: "EmetBG",
      description: "Informative website about the EmetBg cryptocurrency",
      img: ImgEmetBG,
      link: "https://emetbg.com/",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
    {
      title: "Iolsi team",
      description: "...",
      img: ImgIolsi,
      link: "http://landing-oilsi.fidelitywebs.mx/",
      skills: ["HTML", "CSS", "JavaScript", "BEM"],
    },
    {
      title: "Impromine",
      description: "Landing page developed for a construction company",
      img: ImgImpromine,
      link: "http://www.inpromine.com/",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Electro mecanic",
      description: "...",
      img: ImgElectroMecanic,
      link: "https://www.electro-metalic.com/",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "App Spiffy Pro",
      description:
        "Mobile application for appointment management for barbers/stylists",
      img: ImgSpiffyProApp,
      link: [
        "https://apps.apple.com/us/app/spiffypro-beauty-managers/id1517904799#?platform=iphone",
        "https://play.google.com/store/apps/details?id=com.fidelityapps.spiffyPro",
      ],
      skills: ["Ionic", "Angular", "TypeScript"],
    },
    {
      title: "App Spiffy",
      description:
        "Mobile application for appointment management for barbers/stylists as a company",
      img: ImgSpiffyApp,
      link: [
        "https://apps.apple.com/us/app/spiffy-belleza-a-domicilio/id1517902386",
        "https://play.google.com/store/apps/details?id=com.fidelityapps.spiffyApp",
      ],
      skills: ["Ionic", "Angular", "TypeScript"],
    },
  ];
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
