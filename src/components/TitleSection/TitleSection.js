import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TitleSection.css'

gsap.registerPlugin(ScrollTrigger);

export const TitleSection = ({title}) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    // Establecer estado inicial
    gsap.set(titleElement, {
      y: 30,
      opacity: 0
    });

    const animation = gsap.to(titleElement, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleElement,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      if (animation) {
        animation.kill();
      }
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === titleElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <h3 ref={titleRef} className='TitleSection'>{title}</h3>
  )
}
