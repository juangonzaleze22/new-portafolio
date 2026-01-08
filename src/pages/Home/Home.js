import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import banner from '../../assets/vector/banner-image.svg'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

import './Home.css'



export const Home = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !descriptionRef.current || !socialRef.current || !imageRef.current) {
      return;
    }

    // Deshabilitar animaciones CSS
    [titleRef.current, subtitleRef.current, descriptionRef.current, socialRef.current, imageRef.current].forEach(el => {
      if (el) {
        el.style.animation = 'none';
      }
    });

    // Establecer estados iniciales explícitamente
    gsap.set(titleRef.current, { y: 50, opacity: 0 });
    gsap.set(subtitleRef.current, { y: 30, opacity: 0 });
    gsap.set(descriptionRef.current, { y: 30, opacity: 0 });
    gsap.set(socialRef.current, { y: 20, opacity: 0 });
    gsap.set(imageRef.current, { x: 100, opacity: 0, scale: 0.8 });

    const tl = gsap.timeline({ 
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        // Asegurar que los valores finales se mantengan
        gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, socialRef.current], {
          opacity: 1,
          clearProps: 'transform'
        });
        gsap.set(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          clearProps: 'transform'
        });
      }
    });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8
    })
    .to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6
    }, '-=0.4')
    .to(descriptionRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6
    }, '-=0.4')
    .to(socialRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5
    }, '-=0.3')
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1
    }, '-=0.8');
  }, []);

  return (
    <div className='container home'>
      <div className='textContent'>
        <h2 className='textContent__title'>
          <span ref={titleRef} className='textContent__title textContent__title--big'>Juan Gonzalez</span>
          <p ref={subtitleRef} className='textContent__subtitle'>{t('home.subtitle')}</p>
          <p ref={descriptionRef} className='textContent__description'>
            {t('home.description')}
          </p>
          <div ref={socialRef}>
            <SocialButtons />
          </div>
        </h2>
      </div>
      <img ref={imageRef} className='img-fluid home__image' src={banner} alt='' />
    </div>
  )
}
