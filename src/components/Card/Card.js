import React from 'react'

import "./Card.css"

export const Card = ({
    title,
    src,
    index = 0
}) => {
  const animationDelay = index * 0.05;
  
  return (
    <div 
      className='Card'
      style={{ '--animation-delay': `${animationDelay}s` }}
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
