import React from 'react'
import SocialButtons from '../../components/SocialButtons/SocialButtons'
import './Home.css'


export const Home = () => {
  return (
    <div className='container home'>
      <div className='textContent'>
        <h2 className='textContent__title'>
          <span className='textContent__title textContent__title--big'>Juan Gonzalez</span>
          <p className='textContent__description'>
            Soy un desarrollador frontend apasionado con más de 5 años de experiencia en la creación de interfaces de usuario interactivas y eficientes. Mi experiencia abarca trabajar con una variedad de tecnologías.
          </p>
          <p className='textContent__subtitle'>Frontend Developer</p>
          <SocialButtons />
        </h2>
      </div>
      {/*   <img className='img-fluid home__image' src={imgProfile} alt='' /> */}
    </div>
  )
}
