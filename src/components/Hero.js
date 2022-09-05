import React from "react";
import Switch from "./Switch";
import pdf from "../tb-cv.pdf";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Hero = (props) => {
  return (
    <section className="hero" id="home">
      <Switch place="mb-hero-switch" />
      <div className="hero__wrapper">
        <div className="name__wrapper">
          <h1 className="first-name">tom</h1>
          <h1 className="last-name">binnie</h1>
        </div>
        <div className="title__wrapper">
          <h1 className="web-title">web</h1>
          <h1 className="dev-title"> developer</h1>
        </div>
        <div className="heroBtns">
          <a href="mailto:tombinnie@protonmail.com">
            <img src={emailIcon} />
          </a>
          <a href={pdf} target="_blank">
            <img src={cvIcon} />
          </a>
          <a href="https://github.com/tomkotsu" target="_blank">
            <img src={githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/tom-binnie/" target="_blank">
            <img src={linkedinIcon} />
          </a>
        </div>
      </div>
      <div className="spacer layer1"></div>
    </section>
  );
};

export default Hero;
