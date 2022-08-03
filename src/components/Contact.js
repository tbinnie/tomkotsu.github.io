import React from "react";
import emailIcon from "../imgs/contact-icons/email-icon.svg";
import linkedinIcon from "../imgs/contact-icons/linkedin-icon.svg";
import cvIcon from "../imgs/contact-icons/cv-icon.svg";
import githubIcon from "../imgs/contact-icons/github-icon.svg";

const Contact = (props) => {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <h1>Contact</h1>
        <div className="contactBtns">
          <img src={emailIcon} />
          <img src={cvIcon} />
          <img src={githubIcon} />
          <img src={linkedinIcon} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
