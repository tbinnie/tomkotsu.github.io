import React from "react";

import pdf from "../tb-cv.pdf";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Contact = (props) => {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <h1>contact</h1>
        <div className="contactBtns">
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
    </section>
  );
};

export default Contact;
