import React from 'react'
import githubIcon from '../imgs/contact-icons/github-icon.svg'
import linkedinIcon from '../imgs/contact-icons/linkedin-icon.svg'
import cvIcon from '../imgs/contact-icons/cv-icon.svg'
import pdf from '../tb-cv.pdf'

const Sidebars = () => {
  return (
    <>
      <div className="left-sidebar">
        <hr className="sidelines"></hr>
        <a href={pdf} target="_blank">
          <img src={cvIcon} className="side-img" />
        </a>
        <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank">
          <img src={linkedinIcon} className="side-img" />
        </a>
        <a href="https://github.com/tomkotsu" target="_blank">
          <img src={githubIcon} className="side-img" />
        </a>
      </div>
      <div className="right-sidebar">
        <hr className="sidelines"></hr>
        <a href="mailto:tombinnie@protonmail.com" className="sidemail">
          tombinnie@protonmail.com
        </a>
      </div>
    </>
  )
}

export default Sidebars
