import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '../../components/Card/Card'
import { TitleSection } from '../../components/TitleSection/TitleSection'
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
import ImgJest from '../../assets/skills/bxl-jest.svg'
import ImgKarma from '../../assets/skills/bxl-karma.svg'
import ImgMarkdown from '../../assets/skills/bxl-markdown.svg'
import ImgTailwind from '../../assets/skills/bxl-tailwind.svg'
import './Skill.css'

gsap.registerPlugin(ScrollTrigger);

export const Skill = () => {
  const { t } = useTranslation();
  
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
      title: 'Tailwind',
      src: ImgTailwind
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
      title: 'Jest',
      src: ImgJest
    },
    {
      title: 'Karma',
      src: ImgKarma
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
    {
      title: 'Agent Context',
      src: ImgMarkdown
    },
    {
      title: 'Model Context Protocol (MCP)',
    },
  ]

  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    const cards = gridElement.children;
    if (!cards || cards.length === 0) return;

    // Establecer estados iniciales
    gsap.set(cards, {
      y: 50,
      opacity: 0,
      scale: 0.8
    });

    const animation = gsap.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: gridElement,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      if (animation) animation.kill();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === gridElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className='container SkillSection space-section-top centerContainColumn'>
      <TitleSection title={t('skills.title')} />
      <div ref={gridRef} className='SkillSection__grid'>
        {
          skills.map((skill, index) => {
            return (
              <Card key={index} title={skill.title} src={skill.src} index={index} />
            )
          })
        }
      </div>
    </div>
  )
}
