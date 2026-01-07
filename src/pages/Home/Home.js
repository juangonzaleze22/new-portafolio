import React from 'react'
import { useTranslation } from 'react-i18next'
import banner from '../../assets/vector/banner-image.svg'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

import './Home.css'



export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='container home'>
      <div className='textContent'>
        <h2 className='textContent__title'>
          <span className='textContent__title textContent__title--big'>Juan Gonzalez</span>
          <p className='textContent__subtitle'>{t('home.subtitle')}</p>
          <p className='textContent__description'>
            {t('home.description')}
          </p>
          <SocialButtons />
        </h2>
      </div>
      <img className='img-fluid home__image' src={banner} alt='' />
    </div>
  )
}
