import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import { Home } from './pages/Home/Home';
import { Skill } from './pages/Skill/Skill';
import { Navbar } from './components/Navbar/Navbar';
import { Gallery } from './pages/Gallery/Gallery';
import { Contact } from './pages/Contact/Contact';

/* Context */

export const App = () => {
  const [transform, setTransform] = useState()

  const parallax = (e) => {
    const x = window.innerWidth - e.pageX
    const y = window.innerHeight - e.pageY
    setTransform(`translate(${x / 20}px, ${y / 20}px)`)
  }
  return (
    <div onMouseMove={parallax}>
      <Navbar />
      <ReactFullpage
        //fullpage options
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        scrollingSpeed={850}
        controlArrows={false}
        navigation={true}
        navigationPosition={'right'}
        navigationTooltips={['Home', 'Skills', 'Portfolio', 'Contact']}
        keyboardScrolling={true}
        render={({ state, fullpageApi }) => {

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <Skill />
              </div>
              <div className="section">
                <Gallery />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <div className='moonlight'>
        <div className='layer moonlight__img' style={{ 'transform': transform }}></div>
      </div>
      <div className='sky-color'></div>
    </div>
  )
}
