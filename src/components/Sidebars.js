import React from 'react'
import githubIcon from '../imgs/contact-icons/github-icon.svg'

const Sidebars = () => {
  return (
    <>
    <div className="left-sidebar">
      <hr className="sidelines"></hr>
      <a><img src={githubIcon} className="side-img"/></a>
      <a><img src={githubIcon} className="side-img"/></a>
      <a><img src={githubIcon} className="side-img"/></a>
    </div>
    <div className="right-sidebar">
      <hr className="sidelines"></hr>
      <a className='sidemail'>tombinnie@protonmail.com</a>
    </div>
    </>
  )
}

export default Sidebars
