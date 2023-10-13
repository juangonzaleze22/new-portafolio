import React from 'react'
import './Home.css'
import BannerImage from '../../assets/vector/banner-image.svg'

export const Home = () => {
  return (
    <div className='container home'>
      <div className='textContent'>
        <h2 className='textContent__title'>
          <span className='textContent__title--big'>Juan</span>
          <span className='textContent__title--normal'>Gonzalez</span>
        </h2>
        <p className='textContent__description'>Frontend Developer</p>
      </div>
      <img className='img-fluid home__image' src={BannerImage} alt=''/>
    </div>
  )
}
