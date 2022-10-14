import React from 'react'

import pdf from '../tb-cv.pdf'
import emailIcon from '../imgs/contact-icons/email-icon.svg'
import linkedinIcon from '../imgs/contact-icons/linkedin-icon.svg'
import cvIcon from '../imgs/contact-icons/cv-icon.svg'
import githubIcon from '../imgs/contact-icons/github-icon.svg'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className='touch-title'>
        <span className="number">03. Get In Touch?</span>
      </h2>
      <h1 className='contact-title'>Contact me!</h1>
      <p className='contact-text'>
        I am currently actively looking for full-time Frontend Development
        positions. I would love to hear about any opportunities, and I can be
        contacted using the links below.
      </p>
      <div className="contactBtns">
        <a href="mailto:tombinnie@protonmail.com" className="contact-link">
          <button className="btn">
            <img src={emailIcon} /> Email me!
          </button>
        </a>
        <a href={pdf} target="_blank" className="contact-link">
          <button className="btn">
            <img src={cvIcon} />
            My CV
          </button>
        </a>
        <a
          href="https://github.com/tomkotsu"
          target="_blank"
          className="contact-link"
        >
          <button className="btn">
            <img src={githubIcon} />
            Github
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/tom-binnie/"
          target="_blank"
          className="contact-link"
        >
          <button className="btn">
            <img src={linkedinIcon} />
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  )
}

export default Contact
