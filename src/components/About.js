import React from 'react'
import reactIcon from '../imgs/skills-icons/React-icon.svg'
import jsIcon from '../imgs/skills-icons/js-icon.svg'
import htmlIcon from '../imgs/skills-icons/html-icon.svg'
import cssIcon from '../imgs/skills-icons/css-icon.svg'
import sassIcon from '../imgs/skills-icons/sass-icon.svg'
import webpackIcon from '../imgs/skills-icons/webpack-icon.svg'
import tailwindIcon from '../imgs/skills-icons/tailwind-icon.svg'
import tsIcon from '../imgs/skills-icons/typescript-icon.svg'
import npmIcon from '../imgs/skills-icons/npm-icon.svg'
import vscodeIcon from '../imgs/skills-icons/vscode-icon.svg'
import pythonIcon from '../imgs/skills-icons/python-icon.svg'
import gitIcon from '../imgs/skills-icons/git-icon.svg'
import FadeInSection from './FadeInSection'

const About = props => {
  return (
    <section className="about" id="about">
      <FadeInSection>
        <h1 className="skills-title">
          <span className="number">01.</span> Skills
        </h1>
      </FadeInSection>
      <FadeInSection>
        <div className="skill-list">
          <a href="https://reactjs.org/" target="_blank">
            <img src={reactIcon} alt="react icon" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={tsIcon} alt="typescript icon" />
          </a>
          <a href="https://www.javascript.com/" target="_blank">
            <img src={jsIcon} alt="js icon" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img src={htmlIcon} alt="html icon" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img src={cssIcon} alt="css icon" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img src={tailwindIcon} alt="tailwind icon" />
          </a>
          <a href="https://sass-lang.com/" target="_blank">
            <img src={sassIcon} alt="sass icon" />
          </a>
          <a href="https://webpack.js.org/" target="_blank">
            <img src={webpackIcon} alt="webpack icon" />
          </a>
          <a href="https://www.python.org/" target="_blank">
            <img src={pythonIcon} alt="python icon" />
          </a>
          <a href="https://www.npmjs.com/" target="_blank">
            <img src={npmIcon} alt="npm icon" />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank">
            <img src={vscodeIcon} alt="vscode icon" />
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <img src={gitIcon} alt="git icon" />
          </a>
        </div>
      </FadeInSection>
    </section>
  )
}

export default About
