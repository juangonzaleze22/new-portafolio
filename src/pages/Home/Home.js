import React from 'react'
import banner from '../../assets/vector/banner-image.svg'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

import './Home.css'



export const Home = () => {
  return (
    <div className='container home'>
      <div className='textContent'>
        <h2 className='textContent__title'>
          <span className='textContent__title textContent__title--big'>Juan Gonzalez</span>
          <p className='textContent__description'>
            I am a passionate frontend developer with over five years of experience in crafting interactive and efficient user interfaces.
          </p>
          <p className='textContent__subtitle'>Frontend Developer</p>
          <SocialButtons />
        </h2>
      </div>
      <img className='img-fluid home__image' src={banner} alt='' />
    </div>
  )
}
