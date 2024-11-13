import React from 'react'
import { Card } from '../../components/Card/Card'
import { TitleSection } from '../../components/TitleSection/TitleSection'

/* image skills */
import ImgAngular from '../../assets/skills/bxl-angular.svg'
import ImgBootstrap from '../../assets/skills/bxl-bootstrap.svg'
import ImgCss from '../../assets/skills/bxl-css3.svg'
import ImgGithub from '../../assets/skills/bxl-github.svg'
import ImgHtml from '../../assets/skills/bxl-html5.svg'
import ImgIonic from '../../assets/skills/bxl-ionic.svg'
import ImgJs from '../../assets/skills/bxl-javascript.svg'
import ImgMongo from '../../assets/skills/bxl-mongodb.svg'
import ImgMysql from '../../assets/skills/bxl-mysql.svg'
import ImgNode from '../../assets/skills/bxl-nodejs.svg'
import ImgPhp from '../../assets/skills/bxl-php.svg'
import ImgReact from '../../assets/skills/bxl-react.svg'
import ImgSass from '../../assets/skills/bxl-sass.svg'
import ImgTypescript from '../../assets/skills/bxl-typescript.svg'
import ImgVue from '../../assets/skills/bxl-vuejs.svg'


import './Skill.css'

export const Skill = () => {
  const skills = [
    {
      title: 'HTML',
      src: ImgHtml
    },
    {
      title: 'CSS',
      src: ImgCss
    },
    {
      title: 'Javascript',
      src: ImgJs
    },
    {
      title: 'Typescript',
      src: ImgTypescript
    },
    {
      title: 'Angular',
      src: ImgAngular
    },
    {
      title: 'React',
      src: ImgReact
    },
    {
      title: 'Vue',
      src: ImgVue
    },
    {
      title: 'Ionic',
      src: ImgIonic
    },
    {
      title: 'SASS',
      src: ImgSass
    },
    {
      title: 'Bootstrap',
      src: ImgBootstrap
    },
    {
      title: 'Node.js',
      src: ImgNode
    },
    {
      title: 'PHP',
      src: ImgPhp
    },
    {
      title: 'MongoDB',
      src: ImgMongo
    },
    {
      title: 'MySQL',
      src: ImgMysql
    },
    {
      title: 'Git',
      src: ImgGithub
    },
  ]

  return (
    <div className='container SkillSection space-section-top centerContainColumn'>
      <TitleSection title='Skills' />
      <div className='SkillSection__grid'>
        {
          skills.map((skill, index) => {
            return (
              <Card key={index} title={skill.title} src={skill.src} />
            )
          })
        }
      </div>
    </div>
  )
}
