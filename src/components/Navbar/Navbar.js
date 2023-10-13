import React from 'react'
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className='navbar'>
      <h3 className='navbar__NavbarBrand'>Juan Gonzalez</h3>

      <div className='navbar__social'>
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
      </div>
    </header>
  )
}
