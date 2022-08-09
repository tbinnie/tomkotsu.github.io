import React from "react";
import Switch from "./Switch";

import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";
import { HbContext } from "./HbLogic";

const Hamburger = () => {
  const { hbOpen, setHbOpen } = React.useContext(HbContext);

  return (
    <div className="hb-menu">
      <Switch place="hb-switch" />
      <div className="hb-links">
        <a href="#home" onClick={() => setHbOpen(!hbOpen)}>
          top
        </a>
        <a href="#about" onClick={() => setHbOpen(!hbOpen)}>
          about
        </a>
        <a href="#projects" onClick={() => setHbOpen(!hbOpen)}>
          projects
        </a>
        <a href="#contact" onClick={() => setHbOpen(!hbOpen)}>
          contact
        </a>
      </div>
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
      </div>
    </div>
  );
};

export default Hamburger;
