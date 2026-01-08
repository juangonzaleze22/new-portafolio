import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import "./Navbar.css";

export const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  const navbarRef = useRef(null);
  const brandRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition > 0); 
    };

    window.addEventListener('scroll', handleScroll);

    // Animación de entrada
    if (brandRef.current) {
      gsap.from(brandRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }

    if (socialRef.current && socialRef.current.children) {
      gsap.from(socialRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      });
    }

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <header ref={navbarRef} className={`navbar container ${scroll ? 'blur' : ''}`}>
      <h3 ref={brandRef} className='navbar__NavbarBrand'>Juan Gonzalez</h3>

      <div className='navbar__right'>
      
        <div ref={socialRef} className='navbar__social'>
          <a href='https://www.linkedin.com/in/juan-gonzalez-a77b93158/' target='_blank' rel="noreferrer">
            <i className='bx bxl-linkedin' ></i>
          </a>
          <a href='https://github.com/juangonzaleze22' target='_blank' rel="noreferrer">
            <i className='bx bxl-github' ></i>
          </a>
          <a href='https://www.instagram.com/juangonzaleze/' target='_blank' rel="noreferrer">
            <i className='bx bxl-instagram' ></i>
          </a>
          <a href='https://www.facebook.com/profile.php?id=765667497' target='_blank' rel="noreferrer">
            <i className='bx bxl-facebook' ></i>
          </a>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}
