import React from "react";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Hamburger = () => {
  return (
    <div className="hb-menu">
      <div className="hamburger__wrapper">
        <div className="hb-contact">
          <a href="mailto:tombinnie@protonmail.com">
            <img src={emailIcon} />
          </a>
          <img src={cvIcon} />
          <a href="https://github.com/tomkotsu" target="_blank">
            <img src={githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank">
            <img src={linkedinIcon} />
          </a>
        </div>
        <div className="hb-links">
          <a href="#home">Top</a>
          <a href="#about">About</a>
          <a href="#projects">
            Projects
          </a>
          <a href="#contact">Contact</a>
          <a href="#home">Theme</a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
