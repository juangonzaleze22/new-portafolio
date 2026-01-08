import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { Contact } from './pages/Contact/Contact';
import { Gallery } from './pages/Gallery/Gallery';
import { Home } from './pages/Home/Home';
import { Skill } from './pages/Skill/Skill';

/* Context */

export const App = () => {
  return (
    <div>
      <Navbar />
      <ThemeToggle />
      <section className="section">
        <Home />
      </section>
      <section className="section">
        <Skill />
      </section>
      <section className="section">
        <Gallery />
      </section>
      <section className="section">
        <Contact />
      </section>
      {/*  <div className='moonlight'>
        <div className='layer moonlight__img' style={{ 'transform': transform }}></div>
      </div> */}
      <div className='sky-color'></div>
    </div>
  )
}
