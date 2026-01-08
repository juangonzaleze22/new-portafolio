import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { MOCK_PORTFOLIO } from "../../consts/portfolio";

import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const gridRef = useRef(null);
  const filtersRef = useRef(null);
  const hasAnimatedRef = useRef(false);

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

  const paginatedPortfolio = () => {
    const filtered = filteredPortfolio();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredPortfolio().length / itemsPerPage);

  const handleFilterChange = (event) => {
    const button = event.target;
    // Animación del botón al hacer clic
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setSelectedFilter(event.target.value);
        setCurrentPage(1); // Reset a la primera página cuando cambia el filtro
      }
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba del grid
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Animación inicial de los filtros
    const filtersElement = filtersRef.current;
    if (!filtersElement) return;

    const filters = filtersElement.children;
    if (!filters || filters.length === 0) return;

    // Establecer estados iniciales
    gsap.set(filters, {
      y: -20,
      opacity: 0
    });

    const animation = gsap.to(filters, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: filtersElement,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      if (animation) animation.kill();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === filtersElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animación inicial de las cards cuando se hace scroll a la sección (solo primera vez)
  useEffect(() => {
    if (hasAnimatedRef.current) return;

    const gridElement = gridRef.current;
    if (!gridElement) return;

    const cards = gridElement.children;
    if (!cards || cards.length === 0) return;

    // Establecer estados iniciales
    gsap.set(cards, {
      y: 50,
      opacity: 0,
      scale: 0.8
    });

    const animation = gsap.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: gridElement,
        start: 'top 75%',
        toggleActions: 'play none none none',
        onEnter: () => {
          hasAnimatedRef.current = true;
        }
      }
    });

    return () => {
      if (animation) animation.kill();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === gridElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animación de las cards cuando cambia el filtro o la página (después de la carga inicial)
  useEffect(() => {
    if (!hasAnimatedRef.current) return; // No ejecutar si aún no se ha hecho scroll inicial

    const gridElement = gridRef.current;
    if (!gridElement) return;

    // Pequeño delay para asegurar que el DOM se haya actualizado
    const timer = setTimeout(() => {
      const cards = gridElement.children;
      if (!cards || cards.length === 0) return;

      // Establecer estados iniciales
      gsap.set(cards, {
        y: 30,
        opacity: 0,
        scale: 0.9
      });

      // Animar hacia estados finales
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: 'back.out(1.2)'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedFilter, currentPage]);

  return (
    <div className="container space-section-top GallerySection ">
      <TitleSection title={t('gallery.title')} />
      <div ref={filtersRef} className="GallerySection__filters">
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
      <div ref={gridRef} className="GallerySection__grid">
         {paginatedPortfolio().map((item, index) => {
          return (
            <CardGallery
              key={`${item.title}-${index}`}
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
      {totalPages > 1 && (
        <div className="GallerySection__pagination">
          <button
            className="GallerySection__pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <div className="GallerySection__pagination-info">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Mostrar solo algunas páginas alrededor de la actual
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    className={`GallerySection__pagination-number ${
                      currentPage === page ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="GallerySection__pagination-dots">...</span>;
              }
              return null;
            })}
          </div>
          <button
            className="GallerySection__pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};
