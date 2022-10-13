import React from 'react'
import Switch from './Switch'
import pdf from '../tb-cv.pdf'
import emailIcon from '../imgs/contact-icons/email-icon.svg'
import linkedinIcon from '../imgs/contact-icons/linkedin-icon.svg'
import cvIcon from '../imgs/contact-icons/cv-icon.svg'
import githubIcon from '../imgs/contact-icons/github-icon.svg'

const Hero = props => {
  return (
    <section className="hero__wrapper">
      <h4 className='hi'>Hi, I'm</h4>
      <h1 className='name'>Tom Binnie.</h1>
      <h1 className='job-title'>I'm a Frontend Developer.</h1>
      <p className='intro'>
        I'm using React, JavaScript, HTML and SASS to build dynamic,
        responsive sites that do useful things. I'm applying my professional
        Data Science experience with Python and SQL, as well as learning
        Node.JS, to learn more about the backend, too.
      </p>
      <a href="#projects" className='contact-link'><button className='btn hero-btn'>View my projects!</button></a>
    </section>
  )
}

export default Hero
