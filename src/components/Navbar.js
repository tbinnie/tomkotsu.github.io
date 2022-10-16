import React from 'react'
import Switch from './Switch'
import logo from '../imgs/crane-icon.svg'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__wrapper">
        <img src={logo} className='logo'/>
        <div className="nav-items">
          <a href="#about"><span className='number'>01. </span>Skills</a>
          <a href="#projects" className="nav-projects">
          <span className='number'>02. </span>Projects
          </a>
          <a href="#contact"><span className='number'>03. </span>Contact</a>
          <Switch place="navSwitch" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
