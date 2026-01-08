import React, { useRef } from 'react'
import { gsap } from 'gsap'
import "./Card.css"

export const Card = ({
    title,
    src,
    index = 0
}) => {
  const animationDelay = index * 0.05;
  const cardRef = useRef(null);
  
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      y: -5,
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
  
  return (
    <div 
      ref={cardRef}
      className='Card'
      style={{ '--animation-delay': `${animationDelay}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='Card__content'>
        {
          src && (
            <img className='img-fluid Card__img' src={src} alt="" />
          )
        }
        <h2 className='Card__title'>{title}</h2>
      </div>
    </div>
  )
}
