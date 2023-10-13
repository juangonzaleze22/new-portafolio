import React from 'react'

import "./Card.css"

export const Card = ({
    title,
    src
}) => {
  return (
    <div className='Card'>
        <div className='Card__content'>
            <img className='img-fluid Card__img' src={src} alt="" />
            <h2 className='Card__title'>{title}</h2>
        </div>
    </div>
  )
}
