import React from 'react'
import jsIcon from '../imgs/skills-icons/js-icon.svg'
import fmnGif from '../imgs/fmn-2.png'
import reactIcon from '../imgs/skills-icons/React-icon.svg'
import cssIcon from '../imgs/skills-icons/css-icon.svg'

const FmnProject = () => {
  return (
    <div className="project-pane">
      <a href="https://main.d2mbbiwws2b0rf.amplifyapp.com/" target="_blank">
        <img src={fmnGif} alt="" className="project-img" />
      </a>
      <div className="project-info">
        <h1 className="project-title">Forget-Me-Not </h1>
        <p className="project-text">
          Flower Identification app made with React, leveraging self-built
          computer vision AI made with TensorFlow. Soon to include user
          authentication and saved results using Node.JS/Express. Deployed using
          AWS Amplify.
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
          <p>
            <a
              href="https://main.d2mbbiwws2b0rf.amplifyapp.com/"
              target="_blank"
            >
              Live Site
            </a>
          </p>
          <p>
            <a href="https://github.com/tomkotsu/forget-me-not" target="_blank">
              Source Code
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FmnProject
