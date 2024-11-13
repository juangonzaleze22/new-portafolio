import React from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './pages/Contact/Contact';
import { Gallery } from './pages/Gallery/Gallery';
import { Home } from './pages/Home/Home';
import { Skill } from './pages/Skill/Skill';

/* Context */

export const App = () => {
  /* const [transform, setTransform] = useState() */

 /*  const parallax = (e) => {
    const x = window.innerWidth - e.pageX
    const y = window.innerHeight - e.pageY
    setTransform(`translate(${x / 20}px, ${y / 20}px)`)
  } */
  return (
    <div>
      <Navbar />
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
