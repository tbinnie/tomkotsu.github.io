import React from 'react'
import reactIcon from '../imgs/skills-icons/React-icon.svg'
import jsIcon from '../imgs/skills-icons/js-icon.svg'
import soundscapePic from '../imgs/soundscape.png'
import cssIcon from '../imgs/skills-icons/css-icon.svg'

const SoundscapeProject = () => {
  return (
    <div className="project-pane reversed-project">
      <a href="https://main.doc45pnqdai33.amplifyapp.com/" target="_blank">
        <img src={soundscapePic} alt="" className="project-img" />
      </a>
      <div className="project-info">
        <h2 className="project-title">Soundscape </h2>
        <p className="project-text">
          Mobile-first responsive E-Commerce Frontend site built with React.
          Utilises hooks in functional components to track and update the state
          of items in the store and the user's cart. Deployed using Amazon Web
          Services Amplify.
        </p>
        <div className="project-icons">
          <a
            href="https://reactjs.org/"
            target="_blank"
            className="project-icon"
          >
            <img src={reactIcon} alt="react icon" />
          </a>
          <a
            href="https://www.javascript.com/"
            target="_blank"
            className="project-icon"
          >
            <img src={jsIcon} alt="js icon" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            className="project-icon"
          >
            <img src={cssIcon} alt="css icon" />
          </a>
        </div>
        <div className="project-links">
          <a href="https://main.doc45pnqdai33.amplifyapp.com/" target="_blank">
            Live Site
          </a>
          <a href="https://github.com/tomkotsu/soundscape" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default SoundscapeProject
